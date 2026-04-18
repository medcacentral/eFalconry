// e-Falconry Website Score Tool — thorough professional audit
// Uses Claude (complex judgment) to give specific, actionable feedback

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { url, email, bizName } = req.body || {};
  if (!url) return res.status(400).json({ error: 'URL required' });

  // ── 1. Fetch website content ─────────────────────────────
  let pageContent = null;
  let fetchFailed = false;
  let pageTitle = '';
  let metaDesc = '';
  let h1Tags = '';
  let hasViewport = false;
  let hasSSL = url.startsWith('https');
  let loadTime = null;
  let phoneNumbers = [];
  let emails = [];

  try {
    const startFetch = Date.now();
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 9000);

    const pageResp = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; eFalconryBot/1.0)' }
    });
    loadTime = Date.now() - startFetch;

    if (pageResp.ok) {
      const html = await pageResp.text();

      // Extract structural signals
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      pageTitle = titleMatch?.[1]?.trim() || '';

      const metaMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
      metaDesc = metaMatch?.[1]?.trim() || '';

      const h1Matches = html.match(/<h1[^>]*>([^<]+)<\/h1>/gi) || [];
      h1Tags = h1Matches.map(h => h.replace(/<[^>]+>/g, '').trim()).join(' | ').substring(0, 200);

      hasViewport = /<meta[^>]+name=["']viewport["']/i.test(html);

      phoneNumbers = [...new Set(html.match(/(\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/g) || [])].slice(0, 2);
      emails = [...new Set(html.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [])].filter(e => !e.includes('example') && !e.includes('sentry')).slice(0, 2);

      // Check for key elements
      const hasSchema = /application\/ld\+json/i.test(html);
      const hasGoogleAnalytics = /google-analytics|gtag|GA_TRACKING/i.test(html);
      const hasReviews = /testimonial|review|star-rating|★|⭐/i.test(html);
      const hasCTA = /call now|contact us|get a quote|book now|schedule|free estimate/i.test(html);
      const hasAddress = /\d{1,5}\s+\w+\s+(street|st|avenue|ave|road|rd|drive|dr|blvd|way)/i.test(html);
      const hasMap = /google.*map|maps\.google|openstreetmap|leaflet/i.test(html);
      const hasSocialLinks = /facebook\.com|instagram\.com|twitter\.com|linkedin\.com|yelp\.com/i.test(html);
      const hasLicense = /license|licensed|insured|certified|bonded/i.test(html);
      const hasPhotos = /<img[^>]+src/gi.test(html);
      const imgCount = (html.match(/<img[^>]+>/gi) || []).length;
      const hasAltTags = (html.match(/<img[^>]+alt=["'][^"']+["']/gi) || []).length;
      const missingAlt = imgCount - hasAltTags;
      const hasLocalKeywords = new RegExp(bizName?.split(' ')[0] || 'business', 'i').test(html);

      const stripped = html
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, 5000);

      pageContent = {
        text: stripped,
        title: pageTitle,
        metaDesc,
        h1Tags,
        hasViewport,
        hasSSL,
        hasSchema,
        hasGoogleAnalytics,
        hasReviews,
        hasCTA,
        hasAddress,
        hasMap,
        hasSocialLinks,
        hasLicense,
        hasPhotos,
        imgCount,
        missingAlt,
        hasLocalKeywords,
        phoneNumbers,
        emails,
        loadTime,
        wordCount: stripped.split(' ').length,
      };
    } else {
      fetchFailed = true;
    }
  } catch(e) {
    fetchFailed = true;
  }

  // ── 2. Build thorough audit prompt ───────────────────────
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  const prompt = fetchFailed
    ? buildUnreachablePrompt(url, bizName)
    : buildAuditPrompt(url, bizName, pageContent);

  // ── 3. Call Claude for thorough analysis ─────────────────
  let result;
  try {
    const claudeResp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1500,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await claudeResp.json();
    if (!claudeResp.ok) throw new Error(data.error?.message || 'Claude error');
    result = JSON.parse(data.content[0].text.replace(/```json|```/g, '').trim());
  } catch(e) {
    console.error('Score error:', e.message);
    return res.status(500).json({ error: 'Analysis failed: ' + e.message });
  }

  // ── 4. Send emails ────────────────────────────────────────
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
        <p><b>Design:</b> ${result.design}/20 · <b>Mobile:</b> ${result.mobile}/20 · <b>Trust:</b> ${result.trust}/20 · <b>SEO:</b> ${result.seo}/20 · <b>Content:</b> ${result.content}/20</p>
        <h3>Critical Issues:</h3><ul>${(result.criticalIssues||result.issues||[]).map(i=>`<li>${i}</li>`).join('')}</ul>
        <p><b>${result.summary}</b></p>
      </div>`
    );

    // Auto-reply to lead
    if (email) {
      sendEmail(email,
        `Your website scored ${result.total}/100 — detailed audit inside`,
        buildLeadEmail(result, bizName, url, scoreColor)
      );
    }
  }

  return res.status(200).json(result);
}

function buildAuditPrompt(url, bizName, p) {
  return `You are a professional web design and digital marketing auditor specializing in local businesses. Give a thorough, specific, and honest audit.

