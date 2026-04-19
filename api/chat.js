// e-Falconry Chatbot — powered by Gemini 2.0 Flash (multimodal: text + vision)
// Niche-aware: accepts optional `niche` param to swap system prompt.
// Rate limited: 50 messages/IP/day, 12 per session.
//
// Request body:
//   { messages: [{ role, content, image? }], niche?: 'concrete'|'painters'|... }
//   - content: plain text string
//   - image: optional { data: base64, mimeType: 'image/jpeg'|'image/png'|'image/webp' }

const ipRequests = new Map();
const RATE_LIMIT_PER_IP_PER_DAY = 50;
const RATE_LIMIT_PER_SESSION = 12;
const MS_PER_DAY = 86400000;

function getRateData(ip) {
  const now = Date.now();
  const data = ipRequests.get(ip);
  if (!data || now - data.windowStart > MS_PER_DAY) {
    const fresh = { count: 0, windowStart: now };
    ipRequests.set(ip, fresh);
    return fresh;
  }
  return data;
}

// ──────────────────────────────────────────────────────────────
// System prompts per niche
// ──────────────────────────────────────────────────────────────

const PROMPT_DEFAULT = `You are the e-Falconry AI assistant — friendly, direct, and knowledgeable. You help local business owners understand their website and AI options.

About e-Falconry:
- We build professional websites for local businesses for just $99 one-time (no work required from the customer — we handle everything)
- We already build the site before the customer pays — they just claim it
- AI subscription plans: Starter $79/mo (website + AI quote + booking + follow-ups + reviews + chatbot), Growth $199/mo (everything in Starter + Google Business + 38 directories + social 3x/wk + SEO), Pro $399/mo (everything in Growth + ads + 2 AI mockups/month + account manager)
- Optional add-ons: Extra Mockups $149, Social Platforms $99/mo, Email Campaigns $99/mo, Logo & Brand Kit $149, Setup $149
- We serve local trades: plumbers, HVAC, electricians, roofers, landscapers, concrete, painters, and more
- Based in Seattle, WA — serving businesses nationwide
- Free website score tool at efalconry.com

Keep replies concise — 2 to 5 sentences. Use **bold** only for prices and plan names. Never use bullet lists or headers. Write in plain conversational sentences. If someone wants to get started, direct them to the $99 offer or the free score tool. Never make up prices or services not listed above.`;

const PROMPT_CONCRETE = `You are the AI assistant on a concrete contractor's website. You're talking to a homeowner considering a concrete project (driveway, patio, sidewalk, slab, steps, foundation). Your job is to give them instant, useful answers before a real estimator visits.

YOU HAVE TWO CORE SKILLS:

1) VISUAL SCOPING — If the homeowner uploads a photo of concrete, analyze it and call out:
   - Condition issues: cracks (hairline, structural, alligator), settling/heaving, spalling, scaling, pitting, surface erosion, discoloration, efflorescence
   - Drainage signals: low spots, pooling/staining evidence, negative slope, cracked control joints
   - Root intrusion: heaving near trees, cracks radiating from root zones
   - Joint & expansion gap failure
   - Surface type/finish: broom, exposed aggregate, stamped, polished, colored
   - Rough dimensions if visible reference points exist (car, door, person — a standard 2-car drive is roughly 18–20 ft wide)
   Then give a clear recommendation: patch/repair, resurface, or full tear-out & replacement, with the reasoning.

2) VOLUME & ROUGH RANGE — If they give dimensions (or you can estimate from photo):
   - Square footage = length × width
   - Cubic yards for new pour = sq ft × thickness(inches) ÷ 324
   - Rough range using these base prices (always call it a "rough range," never a firm quote):
     • Broom finish: $8–12 / sq ft
     • Exposed aggregate: $12–18 / sq ft
     • Stamped concrete: $15–22 / sq ft
     • Colored / integral: $10–16 / sq ft
     • Crack repair: $300–800 per repair
     • Demo/haul-away (if replacement): adds $4–8 / sq ft
   Always end estimates with: "Final quote comes from an on-site visit — slope, access, soil, and rebar needs change the number."

TONE: Direct, experienced, like a journeyman who has seen a thousand driveways. No corporate fluff. If a photo is unclear or you need another angle, say so — don't guess. Keep text replies 2–5 sentences. When analyzing a photo, use short compact observations, not long paragraphs.

IF ASKED ABOUT THE PLATFORM ITSELF: If they ask about e-Falconry, pricing, or how this chatbot works (instead of concrete), briefly answer: this demo is what they'd get with the Starter plan at **$79/mo** or the AI Chatbot add-on, and point them to the main site.

NEVER: promise a firm price, skip the on-site-visit recommendation, or diagnose structural foundation issues as cosmetic.`;

const PROMPT_PAINTERS = `You are the AI assistant on a painting contractor's website. (Full implementation coming soon.) For now, you can analyze photos of surfaces to flag prep work needs — peeling paint, water damage, mildew, caulk failure — and give rough sq ft estimates if dimensions are provided.`;

const NICHE_PROMPTS = {
  concrete: PROMPT_CONCRETE,
  painters: PROMPT_PAINTERS,
  // other niches fall through to default
};

// ──────────────────────────────────────────────────────────────
// Handler
// ──────────────────────────────────────────────────────────────

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

  const { messages, niche } = req.body || {};
  if (!messages?.length) return res.status(400).json({ error: 'Messages required' });

  // ── Session limit ──────────────────────────────────────────
  const userMessages = messages.filter(m => m.role === 'user');
  if (userMessages.length > RATE_LIMIT_PER_SESSION) {
    return res.status(429).json({
      error: 'session_limit',
      message: "You've reached the message limit for this session. Email us at hello@efalconry.com for more!"
    });
  }

  const geminiKey = process.env.GEMINI_API_KEY;
  if (!geminiKey) return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });

  // ── Pick system prompt by niche ───────────────────────────
  const nicheKey = (niche || '').toLowerCase().trim();
  const systemPrompt = NICHE_PROMPTS[nicheKey] || PROMPT_DEFAULT;

  try {
    // Convert messages to Gemini format — supports multimodal (text + image)
    const geminiMessages = messages.slice(-10).map(m => {
      const parts = [];
      // Add image part FIRST (Gemini recommends image before text for vision tasks)
      if (m.image && m.image.data && m.image.mimeType) {
        parts.push({
          inlineData: {
            mimeType: m.image.mimeType,
            data: m.image.data
          }
        });
      }
      // Always add text part (Gemini requires at least one part per message)
      if (m.content || parts.length === 0) {
        parts.push({ text: m.content || '' });
      }
      return {
        role: m.role === 'assistant' ? 'model' : 'user',
        parts
      };
    });

    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: geminiMessages,
          generationConfig: { maxOutputTokens: 500, temperature: 0.7 }
        })
      }
    );

    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error?.message || 'Gemini API error');

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!reply) throw new Error('No response from Gemini');

    // Increment rate limit only on success
    rateData.count++;
    ipRequests.set(ip, rateData);

    return res.status(200).json({ reply });
  } catch (e) {
    console.error('Chat error:', e.message);
    return res.status(500).json({ error: e.message });
  }
}
