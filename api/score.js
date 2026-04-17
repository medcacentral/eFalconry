export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { url, email, bizName } = req.body || {};
  if (!url) return res.status(400).json({ error: 'URL required' });

  // 1. Try to fetch the website content server-side
  let pageContent = null;
  let fetchFailed = false;
  try {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 8000);
    const pageRes = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; eFalconryBot/1.0; website audit)' }
    });
    if (!pageRes.ok) {
      fetchFailed = true;
      pageContent = `[HTTP ${pageRes.status} — page returned an error]`;
    } else {
      const html = await pageRes.text();
      const stripped = html
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, 4000);
      pageContent = stripped.length > 80 ? stripped : null;
    }
  } catch (e) {
    fetchFailed = true;
    pageContent = null;
  }

  // 2. Build the prompt — different if we couldn't reach the site
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  let prompt;
  if (!pageContent || fetchFailed) {
    // Couldn't load the page — analyze based on URL/domain signals only
    prompt = `You are a professional web design auditor for local businesses.

The website at ${url} could not be loaded — the page failed to respond or returned an error.

Business name: ${bizName || 'Unknown'}

Since you cannot see the actual site, score based on what the inability to load implies, plus any domain-level signals you can infer. A site that fails to load is a serious problem.

Be honest: a site that cannot be reached will score very low on most categories because:
- Visitors cannot access it at all
- Mobile/desktop experience is zero
- No trust signals can be verified
- SEO is severely damaged by downtime or broken DNS
- No content can be assessed

Return ONLY valid JSON:
{
  "total": <sum, likely 5-20>,
  "design": <0-20>,
  "mobile": <0-20>,
  "trust": <0-20>,
  "seo": <0-20>,
  "content": <0-20>,
  "issues": [
    "Website could not be loaded — visitors are getting an error or blank page",
    "<second specific issue inferred from domain/URL>",
    "<third issue>",
    "<fourth issue>"
  ],
  "summary": "<one sentence — explain the site is unreachable and what that means for the business>",
  "grade": "Poor"
}`;
  } else {
    prompt = `You are a professional web design auditor for local businesses. Analyze this website honestly and critically.

URL: ${url}
Business name: ${bizName || 'Unknown'}
Page content: ${pageContent}

Score each category 0–20. Be realistic — most local business sites score 5–14 per category. Only give high scores if the evidence clearly supports it.

Categories:
- design: Visual quality, modernity, professionalism, layout
- mobile: Mobile-friendliness (responsive design, viewport meta, touch-friendly elements)
- trust: Trust signals (reviews, credentials, testimonials, SSL, about page)
- seo: SEO basics (title tags, meta descriptions, headings, local keywords)
- content: Content quality, clarity, calls-to-action, contact info completeness

Return ONLY valid JSON:
{
  "total": <sum of all 5>,
  "design": <0-20>,
  "mobile": <0-20>,
  "trust": <0-20>,
  "seo": <0-20>,
  "content": <0-20>,
  "issues": [
    "<specific issue 1 with concrete detail>",
    "<specific issue 2>",
    "<specific issue 3>",
    "<specific issue 4>"
  ],
  "summary": "<one sentence identifying the single biggest problem>",
  "grade": "<Poor|Needs Work|Average|Good|Excellent>"
}`;
  }

  // 3. Call Claude
  let result;
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
    if (!claudeRes.ok) throw new Error(data.error?.message || 'Claude error');
    result = JSON.parse(data.content[0].text.replace(/```json|```/g, '').trim());
  } catch (e) {
    console.error('Claude error:', e.message);
    return res.status(500).json({ error: 'Analysis failed: ' + e.message });
  }

  // 4. Send email notifications via Resend
  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL || 'hello@efalconry.com';
  const scoreColor = result.total < 40 ? '#E03030' : result.total < 65 ? '#F07A20' : '#22c55e';

  if (resendKey) {
    const sendEmail = (to, subject, html) =>
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: 'e-Falconry <hello@efalconry.com>', to, subject, html })
      }).catch(e => console.error('Email error:', e.message));

    // Notify owner
    sendEmail(notifyEmail,
      `New Lead: ${bizName || url} — Score ${result.total}/100`,
      `<div style="font-family:sans-serif;max-width:600px">
        <h2 style="color:#F07A20">🎯 New Website Audit Lead</h2>
        <p><b>Business:</b> ${bizName || '—'}</p>
        <p><b>Website:</b> <a href="${url}">${url}</a></p>
        <p><b>Email:</b> <a href="mailto:${email}">${email}</a></p>
        <p><b>Score:</b> <span style="font-size:28px;font-weight:900;color:${scoreColor}">${result.total}/100 — ${result.grade}</span></p>
        <p><b>Design:</b> ${result.design}/20 &nbsp; <b>Mobile:</b> ${result.mobile}/20 &nbsp; <b>Trust:</b> ${result.trust}/20 &nbsp; <b>SEO:</b> ${result.seo}/20 &nbsp; <b>Content:</b> ${result.content}/20</p>
        <h3>Issues found:</h3><ul>${result.issues.map(i => `<li>${i}</li>`).join('')}</ul>
        <p><b>${result.summary}</b></p>
        <p style="background:#fff8f0;padding:14px;border-left:4px solid #F07A20;border-radius:4px">
          👉 Reach out to <a href="mailto:${email}">${email}</a> — their site scored ${result.total}/100.
        </p>
      </div>`
    );

    // Auto-reply to lead
    if (email) {
      sendEmail(email,
        `Your website scored ${result.total}/100 — here's what we found`,
        `<div style="font-family:sans-serif;max-width:600px">
          <h2 style="color:#F07A20">Your Website Audit Results</h2>
          ${bizName ? `<p>Hi — thanks for auditing <b>${bizName}</b>!</p>` : '<p>Thanks for running your audit!</p>'}
          <div style="text-align:center;padding:24px;background:#f9f9f9;border-radius:8px;margin:20px 0">
            <div style="font-size:60px;font-weight:900;color:${scoreColor}">${result.total}/100</div>
            <div style="font-size:18px;color:#555">${result.grade}</div>
          </div>
          <h3>What's holding your site back:</h3>
          <ul>${result.issues.map(i => `<li style="margin-bottom:6px">${i}</li>`).join('')}</ul>
          <p><b>${result.summary}</b></p>
          <div style="margin-top:24px;padding:20px;background:#fff8f0;border-radius:8px;border:1px solid #F07A20">
            <h3 style="color:#F07A20;margin-top:0">We already built your new site.</h3>
            <p>For just $99, a modern replacement is yours — no commitment, no contracts.</p>
            <div style="text-align:center;margin-top:16px">
              <a href="https://efalconry.com/#cta-sec" style="display:inline-block;background:#F07A20;color:#fff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:bold">Claim Your New Site for $99 →</a>
            </div>
          </div>
          <p style="color:#999;font-size:12px;margin-top:24px">e-Falconry · Seattle, WA · <a href="https://efalconry.com">efalconry.com</a></p>
        </div>`
      );
    }
  }

  return res.status(200).json(result);
}