WEBSITE: ${url}
BUSINESS: ${bizName || 'Unknown'}

TECHNICAL DATA COLLECTED:
- Page title: "${p.title || 'MISSING'}"
- Meta description: "${p.metaDesc || 'MISSING'}"
- H1 tags found: "${p.h1Tags || 'NONE FOUND'}"
- Has mobile viewport tag: ${p.hasViewport ? 'YES' : 'NO — CRITICAL'}
- SSL (HTTPS): ${p.hasSSL ? 'YES' : 'NO — CRITICAL SECURITY ISSUE'}
- Server load time: ${p.loadTime ? p.loadTime + 'ms' : 'unknown'}
- Structured data (Schema.org): ${p.hasSchema ? 'YES' : 'NO'}
- Google Analytics: ${p.hasGoogleAnalytics ? 'YES' : 'NO'}
- Reviews/testimonials visible: ${p.hasReviews ? 'YES' : 'NO'}
- Clear call-to-action: ${p.hasCTA ? 'YES' : 'NO'}
- Address on page: ${p.hasAddress ? 'YES' : 'NO'}
- Google Maps embed: ${p.hasMap ? 'YES' : 'NO'}
- Social media links: ${p.hasSocialLinks ? 'YES' : 'NO'}
- License/insurance mentioned: ${p.hasLicense ? 'YES' : 'NO'}
- Images found: ${p.imgCount} (${p.missingAlt} missing alt text)
- Phone numbers found: ${p.phoneNumbers?.join(', ') || 'NONE'}
- Email found: ${p.emails?.join(', ') || 'NONE'}
- Word count: ~${p.wordCount} words
- Business name in content: ${p.hasLocalKeywords ? 'YES' : 'NO'}

PAGE CONTENT (first 4000 chars):
${p.text?.substring(0, 4000)}

SCORING CRITERIA (0-20 each, be honest and realistic):
- design (0-20): Visual quality, modernity, layout hierarchy, color consistency, typography, white space usage, image quality. Most local sites score 4-12.
- mobile (0-20): Responsive design evidence, viewport meta, touch-friendly buttons, readable text without zooming, mobile navigation. No viewport = max 5.
- trust (0-20): Reviews/testimonials, license/insurance info, years in business, team photos, guarantees, BBB/certifications, address visibility, SSL. 
- seo (0-20): Title tag quality, meta description, H1 usage, local keywords, schema markup, Google Analytics, image alt tags, URL structure.
- content (0-20): Clarity of services offered, compelling copy, calls-to-action, contact info completeness, about page, FAQ, unique value proposition.

Return ONLY valid JSON:
{
  "total": <sum of all 5 — must equal sum exactly>,
  "design": <0-20>,
  "mobile": <0-20>,
  "trust": <0-20>,
  "seo": <0-20>,
  "content": <0-20>,
  "grade": "<Poor|Needs Work|Average|Good|Excellent>",
  "summary": "<One sentence identifying the single most damaging problem for their business>",
  "criticalIssues": [
    "<Specific critical issue with exact detail — e.g. 'No mobile viewport tag: site appears broken on 60%+ of phones'>",
    "<Second critical issue with specific detail>",
    "<Third critical issue>",
    "<Fourth critical issue>"
  ],
  "quickWins": [
    "<Easy fix that would immediately improve their score — be specific>",
    "<Second quick win>",
    "<Third quick win>"
  ],
  "designFeedback": "<2 sentences on specific design problems observed>",
  "mobileFeedback": "<2 sentences on mobile issues>",
  "trustFeedback": "<2 sentences on what trust signals are missing>",
  "seoFeedback": "<2 sentences on specific SEO gaps — mention their actual title tag if it's weak>",
  "contentFeedback": "<2 sentences on content quality and what's missing>",
  "competitorGap": "<One sentence on how a well-optimized competitor site would outperform this one>",
  "estimatedCustomersLost": "<Estimate how many potential customers per month are likely bouncing from this site — be specific and realistic>"
}`;
}

function buildUnreachablePrompt(url, bizName) {
  return `A website audit was requested for ${url} (business: ${bizName || 'unknown'}) but the page failed to load.

Provide an honest audit based on the inability to load — this is itself a critical failure.

