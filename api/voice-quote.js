// e-Falconry Voice-to-Quote
// Contractor records a voice note describing a job.
// We send the audio to Gemini 2.0 Flash, which:
//   1) Transcribes it
//   2) Extracts structured fields for a quote (client, type, area, budget, etc.)
// The app then feeds those fields into /api/quote to generate the PDF.
//
// Request body:
//   {
//     audio: { data: base64, mimeType: 'audio/webm' | 'audio/ogg' | 'audio/mp4' | 'audio/wav' },
//     contractorType?: 'concrete' | 'painters' | 'landscaping' | ... // biases extraction
//   }
//
// Response:
//   {
//     transcript: string,
//     fields: {
//       clientName, clientAddress, clientPhone, clientEmail,
//       projectType, projectDescription,
//       measurements: [{ label, value, unit }],    // e.g. [{label:'Area', value:'400', unit:'sq ft'}]
//       materials:    [{ item, quantity, unit, unitCost }],
//       laborItems:   [{ description, hours, rate }],
//       budget, color, timeline, notes,
//     },
//     confidence: number   // 0..1, how confident the extraction is overall
//   }

const ipRequests = new Map();
const RATE_LIMIT_PER_IP_PER_DAY = 40;
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

const EXTRACTION_PROMPT = `You are a senior estimator for a contractor. The attached audio is a contractor describing a new job they just quoted or visited on-site. Your job is to:

1) Transcribe the audio verbatim.
2) Extract every scoping fact into a structured JSON object for a quote generator.

Output STRICT JSON ONLY — no markdown, no commentary, no backticks. Schema:

{
  "transcript": "<full verbatim transcript>",
  "fields": {
    "clientName":        string or null,
    "clientAddress":     string or null,
    "clientPhone":       string or null,
    "clientEmail":       string or null,
    "projectType":       string or null,      // "stamped concrete patio", "exterior repaint", "landscape design", etc.
    "projectDescription":string or null,      // 1-2 sentence summary of scope
    "measurements": [                          // one entry per dimension mentioned
      { "label": "Area",      "value": "400",  "unit": "sq ft" },
      { "label": "Thickness", "value": "4",    "unit": "inches" }
    ],
    "materials": [                             // one entry per material mentioned
      { "item": "5000 PSI concrete", "quantity": "", "unit": "", "unitCost": "" }
    ],
    "laborItems": [                            // one entry per labor task mentioned
      { "description": "Form and pour slab", "hours": "", "rate": "" }
    ],
    "budget":    string or null,               // "8000" if they said "budget is around 8 grand"
    "color":     string or null,               // "charcoal", "warm white", etc.
    "timeline":  string or null,               // "before June", "next 2 weeks", "ASAP"
    "notes":     string or null                // anything that didn't fit above: access, warranties, special requests
  },
  "confidence": number (0 to 1)
}

RULES:
- Return null for fields the contractor didn't mention. Do NOT guess or fabricate.
- Numbers should be strings WITHOUT commas or units ("8000" not "$8,000").
- Budget: if they said "8 grand" → "8000"; "around 10k" → "10000"; "75 hundred" → "7500".
- Always extract as much detail into measurements, materials, and laborItems as possible — leave quantity/cost/hours blank if unclear.
- confidence: 0.9+ if audio is clear and facts are unambiguous; 0.6-0.8 if audio is noisy or facts implied; <0.5 if you're mostly guessing.
- Transcript field is MANDATORY and must be verbatim — do not summarize.`;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim()
          || req.headers['x-real-ip']
          || req.socket?.remoteAddress
          || 'unknown';

  const rateData = getRateData(ip);
  if (rateData.count >= RATE_LIMIT_PER_IP_PER_DAY) {
    return res.status(429).json({
      error: 'rate_limited',
      message: "Daily voice-quote limit reached. Try again tomorrow."
    });
  }

  const { audio, contractorType } = req.body || {};
  if (!audio?.data || !audio?.mimeType) {
    return res.status(400).json({ error: 'audio.data and audio.mimeType required' });
  }

  const geminiKey = process.env.GEMINI_API_KEY;
  if (!geminiKey) return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });

  // Context hint helps Gemini prefer trade-specific vocabulary
  const contextLine = contractorType
    ? `\n\nCONTEXT: This contractor is a ${contractorType} specialist. Bias interpretation toward ${contractorType} vocabulary and typical project types.`
    : '';

  try {
    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            role: 'user',
            parts: [
              { inlineData: { mimeType: audio.mimeType, data: audio.data } },
              { text: EXTRACTION_PROMPT + contextLine }
            ]
          }],
          generationConfig: {
            maxOutputTokens: 2000,
            temperature: 0.2,
            responseMimeType: 'application/json'
          }
        })
      }
    );

    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error?.message || 'Gemini API error');

    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!raw) throw new Error('No response from Gemini');

    // Gemini sometimes wraps in ```json despite responseMimeType; strip safely.
    const cleaned = raw.replace(/^```json\s*|\s*```$/g, '').trim();
    let parsed;
    try {
      parsed = JSON.parse(cleaned);
    } catch (parseErr) {
      return res.status(500).json({
        error: 'parse_failed',
        message: 'Could not parse AI response as JSON',
        raw: cleaned.slice(0, 500)
      });
    }

    rateData.count++;
    ipRequests.set(ip, rateData);

    return res.status(200).json({
      transcript: parsed.transcript || '',
      fields: parsed.fields || {},
      confidence: typeof parsed.confidence === 'number' ? parsed.confidence : 0.7
    });
  } catch (e) {
    console.error('Voice-quote error:', e.message);
    return res.status(500).json({ error: e.message });
  }
}
