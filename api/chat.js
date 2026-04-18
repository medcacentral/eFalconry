// In-memory rate limiting (resets on cold start, good enough for abuse prevention)
// For production scale, swap the Map for a KV store like Vercel KV or Upstash Redis
const ipRequests = new Map();
const RATE_LIMIT_PER_IP_PER_DAY = 50;
const RATE_LIMIT_PER_SESSION = 10;
const MS_PER_DAY = 86400000;

function getRateData(ip) {
  const now = Date.now();
  const data = ipRequests.get(ip);
  if (!data || now - data.windowStart > MS_PER_DAY) {
    // Fresh window
    const fresh = { count: 0, windowStart: now };
    ipRequests.set(ip, fresh);
    return fresh;
  }
  return data;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // ── Rate limiting ──────────────────────────────────────────
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim()
          || req.headers['x-real-ip']
          || req.socket?.remoteAddress
          || 'unknown';

  const rateData = getRateData(ip);

  if (rateData.count >= RATE_LIMIT_PER_IP_PER_DAY) {
    return res.status(429).json({
      error: 'rate_limited',
      message: "You've reached the daily limit for this chat. Try again tomorrow."
    });
  }

  const { messages } = req.body || {};
  if (!messages?.length) return res.status(400).json({ error: 'Messages required' });

  // ── Session limit: count only user messages ────────────────
  const userMessages = messages.filter(m => m.role === 'user');
  if (userMessages.length > RATE_LIMIT_PER_SESSION) {
    return res.status(429).json({
      error: 'session_limit',
      message: "You've reached the message limit for this session. Email us at hello@efalconry.com for more!"
    });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: `You are the e-Falconry AI assistant — friendly, direct, and knowledgeable. You help local business owners understand their website and AI options.

About e-Falconry:
- We build professional websites for local businesses for just $99 one-time (no work required from the customer — we handle everything)
- We already build the site before the customer pays — they just claim it
- AI subscription plans: Maintain $49/mo (hosting + updates), Growth $199/mo (SEO + AI search optimization + reviews), AI Pro $399/mo (everything + AI chatbot + smart booking + quote automation + lead gen)
- Optional add-ons: AI Chatbot Integration $299, Smart Booking $199, Quote Automation $249, Google Business Optimization $99, Logo & Brand Kit $149, Full White-Glove Launch $149
- We serve local trades: plumbers, HVAC, electricians, roofers, landscapers, contractors, and more
- Based in Seattle, WA — serving businesses nationwide
- Free website score tool at efalconry.com

Keep replies concise — 2 to 5 sentences. Use **bold** only for prices and plan names. Never use bullet lists or headers. Write in plain conversational sentences. If someone wants to get started, direct them to the $99 offer or the free score tool. Never make up prices or services not listed above.`,
        messages: messages.slice(-10)
      })
    });

    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error?.message || 'API error');

    // Increment rate limit counter only on success
    rateData.count++;
    ipRequests.set(ip, rateData);

    return res.status(200).json({ reply: data.content[0].text });
  } catch (e) {
    console.error('Chat error:', e.message);
    return res.status(500).json({ error: e.message });
  }
}