Return ONLY valid JSON:
{
  "total": 8,
  "design": 0,
  "mobile": 0,
  "trust": 2,
  "seo": 3,
  "content": 3,
  "grade": "Poor",
  "summary": "The website is completely unreachable — every potential customer who tries to visit gets an error page.",
  "criticalIssues": [
    "Website is offline or inaccessible — visitors cannot reach the business at all",
    "Google cannot crawl the site — all search rankings are lost while the site is down",
    "Every ad, business card, or referral linking to this URL is sending customers to an error page",
    "No trust signals, contact info, or services can be found by potential customers"
  ],
  "quickWins": [
    "Fix hosting/DNS immediately — every hour offline is lost revenue",
    "Set up uptime monitoring so you're notified within minutes if the site goes down",
    "Consider a new professional website that won't have these reliability issues"
  ],
  "designFeedback": "Cannot assess — site is inaccessible.",
  "mobileFeedback": "Cannot assess — site is inaccessible.",
  "trustFeedback": "No trust signals are visible to potential customers because the site cannot be reached.",
  "seoFeedback": "Search engines cannot index an offline site. Any existing rankings will drop rapidly.",
  "contentFeedback": "No content is accessible to visitors or search engines.",
  "competitorGap": "Any competitor with a working website is capturing every customer you're losing.",
  "estimatedCustomersLost": "If you receive even 5 visitors per day, an unreachable site loses approximately 150+ potential customers per month."
}`;
}

function buildLeadEmail(result, bizName, url, scoreColor) {
  const sections = [
    result.designFeedback ? `<li><b>Design (${result.design}/20):</b> ${result.designFeedback}</li>` : '',
    result.mobileFeedback ? `<li><b>Mobile (${result.mobile}/20):</b> ${result.mobileFeedback}</li>` : '',
    result.trustFeedback ? `<li><b>Trust (${result.trust}/20):</b> ${result.trustFeedback}</li>` : '',
    result.seoFeedback ? `<li><b>SEO (${result.seo}/20):</b> ${result.seoFeedback}</li>` : '',
    result.contentFeedback ? `<li><b>Content (${result.content}/20):</b> ${result.contentFeedback}</li>` : '',
  ].filter(Boolean).join('');

  const quickWins = (result.quickWins || []).map(w => `<li>${w}</li>`).join('');

  return `<div style="font-family:sans-serif;max-width:620px;margin:0 auto">
    <h2 style="color:#F07A20">Your Website Audit: ${bizName || url}</h2>
    <p>Here's the full breakdown of what we found:</p>

    <div style="text-align:center;padding:24px;background:#f9f9f9;border-radius:12px;margin:20px 0">
      <div style="font-size:64px;font-weight:900;color:${scoreColor};line-height:1">${result.total}/100</div>
      <div style="font-size:18px;font-weight:bold;color:#555;margin-top:4px">${result.grade}</div>
    </div>

    <p style="font-size:16px;line-height:1.7;margin-bottom:20px"><b>Bottom line:</b> ${result.summary}</p>

    ${result.estimatedCustomersLost ? `<p style="background:#fff3cd;border-left:4px solid #F07A20;padding:12px 16px;border-radius:4px;font-size:14px"><b>Estimated impact:</b> ${result.estimatedCustomersLost}</p>` : ''}

    <h3>Detailed Category Breakdown</h3>
    <ul style="line-height:2.2">${sections}</ul>

    <h3>Critical Issues Found</h3>
    <ul>${(result.criticalIssues||result.issues||[]).map(i=>`<li style="margin-bottom:6px">${i}</li>`).join('')}</ul>

    ${quickWins ? `<h3>Quick Wins (Easy Fixes)</h3><ul>${quickWins}</ul>` : ''}

    ${result.competitorGap ? `<p style="color:#666;font-size:14px;font-style:italic">${result.competitorGap}</p>` : ''}

    <div style="margin-top:28px;padding:20px;background:#fff8f0;border-radius:10px;border:1px solid #F07A20">
      <h3 style="color:#F07A20;margin-top:0">We already built your replacement.</h3>
      <p>A fully modernized website for ${bizName || 'your business'} is ready — fixing every issue above. For $99 one-time, it's yours.</p>
      <div style="text-align:center;margin-top:14px">
        <a href="https://efalconry.com/#cta-sec" style="display:inline-block;background:#F07A20;color:#fff;padding:13px 30px;border-radius:8px;text-decoration:none;font-weight:bold">Claim Your New Site for $99 →</a>
      </div>
    </div>
    <p style="color:#999;font-size:12px;margin-top:24px">e-Falconry · Seattle, WA · <a href="https://efalconry.com">efalconry.com</a></p>
  </div>`;
}
