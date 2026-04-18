// e-Falconry Merchandise API
// Integrates with Printful for mockup generation and order fulfillment
// Customers never see Printful — it's fully white-labeled

// Printful product IDs for core items
const PRODUCTS = {
  tshirt: {
    id: 71,           // Bella + Canvas 3001 Unisex T-shirt (most popular)
    variantId: 4011,  // Black, M
    name: 'T-Shirt',
    basePrice: 12.95,
    ourPrice: 29.99,
  },
  hat: {
    id: 134,          // Classic Dad Hat
    variantId: 9818,  // Black
    name: 'Hat',
    basePrice: 9.95,
    ourPrice: 24.99,
  },
  hoodie: {
    id: 146,          // Gildan 18500 Heavy Blend Hoodie
    variantId: 10981, // Black, M
    name: 'Hoodie',
    basePrice: 24.95,
    ourPrice: 54.99,
  },
  jacket: {
    id: 163,          // Bella + Canvas Full-Zip Hoodie
    variantId: 11606, // Black, M
    name: 'Zip Jacket',
    basePrice: 38.95,
    ourPrice: 79.99,
  },
  mug: {
    id: 19,           // White 11oz Mug
    variantId: 1320,
    name: 'Coffee Mug',
    basePrice: 6.95,
    ourPrice: 19.99,
  },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { action } = req.body || req.query || {};

  // ── Generate logo mockups for a business ─────────────────
  if (action === 'mockups') {
    const { bizName, logoUrl, category } = req.body || {};
    if (!bizName) return res.status(400).json({ error: 'bizName required' });

    const printfulKey = process.env.PRINTFUL_API_KEY;
    if (!printfulKey) {
      // Return placeholder mockup data if Printful not configured
      return res.status(200).json({
        mockups: generatePlaceholderMockups(bizName),
        note: 'Placeholder mockups — configure PRINTFUL_API_KEY for real mockups',
      });
    }

    try {
      const mockups = await generateMockups(bizName, logoUrl, printfulKey);
      return res.status(200).json({ mockups });
    } catch(e) {
      console.error('Mockup error:', e.message);
      return res.status(200).json({
        mockups: generatePlaceholderMockups(bizName),
        error: e.message,
      });
    }
  }

  // ── Get product catalog with our pricing ─────────────────
  if (action === 'catalog' || req.method === 'GET') {
    return res.status(200).json({
      products: Object.entries(PRODUCTS).map(([key, p]) => ({
        key,
        name: p.name,
        price: p.ourPrice,
        margin: (p.ourPrice - p.basePrice).toFixed(2),
      })),
      bundles: [
        { name: 'Starter Kit', items: ['tshirt x5','hat x3'], price: 199, description: 'First order of branded items' },
        { name: 'Team Pack', items: ['tshirt x12','hat x6','mug x6'], price: 449, description: 'Kit out your whole team' },
        { name: 'Brand Launch', items: ['tshirt x20','hat x10','hoodie x5','jacket x3'], price: 899, description: 'Full brand rollout' },
      ],
    });
  }

  // ── Create a Printful order ───────────────────────────────
  if (action === 'order') {
    const { items, shipping, bizName, logoUrl } = req.body || {};
    const printfulKey = process.env.PRINTFUL_API_KEY;
    if (!printfulKey) return res.status(500).json({ error: 'Printful not configured' });
    if (!items?.length || !shipping) return res.status(400).json({ error: 'items and shipping required' });

    try {
      const order = await createOrder(items, shipping, bizName, logoUrl, printfulKey);
      return res.status(200).json({ success: true, orderId: order.id, cost: order.costs });
    } catch(e) {
      return res.status(500).json({ error: e.message });
    }
  }

  return res.status(400).json({ error: 'Unknown action' });
}

// ── Printful: generate mockup images ─────────────────────────
async function generateMockups(bizName, logoUrl, apiKey) {
  const results = [];

  for (const [key, product] of Object.entries(PRODUCTS).slice(0, 3)) { // first 3 products
    const resp = await fetch(`https://api.printful.com/mockup-generator/create-task/${product.id}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        variant_ids: [product.variantId],
        format: 'jpg',
        files: [{
          placement: 'front',
          image_url: logoUrl || `https://via.placeholder.com/200x200/F07A20/FFFFFF?text=${encodeURIComponent(bizName)}`,
          position: { area_width: 1800, area_height: 2100, width: 600, height: 600, top: 750, left: 600 },
        }],
      }),
    });

    const data = await resp.json();
    if (data.code !== 200) continue;

    // Poll for mockup completion (Printful is async)
    const taskKey = data.result.task_key;
    let mockupUrl = null;
    for (let i = 0; i < 10; i++) {
      await new Promise(r => setTimeout(r, 2000));
      const pollResp = await fetch(`https://api.printful.com/mockup-generator/task?task_key=${taskKey}`, {
        headers: { 'Authorization': `Bearer ${apiKey}` },
      });
      const pollData = await pollResp.json();
      if (pollData.result?.status === 'completed') {
        mockupUrl = pollData.result.mockups?.[0]?.mockup_url;
        break;
      }
    }

    if (mockupUrl) {
      results.push({ product: product.name, key, mockupUrl, price: product.ourPrice });
    }
  }

  return results;
}

// ── Printful: create order ────────────────────────────────────
async function createOrder(items, shipping, bizName, logoUrl, apiKey) {
  const orderItems = items.map(item => {
    const product = PRODUCTS[item.key];
    return {
      variant_id: product.variantId,
      quantity: item.quantity || 1,
      files: [{
        url: logoUrl || `https://via.placeholder.com/200x200/F07A20/FFFFFF?text=${encodeURIComponent(bizName)}`,
        position: 'front',
      }],
    };
  });

  const resp = await fetch('https://api.printful.com/orders', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipient: shipping,
      items: orderItems,
      retail_costs: { shipping: '5.99' },
    }),
  });

  const data = await resp.json();
  if (data.code !== 200) throw new Error(data.error?.message || 'Printful order failed');
  return data.result;
}

// ── Fallback: CSS mockup placeholders (no Printful needed) ───
function generatePlaceholderMockups(bizName) {
  return [
    { product: 'T-Shirt', key: 'tshirt', mockupUrl: null, price: 29.99, placeholder: true, bizName },
    { product: 'Hat', key: 'hat', mockupUrl: null, price: 24.99, placeholder: true, bizName },
    { product: 'Hoodie', key: 'hoodie', mockupUrl: null, price: 54.99, placeholder: true, bizName },
  ];
}
