export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { url, email, bizName } = req.body || {};
  if (!url) return res.status(400).json({ error: 'URL required' });

  // 1. Fetch the website content server-side (no CORS issue here)
  let pageContent = '[Could not fetch page]';
  try {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 8000);
    const pageRes = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; eFalconryBot/1.0; website audit)' }
    });
    const html = await pageRes.text();
    // Strip scripts/styles, get text
    const stripped = html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .substring(0, 4000);
    if (stripped.length > 50) pageContent = stripped;
  } catch (e) {
    pageContent = '[Page could not be loaded — analyzing URL only]';
  }

  // 2. Call Claude API
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  const prompt = `You are a professional web design auditor for local businesses. Analyze this website and give an honest, critical, specific score.

URL: ${url}
Business name: ${bizName || 'Unknown'}
Page content: ${pageContent}

Score each category 0–20 based on what you can observe. Be realistic — most local business sites score 5–14 per category. Only give high scores if the evidence clearly supports it.

Categories:
- design: Visual quality, modernity, professionalism, layout
- mobile: Mobile-friendliness indicators (responsive design, viewport meta, touch-friendly elements)
- trust: Trust signals (reviews, credentials, testimonials, SSL, about page, team photos)
- seo: SEO basics (title tags, meta descriptions, headings, local keywords, structured data hints)
- content: Content quality, clarity, calls-to-action, contact information completeness

Return ONLY valid JSON (no markdown, no explanation):
{
  "total": <sum of all 5 categories>,
  "design": <0-20>,
  "mobile": <0-20>,
  "trust": <0-20>,
  "seo": <0-20>,
  "content": <0-20>,
  "issues": [
    "<specific issue 1 with concrete detail>",
    "<specific issue 2 with concrete detail>",
    "<specific issue 3 with concrete detail>",
    "<specific issue 4 with concrete detail>"
  ],
  "summary": "<one sentence identifying the single biggest problem holding this site back>",
  "grade": "<Poor|Needs Work|Average|Good|Excellent>"
}`;

  try {
    const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 600,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await claudeRes.json();
    if (!claudeRes.ok) throw new Error(data.error?.message || 'Claude API error');

    const text = data.content?.[0]?.text || '';
    const clean = text.replace(/```json|```/g, '').trim();
    const result = JSON.parse(clean);

    // Log the lead (in production you'd save to a DB or email)
    console.log(`LEAD: ${email} | ${bizName} | ${url} | score:${result.total}`);

    return res.status(200).json(result);
  } catch (e) {
    console.error('Score error:', e.message);
    return res.status(500).json({ error: e.message });
  }
}
