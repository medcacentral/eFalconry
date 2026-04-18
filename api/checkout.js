// e-Falconry Checkout — handles $99 site purchase
// Supports Stripe, PayPal, and Apple/Google Pay via Stripe
// After payment: sends confirmation, triggers onboarding, notifies owner

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { action, ...body } = req.body || {};

  // ── Create Stripe payment intent ──────────────────────────
  if (action === 'stripe_intent') {
    const { bizName, email, plan } = body;
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) return res.status(500).json({ error: 'Stripe not configured' });

    const prices = { site: 9900, maintain: 4900, growth: 19900, ai_pro: 39900 };
    const amount = prices[plan || 'site'] || 9900;
    const labels = { site: '$99 Website', maintain: 'Maintain $49/mo', growth: 'Growth $199/mo', ai_pro: 'AI Pro $399/mo' };

    try {
      const resp = await fetch('https://api.stripe.com/v1/payment_intents', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${stripeKey}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          amount,
          currency: 'usd',
          'payment_method_types[]': 'card',
          'payment_method_types[]': 'apple_pay',
          'payment_method_types[]': 'google_pay',
          description: `e-Falconry — ${labels[plan||'site']} for ${bizName}`,
          'metadata[bizName]': bizName || '',
          'metadata[email]': email || '',
          'metadata[plan]': plan || 'site',
          receipt_email: email || '',
        }).toString(),
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.error?.message || 'Stripe error');
      return res.status(200).json({ clientSecret: data.client_secret });
    } catch(e) {
      return res.status(500).json({ error: e.message });
    }
  }

  // ── Create PayPal order ───────────────────────────────────
  if (action === 'paypal_order') {
    const { bizName, email, plan } = body;
    const clientId = process.env.PAYPAL_CLIENT_ID;
    const secret   = process.env.PAYPAL_SECRET;
    if (!clientId || !secret) return res.status(500).json({ error: 'PayPal not configured' });

    const prices = { site: '99.00', maintain: '49.00', growth: '199.00', ai_pro: '399.00' };
    const amount = prices[plan||'site'] || '99.00';
    const labels = { site: '$99 Website', maintain: 'Maintain Plan', growth: 'Growth Plan', ai_pro: 'AI Pro Plan' };

    try {
      // Get access token
      const tokenResp = await fetch('https://api-m.paypal.com/v1/oauth2/token', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${clientId}:${secret}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
      });
      const { access_token } = await tokenResp.json();

      // Create order
      const orderResp = await fetch('https://api-m.paypal.com/v2/checkout/orders', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          intent: 'CAPTURE',
          purchase_units: [{
            amount: { currency_code: 'USD', value: amount },
            description: `e-Falconry — ${labels[plan||'site']} for ${bizName}`,
            custom_id: JSON.stringify({ bizName, email, plan }),
          }],
          application_context: {
            brand_name: 'e-Falconry',
            user_action: 'PAY_NOW',
          },
        }),
      });
      const order = await orderResp.json();
      if (!orderResp.ok) throw new Error(order.message || 'PayPal error');
      return res.status(200).json({ orderId: order.id });
    } catch(e) {
      return res.status(500).json({ error: e.message });
    }
  }

  // ── Confirm payment + trigger onboarding ─────────────────
  if (action === 'confirm') {
    const { bizName, email, phone, plan, previewUrl, paymentMethod } = body;

    // Send confirmation to customer
    await sendConfirmationEmail(email, bizName, plan, previewUrl);

    // Notify owner
    await notifyOwner(bizName, email, phone, plan, paymentMethod);

    // Trigger onboarding sheet entry
    const sheetWebhook = process.env.SHEET_WEBHOOK_URL;
    if (sheetWebhook) {
      fetch(sheetWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'payment', bizName, email, phone, plan, previewUrl, paymentMethod, timestamp: new Date().toISOString() }),
      }).catch(console.error);
    }

    return res.status(200).json({ success: true });
  }

  return res.status(400).json({ error: 'Unknown action' });
}

async function sendConfirmationEmail(to, bizName, plan, previewUrl) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey || !to) return;
  const planNames = { site: '$99 Website', maintain: 'Maintain $49/mo', growth: 'Growth $199/mo', ai_pro: 'AI Pro $399/mo' };
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'e-Falconry <hello@efalconry.com>',
      to,
      subject: `Payment confirmed — your new website is being prepared`,
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#F07A20">You're in — welcome to e-Falconry!</h2>
        <p>Hi${bizName ? ` — thanks for claiming <b>${bizName}</b>` : ''}!</p>
        <p>Your payment for <b>${planNames[plan||'site']}</b> has been confirmed. Here's what happens next:</p>
        <ol style="line-height:2">
          <li>We finalize your website with your exact business info</li>
          <li>We connect it to your domain (or set one up for you)</li>
          <li>Your site goes live within <b>48 hours</b></li>
        </ol>
        ${previewUrl ? `<p>Your preview is still live at: <a href="${previewUrl}">${previewUrl}</a></p>` : ''}
        <p>Questions? Reply to this email or text us — we're real people and we respond fast.</p>
        <p style="margin-top:24px">— Martin<br>e-Falconry<br><a href="https://efalconry.com">efalconry.com</a></p>
      </div>`,
    }),
  }).catch(console.error);
}

async function notifyOwner(bizName, email, phone, plan, paymentMethod) {
  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL || 'hello@efalconry.com';
  if (!resendKey) return;
  const planNames = { site: '$99 Website', maintain: 'Maintain $49/mo', growth: 'Growth $199/mo', ai_pro: 'AI Pro $399/mo' };
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'e-Falconry Payments <hello@efalconry.com>',
      to: notifyEmail,
      subject: `💰 New payment: ${planNames[plan||'site']} — ${bizName}`,
      html: `<div style="font-family:sans-serif;max-width:600px">
        <h2 style="color:#F07A20">💰 New Payment Received</h2>
        <p><b>Business:</b> ${bizName}</p>
        <p><b>Email:</b> <a href="mailto:${email}">${email}</a></p>
        <p><b>Phone:</b> ${phone||'—'}</p>
        <p><b>Plan:</b> ${planNames[plan||'site']}</p>
        <p><b>Payment via:</b> ${paymentMethod||'—'}</p>
        <p><b>Time:</b> ${new Date().toLocaleString()}</p>
        <hr>
        <p>Action needed: build and launch their site within 48 hours.</p>
      </div>`,
    }),
  }).catch(console.error);
}
