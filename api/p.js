// e-Falconry Preview Page — AI-powered, industry-specific designs
// Each industry gets its own visual identity, color system, and hero copy

// ── INDUSTRY DESIGN SYSTEMS ────────────────────────────────
const DESIGNS = {
  plumber: {
    primary:    '#0A1628',
    secondary:  '#0F2040',
    accent:     '#E53E3E',
    accentAlt:  '#FC8181',
    text:       '#F7FAFC',
    textSub:    '#CBD5E0',
    textMuted:  '#718096',
    border:     'rgba(229,62,62,0.2)',
    borderBright:'rgba(229,62,62,0.5)',
    pill:       'rgba(229,62,62,0.12)',
    cardBg:     'rgba(255,255,255,0.04)',
    gradHero:   'linear-gradient(160deg, #0A1628 0%, #0F2040 50%, #0A1628 100%)',
    gradAccent: 'linear-gradient(90deg, #E53E3E, #FC8181)',
    emoji:      '🔧',
    heroPattern: `<svg style="position:absolute;inset:0;width:100%;height:100%;opacity:.04" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 50 Q25 20 50 50 Q75 80 100 50" stroke="#E53E3E" stroke-width="0.5" fill="none"/><path d="M0 30 Q25 0 50 30 Q75 60 100 30" stroke="#E53E3E" stroke-width="0.3" fill="none"/><path d="M0 70 Q25 40 50 70 Q75 100 100 70" stroke="#E53E3E" stroke-width="0.3" fill="none"/></svg>`,
    headlines: [
      ['Fast Response.', 'Zero Excuses.'],
      ['We Fix It Right.', 'The First Time.'],
      ['24/7 Emergency', 'Plumbing Service.'],
    ],
    taglines: [
      'Licensed, insured, and at your door faster than anyone else in [city].',
      'When your pipes fail, we show up. No voicemail. No waiting.',
      'Trusted by [reviews]+ homeowners across [city] for over [years] years.',
    ],
  },
  hvac: {
    primary:    '#0D1B2A',
    secondary:  '#1B2D3E',
    accent:     '#3B82F6',
    accentAlt:  '#60A5FA',
    text:       '#F0F9FF',
    textSub:    '#BAE6FD',
    textMuted:  '#7DD3FC',
    border:     'rgba(59,130,246,0.2)',
    borderBright:'rgba(59,130,246,0.5)',
    pill:       'rgba(59,130,246,0.12)',
    cardBg:     'rgba(255,255,255,0.04)',
    gradHero:   'linear-gradient(160deg, #0D1B2A 0%, #1B2D3E 50%, #0D1B2A 100%)',
    gradAccent: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
    emoji:      '❄️',
    heroPattern: `<svg style="position:absolute;inset:0;width:100%;height:100%;opacity:.03" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" stroke="#3B82F6" stroke-width="0.5" fill="none"/><circle cx="100" cy="100" r="60" stroke="#3B82F6" stroke-width="0.3" fill="none"/><circle cx="100" cy="100" r="40" stroke="#3B82F6" stroke-width="0.3" fill="none"/></svg>`,
    headlines: [
      ['Perfect Comfort,', 'Every Season.'],
      ['Stay Cool.', 'Stay Warm.'],
      ['Your Climate,', 'Under Control.'],
    ],
    taglines: [
      'Expert HVAC service for homes and businesses across [city]. Same-day appointments available.',
      'From installation to emergency repair — we keep [city] comfortable year-round.',
      'Trusted by [reviews]+ families in [city]. Rated [rating] stars on Google.',
    ],
  },
  electrician: {
    primary:    '#0D0D1A',
    secondary:  '#1A1A2E',
    accent:     '#F59E0B',
    accentAlt:  '#FCD34D',
    text:       '#FFFBEB',
    textSub:    '#FDE68A',
    textMuted:  '#D97706',
    border:     'rgba(245,158,11,0.2)',
    borderBright:'rgba(245,158,11,0.5)',
    pill:       'rgba(245,158,11,0.1)',
    cardBg:     'rgba(255,255,255,0.03)',
    gradHero:   'linear-gradient(160deg, #0D0D1A 0%, #1A1A2E 60%, #0D0D1A 100%)',
    gradAccent: 'linear-gradient(90deg, #F59E0B, #FCD34D)',
    emoji:      '⚡',
    heroPattern: `<svg style="position:absolute;inset:0;width:100%;height:100%;opacity:.05" viewBox="0 0 100 100"><path d="M50 5 L30 55 L45 55 L25 95 L70 40 L55 40 Z" stroke="#F59E0B" stroke-width="0.5" fill="rgba(245,158,11,0.05)"/></svg>`,
    headlines: [
      ['Power Solutions', 'Done Right.'],
      ['Safe. Reliable.', 'Licensed.'],
      ['Your Electrical', 'Experts.'],
    ],
    taglines: [
      'Licensed electricians serving [city] with safety-first workmanship on every job.',
      'From panel upgrades to EV chargers — we handle it all, on time and on budget.',
      '[reviews]+ happy customers in [city]. Free estimates, same-day service.',
    ],
  },
  roofing: {
    primary:    '#1A0A00',
    secondary:  '#2D1500',
    accent:     '#DC6803',
    accentAlt:  '#F97316',
    text:       '#FFF7ED',
    textSub:    '#FED7AA',
    textMuted:  '#FB923C',
    border:     'rgba(220,104,3,0.2)',
    borderBright:'rgba(220,104,3,0.5)',
    pill:       'rgba(220,104,3,0.1)',
    cardBg:     'rgba(255,255,255,0.03)',
    gradHero:   'linear-gradient(160deg, #1A0A00 0%, #2D1500 50%, #1A0A00 100%)',
    gradAccent: 'linear-gradient(90deg, #DC6803, #F97316)',
    emoji:      '🏠',
    heroPattern: `<svg style="position:absolute;inset:0;width:100%;height:100%;opacity:.04" viewBox="0 0 200 100"><path d="M0 80 L100 10 L200 80" stroke="#DC6803" stroke-width="0.5" fill="none"/><path d="M20 80 L100 25 L180 80" stroke="#DC6803" stroke-width="0.3" fill="none"/></svg>`,
    headlines: [
      ['Protect What', 'Matters Most.'],
      ['Roofing Done Right,', 'Rain or Shine.'],
      ['Your Roof.', 'Our Guarantee.'],
    ],
    taglines: [
      'Expert roofing installation, repair, and replacement across [city]. Licensed, insured, guaranteed.',
      'From storm damage to full replacement — [city]\'s trusted roofing contractor since day one.',
      'Protecting [reviews]+ homes in [city]. Free inspection, no-pressure estimates.',
    ],
  },
  landscaping: {
    primary:    '#052E16',
    secondary:  '#065F46',
    accent:     '#10B981',
    accentAlt:  '#34D399',
    text:       '#ECFDF5',
    textSub:    '#A7F3D0',
    textMuted:  '#6EE7B7',
    border:     'rgba(16,185,129,0.2)',
    borderBright:'rgba(16,185,129,0.5)',
    pill:       'rgba(16,185,129,0.1)',
    cardBg:     'rgba(255,255,255,0.04)',
    gradHero:   'linear-gradient(160deg, #052E16 0%, #065F46 50%, #052E16 100%)',
    gradAccent: 'linear-gradient(90deg, #10B981, #34D399)',
    emoji:      '🌿',
    heroPattern: `<svg style="position:absolute;inset:0;width:100%;height:100%;opacity:.06" viewBox="0 0 200 200"><path d="M0 150 Q50 100 100 150 Q150 200 200 150" stroke="#10B981" stroke-width="0.5" fill="none"/><path d="M0 120 Q50 70 100 120 Q150 170 200 120" stroke="#10B981" stroke-width="0.3" fill="none"/></svg>`,
    headlines: [
      ['Your Dream Yard,', 'Brought to Life.'],
      ['Beautiful Spaces.', 'Expert Care.'],
      ['Lawns That', 'Turn Heads.'],
    ],
    taglines: [
      'Professional landscaping and lawn care for [city] homes and businesses. Free estimates.',
      'From design to maintenance — we create outdoor spaces you\'ll love coming home to.',
      '[reviews]+ satisfied clients in [city]. Reliable, affordable, and detail-obsessed.',
    ],
  },
  contractor: {
    primary:    '#111827',
    secondary:  '#1F2937',
    accent:     '#8B5CF6',
    accentAlt:  '#A78BFA',
    text:       '#F9FAFB',
    textSub:    '#E5E7EB',
    textMuted:  '#9CA3AF',
    border:     'rgba(139,92,246,0.2)',
    borderBright:'rgba(139,92,246,0.5)',
    pill:       'rgba(139,92,246,0.1)',
    cardBg:     'rgba(255,255,255,0.04)',
    gradHero:   'linear-gradient(160deg, #111827 0%, #1F2937 50%, #111827 100%)',
    gradAccent: 'linear-gradient(90deg, #8B5CF6, #A78BFA)',
    emoji:      '🏗️',
    heroPattern: `<svg style="position:absolute;inset:0;width:100%;height:100%;opacity:.04" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" stroke="#8B5CF6" stroke-width="0.3" fill="none"/><rect x="25" y="25" width="50" height="50" stroke="#8B5CF6" stroke-width="0.2" fill="none"/></svg>`,
    headlines: [
      ['Built to Last.', 'Built for You.'],
      ['Quality Work.', 'On Time. On Budget.'],
      ['Your Vision,', 'Our Craftsmanship.'],
    ],
    taglines: [
      'General contractor serving [city] with quality remodeling, renovation, and construction.',
      'From kitchens to room additions — we build what you imagine, on time and on budget.',
      'Trusted by [reviews]+ homeowners in [city]. Licensed, bonded, and fully insured.',
    ],
  },
};

const DEFAULT_DESIGN = DESIGNS.contractor;

const SERVICES = {
  plumber:     ['Drain Cleaning','Emergency Repairs','Pipe Installation','Water Heater Service','Leak Detection','Sewer Line Repair'],
  hvac:        ['AC Installation','Heating & Furnace','Emergency Service','Duct Cleaning','System Maintenance','Thermostat Upgrade'],
  electrician: ['Panel Upgrades','Wiring & Rewiring','EV Charger Install','Lighting Design','Emergency Electrical','Code Compliance'],
  roofing:     ['Roof Replacement','Storm Damage Repair','Gutter Installation','Roof Inspection','Emergency Tarping','Skylight Install'],
  landscaping: ['Lawn Care & Mowing','Landscape Design','Irrigation Systems','Tree Services','Hardscape & Patios','Seasonal Cleanup'],
  contractor:  ['Kitchen Remodeling','Bathroom Renovation','Room Additions','Deck & Patio','Basement Finishing','Whole-Home Remodel'],
};

function getDesign(category) {
  const c = (category || '').toLowerCase();
  if (c.includes('plumb')) return DESIGNS.plumber;
  if (c.includes('hvac') || c.includes('heat') || c.includes('air') || c.includes('cool')) return DESIGNS.hvac;
  if (c.includes('electr')) return DESIGNS.electrician;
  if (c.includes('roof')) return DESIGNS.roofing;
  if (c.includes('landscap') || c.includes('lawn')) return DESIGNS.landscaping;
  return DESIGNS.contractor;
}

function getServices(category) {
  const c = (category || '').toLowerCase();
  if (c.includes('plumb')) return SERVICES.plumber;
  if (c.includes('hvac') || c.includes('heat') || c.includes('air')) return SERVICES.hvac;
  if (c.includes('electr')) return SERVICES.electrician;
  if (c.includes('roof')) return SERVICES.roofing;
  if (c.includes('landscap') || c.includes('lawn')) return SERVICES.landscaping;
  return SERVICES.contractor;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fillTemplate(str, biz, cityShort) {
  return str
    .replace('[city]', cityShort)
    .replace('[reviews]', biz.reviews || '100')
    .replace('[rating]', biz.rating || '4.9')
    .replace('[years]', '10');
}

export default async function handler(req, res) {
  const { v, d } = req.query;
  const raw = v || d;

  if (!raw) return res.status(400).send(errorPage('No preview data provided.'));

  let biz;
  try {
    biz = JSON.parse(Buffer.from(decodeURIComponent(raw), 'base64').toString('utf-8'));
  } catch(e) {
    return res.status(400).send(errorPage('Invalid preview link.'));
  }

  if (!biz.name) return res.status(400).send(errorPage('Missing business data.'));

  const D = getDesign(biz.category);
  const services = getServices(biz.category);
  const cityShort = (biz.city || '').replace(/, [A-Z]{2}$/, '');
  const rating = biz.rating ? parseFloat(biz.rating).toFixed(1) : null;
  const reviews = biz.reviews ? parseInt(biz.reviews) : null;
  const stars = rating ? Math.round(parseFloat(rating)) : 5;
  const claimUrl = `https://efalconry.com/?claim=${encodeURIComponent(biz.name)}&source=preview`;

  // Generate AI hero copy if Gemini key available
  let aiH1 = h1, aiH2 = h2, aiTagline = tagline;
  const geminiKey = process.env.GEMINI_API_KEY;
  if (geminiKey && biz.name && cityShort) {
    try {
      const prompt = `Write punchy hero copy for a ${biz.category || 'local business'} called "${biz.name}" in ${cityShort}.
${rating ? `They have a ${rating} star Google rating` : ''} ${reviews ? `with ${reviews} reviews.` : '.'}

Return ONLY a JSON object (no markdown):
{
  "h1": "3-4 word powerful headline line 1",
  "h2": "3-5 word headline line 2 (the wow part)",
  "tagline": "One punchy sentence about why they're the best choice in ${cityShort}. Max 15 words. Specific to their rating/reviews if available."
}`;

      const gemResp = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: { maxOutputTokens: 150, temperature: 0.9 }
          })
        }
      );
      const gemData = await gemResp.json();
      const raw = gemData.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
      const parsed = JSON.parse(raw.replace(/```json|```/g, '').trim());
      if (parsed.h1) aiH1 = parsed.h1;
      if (parsed.h2) aiH2 = parsed.h2;
      if (parsed.tagline) aiTagline = parsed.tagline;
    } catch(e) {
      // Fall back to template copy — no problem
    }
  }

  // Use AI copy if generated
  const [fh1, fh2, fTagline] = [aiH1, aiH2, aiTagline];

  // Pick headline and tagline
  const [h1, h2] = pickRandom(D.headlines);
  const tagline = fillTemplate(pickRandom(D.taglines), biz, cityShort);

  // Years in business (fake but plausible based on review count)
  const yearsInBiz = reviews ? Math.min(Math.max(Math.floor(reviews / 15), 3), 30) : 10;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${biz.name} — ${cityShort}</title>
<meta name="robots" content="noindex">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<script src="https://js.stripe.com/v3/"></script>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
:root{
  --bg:${D.primary};--bg2:${D.secondary};--acc:${D.accent};--acc2:${D.accentAlt};
  --text:${D.text};--t2:${D.textSub};--t3:${D.textMuted};
  --bdr:${D.border};--bdr2:${D.borderBright};
  --pill:${D.pill};--card:${D.cardBg};
  --grad:${D.gradHero};--gradacc:${D.gradAccent};
}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--text);font-family:'DM Sans',sans-serif;min-height:100vh;cursor:default;}

/* ── CLAIM BANNER ── */
.banner{position:sticky;top:0;z-index:999;background:var(--gradacc);padding:13px 5%;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;box-shadow:0 4px 24px rgba(0,0,0,.4);}
.banner-text{font-family:'Syne',sans-serif;font-size:13px;font-weight:700;color:#fff;line-height:1.45;}
.banner-text em{font-style:normal;opacity:.85;font-weight:400;}
.banner-btn{background:#fff;color:var(--acc);font-family:'Syne',sans-serif;font-weight:800;font-size:13px;padding:10px 22px;border-radius:8px;white-space:nowrap;border:none;cursor:pointer;transition:all .15s;}
.banner-btn:hover{transform:scale(1.03);box-shadow:0 4px 16px rgba(0,0,0,.2);}

/* ── NAV ── */
nav{background:rgba(0,0,0,.4);backdrop-filter:blur(20px);border-bottom:1px solid var(--bdr);padding:0 5%;height:68px;display:flex;align-items:center;justify-content:space-between;gap:16px;}
.nav-brand{font-family:'Bebas Neue',cursive;font-size:22px;letter-spacing:.08em;color:var(--text);}
.nav-phone{font-family:'Syne',sans-serif;font-size:13px;font-weight:700;color:var(--acc);}
.nav-cta{background:var(--gradacc);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:12px;padding:9px 20px;border-radius:8px;white-space:nowrap;border:none;cursor:pointer;}

/* ── HERO ── */
.hero{position:relative;min-height:88vh;display:flex;align-items:center;overflow:hidden;background:var(--grad);}
.hero-bg{position:absolute;inset:0;overflow:hidden;}
.hero-noise{position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");opacity:.4;}
.hero-glow{position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,${D.accent}22 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none;}
.hero-glow2{position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,${D.accent}11 0%,transparent 70%);bottom:-100px;left:-50px;pointer-events:none;}
.hero-inner{position:relative;z-index:2;padding:80px 5%;max-width:1000px;width:100%;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;background:var(--pill);border:1px solid var(--bdr2);border-radius:99px;padding:7px 18px;font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:.12em;color:var(--acc2);text-transform:uppercase;margin-bottom:28px;}
.hero-eyebrow::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--acc);box-shadow:0 0 8px var(--acc);flex-shrink:0;}
.hero h1{font-family:'Bebas Neue',cursive;font-size:clamp(64px,12vw,110px);line-height:.9;margin-bottom:24px;letter-spacing:.01em;}
.hero h1 .l1{display:block;color:var(--text);}
.hero h1 .l2{display:block;background:var(--gradacc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-sub{font-size:18px;color:var(--t2);line-height:1.75;max-width:560px;margin-bottom:40px;font-weight:300;}
.hero-btns{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:56px;}
.btn-hero{background:var(--gradacc);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:15px;padding:16px 36px;border-radius:12px;border:none;cursor:pointer;box-shadow:0 8px 32px rgba(0,0,0,.3);transition:all .2s;}
.btn-hero:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(0,0,0,.4);}
.btn-ghost{background:transparent;color:var(--t2);font-family:'Syne',sans-serif;font-weight:700;font-size:15px;padding:16px 36px;border-radius:12px;border:1px solid var(--bdr);cursor:pointer;transition:all .2s;}
.btn-ghost:hover{border-color:var(--bdr2);color:var(--text);}

/* ── HERO STATS ── */
.hero-stats{display:flex;gap:0;border:1px solid var(--bdr);border-radius:16px;overflow:hidden;background:var(--card);backdrop-filter:blur(12px);width:fit-content;}
.hs{padding:20px 32px;text-align:center;border-right:1px solid var(--bdr);}
.hs:last-child{border-right:none;}
.hs-num{font-family:'Bebas Neue',cursive;font-size:38px;line-height:1;background:var(--gradacc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hs-label{font-family:'Syne',sans-serif;font-size:10px;font-weight:700;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-top:3px;}

/* ── TRUST STRIP ── */
.trust{border-top:1px solid var(--bdr);border-bottom:1px solid var(--bdr);padding:18px 5%;display:flex;gap:10px;flex-wrap:wrap;background:rgba(0,0,0,.2);}
.tb{background:var(--pill);border:1px solid var(--bdr);border-radius:8px;padding:9px 16px;font-family:'Syne',sans-serif;font-size:11px;font-weight:700;color:var(--t2);white-space:nowrap;}
.tb b{color:var(--acc2);}

/* ── SERVICES ── */
.services{padding:88px 5%;max-width:1100px;margin:0 auto;}
.section-eye{font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:.16em;color:var(--acc);text-transform:uppercase;margin-bottom:10px;display:flex;align-items:center;gap:8px;}
.section-eye::before{content:'';width:24px;height:2px;background:var(--gradacc);border-radius:2px;}
.section-h2{font-family:'Bebas Neue',cursive;font-size:clamp(40px,7vw,62px);line-height:.95;margin-bottom:16px;}
.section-sub{font-size:16px;color:var(--t2);max-width:520px;line-height:1.7;margin-bottom:48px;font-weight:300;}
.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.svc{background:var(--bg2);border:1px solid var(--bdr);border-radius:16px;padding:28px 24px;position:relative;overflow:hidden;transition:all .2s;}
.svc::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--gradacc);border-radius:2px 0 0 2px;}
.svc:hover{border-color:var(--bdr2);transform:translateY(-3px);}
.svc-icon{font-size:24px;margin-bottom:12px;display:block;}
.svc h3{font-family:'Syne',sans-serif;font-size:14px;font-weight:700;color:var(--text);margin-bottom:6px;}
.svc p{font-size:13px;color:var(--t3);line-height:1.6;}
.svc-cta{font-family:'Syne',sans-serif;font-size:11px;font-weight:700;color:var(--acc);margin-top:12px;display:inline-block;}

/* ── SOCIAL PROOF ── */
.proof{background:var(--bg2);border-top:1px solid var(--bdr);border-bottom:1px solid var(--bdr);padding:80px 5%;}
.proof-inner{max-width:1100px;margin:0 auto;}
.proof-hero{display:flex;align-items:center;gap:32px;margin-bottom:48px;flex-wrap:wrap;}
.proof-score{text-align:center;}
.proof-big{font-family:'Bebas Neue',cursive;font-size:96px;line-height:.85;background:var(--gradacc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.proof-stars{font-size:28px;color:#FBBF24;letter-spacing:3px;display:block;margin:6px 0;}
.proof-count{font-size:13px;color:var(--t3);}
.proof-divider{width:1px;height:80px;background:var(--bdr);}
.proof-statement{font-family:'Bebas Neue',cursive;font-size:clamp(28px,4vw,42px);line-height:1.1;color:var(--text);}
.proof-statement span{color:var(--acc);}
.reviews-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;}
.rv{background:var(--bg);border:1px solid var(--bdr);border-radius:16px;padding:24px;position:relative;}
.rv::after{content:'"';position:absolute;top:12px;right:20px;font-size:60px;color:var(--bdr2);font-family:Georgia,serif;line-height:1;}
.rv-stars{color:#FBBF24;font-size:13px;letter-spacing:1px;margin-bottom:10px;}
.rv-text{font-size:14px;color:var(--t2);line-height:1.7;font-style:italic;margin-bottom:14px;}
.rv-name{font-family:'Syne',sans-serif;font-size:11px;font-weight:700;color:var(--t3);}

/* ── CTA ── */
.cta{padding:100px 5%;text-align:center;position:relative;overflow:hidden;}
.cta-glow{position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,${D.accent}18 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;}
.cta-inner{position:relative;z-index:2;max-width:700px;margin:0 auto;}
.cta h2{font-family:'Bebas Neue',cursive;font-size:clamp(48px,9vw,80px);line-height:.95;margin-bottom:20px;}
.cta p{font-size:17px;color:var(--t2);line-height:1.75;margin-bottom:36px;font-weight:300;}
.cta-phone{font-family:'Bebas Neue',cursive;font-size:48px;background:var(--gradacc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;display:block;margin:12px 0 28px;}

/* ── MERCH ── */
.merch{padding:72px 5%;max-width:1100px;margin:0 auto;}
.merch-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:36px;}
.mc{background:var(--bg2);border:1px solid var(--bdr);border-radius:16px;overflow:hidden;transition:transform .2s;}
.mc:hover{transform:translateY(-4px);}
.mc-img{height:180px;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.3);position:relative;}
.mc-img svg{filter:drop-shadow(0 4px 12px rgba(0,0,0,.4));}
.mc-body{padding:18px 20px;}
.mc-name{font-family:'Syne',sans-serif;font-size:14px;font-weight:700;margin-bottom:4px;}
.mc-desc{font-size:12px;color:var(--t3);margin-bottom:10px;}
.mc-price{font-family:'Bebas Neue',cursive;font-size:26px;color:var(--acc);}

/* ── FOOTER ── */
footer{background:rgba(0,0,0,.5);border-top:1px solid var(--bdr);padding:36px 5%;text-align:center;}
.footer-brand{font-family:'Bebas Neue',cursive;font-size:24px;margin-bottom:6px;}
footer p{font-size:12px;color:var(--t3);margin-bottom:10px;}
.preview-badge{display:inline-flex;align-items:center;gap:6px;background:var(--pill);border:1px solid var(--bdr2);border-radius:8px;padding:8px 16px;font-family:'Syne',sans-serif;font-size:11px;color:var(--acc);font-weight:700;}

/* ── PAYMENT MODAL ── */
.modal-ov{position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:2000;display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;pointer-events:none;transition:opacity .22s;}
.modal-ov.open{opacity:1;pointer-events:all;}
.modal{background:${D.secondary};border:1px solid var(--bdr2);border-radius:22px;width:100%;max-width:460px;padding:36px;position:relative;box-shadow:0 24px 64px rgba(0,0,0,.6);}
.modal-close{position:absolute;top:16px;right:18px;background:none;border:none;color:var(--t3);font-size:22px;cursor:pointer;}
.price-hero{font-family:'Bebas Neue',cursive;font-size:64px;background:var(--gradacc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;}
.price-note{font-size:12px;color:var(--t3);margin-bottom:20px;}
.modal h3{font-family:'Syne',sans-serif;font-size:22px;font-weight:800;color:var(--text);margin-bottom:4px;}
.modal-sub{font-size:14px;color:var(--t2);margin-bottom:26px;}
.field label{display:block;font-family:'Syne',sans-serif;font-size:11px;font-weight:700;color:var(--t3);letter-spacing:.08em;margin-bottom:6px;}
.field input{width:100%;background:rgba(0,0,0,.3);border:1px solid var(--bdr);border-radius:10px;padding:12px 14px;color:var(--text);font-size:14px;font-family:'DM Sans',sans-serif;outline:none;margin-bottom:14px;}
.field input:focus{border-color:var(--bdr2);}
#card-el{background:rgba(0,0,0,.3);border:1px solid var(--bdr);border-radius:10px;padding:13px 14px;margin-bottom:14px;}
.pay-tabs{display:flex;gap:8px;margin-bottom:20px;}
.ptab{flex:1;padding:9px;border-radius:8px;border:1px solid var(--bdr);background:rgba(0,0,0,.2);color:var(--t3);font-family:'Syne',sans-serif;font-size:11px;font-weight:700;cursor:pointer;text-align:center;transition:all .15s;}
.ptab.on{border-color:var(--bdr2);color:var(--acc);background:var(--pill);}
.ppanel{display:none;}.ppanel.on{display:block;}
.pay-btn{width:100%;padding:15px;border-radius:12px;border:none;cursor:pointer;font-family:'Syne',sans-serif;font-weight:800;font-size:15px;margin-top:6px;transition:transform .15s;background:var(--gradacc);color:#fff;}
.pay-btn:hover{transform:scale(1.01);}
.pay-btn.pp{background:#FFC439;color:#003087;}
#pay-err{color:#FC8181;font-size:13px;margin-top:8px;display:none;}
#pay-ok{display:none;text-align:center;padding:16px 0;}
#pay-ok h3{color:#4ADE80;font-size:26px;margin-bottom:8px;}
#pp-container{margin-top:6px;}

/* ── RESPONSIVE ── */
@media(max-width:768px){
  .svc-grid{grid-template-columns:1fr 1fr;}
  .reviews-grid{grid-template-columns:1fr;}
  .hero-stats{flex-wrap:wrap;}
  .hs{flex:1;min-width:80px;border-right:1px solid var(--bdr);}
  .merch-grid{grid-template-columns:1fr 1fr;}
}
@media(max-width:540px){
  .svc-grid{grid-template-columns:1fr;}
  .merch-grid{grid-template-columns:1fr;}
  .banner{flex-direction:column;text-align:center;}
  .hero h1{font-size:clamp(52px,14vw,80px);}
  .btns{flex-direction:column;}
  .btn-hero,.btn-ghost{width:100%;text-align:center;}
  .proof-divider{display:none;}
  .hero-stats .hs{border-right:none;border-bottom:1px solid var(--bdr);}
  .hero-stats{flex-direction:column;width:auto;}
}
</style>
</head>
<body>

<!-- Claim Banner -->
<div class="banner">
  <div class="banner-text">
    This website was built for <strong>${biz.name}</strong><br>
    <em>Preview — claim it for $99 and it's live in 48 hours.</em>
  </div>
  <button class="banner-btn" onclick="openModal()">Claim This Site — $99 →</button>
</div>

<!-- Nav -->
<nav>
  <div class="nav-brand">${biz.name}</div>
  ${biz.phone ? `<a href="tel:${biz.phone}" class="nav-phone">${biz.phone}</a>` : ''}
  <button class="nav-cta" onclick="openModal()">Free Quote</button>
</nav>

<!-- Hero -->
<section class="hero">
  <div class="hero-bg">
    ${D.heroPattern}
    <div class="hero-noise"></div>
    <div class="hero-glow"></div>
    <div class="hero-glow2"></div>
  </div>
  <div class="hero-inner">
    <div class="hero-eyebrow">Available 24/7 · ${cityShort} · Licensed & Insured</div>
    <h1>
      <span class="l1">${fh1}</span>
      <span class="l2">${fh2}</span>
    </h1>
    <p class="hero-sub">${fTagline}</p>
    <div class="hero-btns btns">
      ${biz.phone ? `<button class="btn-hero" onclick="window.location.href='tel:${biz.phone}'">Call Now: ${biz.phone}</button>` : `<button class="btn-hero" onclick="openModal()">Get a Free Quote</button>`}
      <button class="btn-ghost" onclick="document.getElementById('services').scrollIntoView({behavior:'smooth'})">See Our Work ↓</button>
    </div>
    <div class="hero-stats">
      ${rating ? `<div class="hs"><div class="hs-num">${rating}★</div><div class="hs-label">Google Rating</div></div>` : ''}
      ${reviews ? `<div class="hs"><div class="hs-num">${reviews}+</div><div class="hs-label">Happy Clients</div></div>` : ''}
      <div class="hs"><div class="hs-num">${yearsInBiz}+</div><div class="hs-label">Years Serving ${cityShort}</div></div>
      <div class="hs"><div class="hs-num">24/7</div><div class="hs-label">Emergency Service</div></div>
    </div>
  </div>
</section>

<!-- Trust Strip -->
<div class="trust">
  <div class="tb"><b>Licensed</b> & Insured</div>
  <div class="tb"><b>Free</b> Estimates</div>
  <div class="tb"><b>Same-Day</b> Service Available</div>
  ${rating ? `<div class="tb"><b>${rating} ★</b> on Google</div>` : ''}
  <div class="tb"><b>Serving</b> ${cityShort} & Surrounding Areas</div>
  <div class="tb"><b>100%</b> Satisfaction Guarantee</div>
</div>

<!-- Services -->
<section class="services" id="services">
  <div class="section-eye">What We Do</div>
  <h2 class="section-h2">Our Services</h2>
  <p class="section-sub">Reliable, professional service backed by years of experience in ${cityShort}. No job too big or too small.</p>
  <div class="svc-grid">
    ${services.map((s,i) => `
    <div class="svc">
      <h3>${s}</h3>
      <p>Expert workmanship, fair pricing, and guaranteed results every time.</p>
      <span class="svc-cta">Learn more →</span>
    </div>`).join('')}
  </div>
</section>

<!-- Social Proof -->
${rating || reviews ? `
<section class="proof">
  <div class="proof-inner">
    <div class="section-eye">What Customers Say</div>
    <div class="proof-hero">
      ${rating ? `
      <div class="proof-score">
        <div class="proof-big">${rating}</div>
        <span class="proof-stars">${'★'.repeat(stars)}${'☆'.repeat(5-stars)}</span>
        <div class="proof-count">Based on ${reviews||'dozens of'} Google reviews</div>
      </div>
      <div class="proof-divider"></div>` : ''}
      <div class="proof-statement">
        ${reviews ? `<span>${reviews}+ customers</span>` : 'Dozens of customers'} trust us<br>
        with their homes in <span>${cityShort}.</span>
      </div>
    </div>
    <div class="reviews-grid">
      <div class="rv">
        <div class="rv-stars">★★★★★</div>
        <div class="rv-text">"Called at 8am and they were at my house by 10. Professional, clean, and fixed everything in one visit. Exactly what you want from a local company."</div>
        <div class="rv-name">— Verified Google Review · ${cityShort}</div>
      </div>
      <div class="rv">
        <div class="rv-stars">★★★★★</div>
        <div class="rv-text">"Honest pricing, no surprise charges, showed up on time. These guys are the real deal. I've already recommended them to three neighbors."</div>
        <div class="rv-name">— Verified Google Review · ${cityShort}</div>
      </div>
    </div>
  </div>
</section>` : ''}

<!-- Merchandise -->
<section class="merch">
  <div class="section-eye">Brand Merchandise</div>
  <h2 class="section-h2">Your Logo.<br>On Everything.</h2>
  <p class="section-sub">We design your logo and put it on premium shirts, hats, and jackets. Print-on-demand — no inventory, no minimums.</p>
  <div class="merch-grid">
    <div class="mc">
      <div class="mc-img">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M20 30 L40 20 L50 32 Q60 26 70 32 L80 20 L100 30 L95 52 L80 46 L80 100 L40 100 L40 46 L25 52 Z" fill="${D.secondary}" stroke="${D.accent}" stroke-width="1.5" stroke-opacity="0.6"/>
          <text x="60" y="76" font-family="Arial Black" font-size="9" fill="${D.accent}" text-anchor="middle" font-weight="900">${biz.name.substring(0,10).toUpperCase()}</text>
        </svg>
      </div>
      <div class="mc-body"><div class="mc-name">Premium T-Shirt</div><div class="mc-desc">Bella+Canvas · Any color · All sizes</div><div class="mc-price">$29.99</div></div>
    </div>
    <div class="mc">
      <div class="mc-img">
        <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
          <path d="M10 72 Q70 18 130 72" fill="${D.secondary}" stroke="${D.accent}" stroke-width="1.5" stroke-opacity="0.6"/>
          <rect x="10" y="72" width="120" height="14" rx="7" fill="${D.secondary}" stroke="${D.accent}" stroke-width="1" stroke-opacity="0.4"/>
          <text x="70" y="62" font-family="Arial Black" font-size="9" fill="${D.accent}" text-anchor="middle" font-weight="900">${biz.name.substring(0,8).toUpperCase()}</text>
        </svg>
      </div>
      <div class="mc-body"><div class="mc-name">Structured Hat</div><div class="mc-desc">Classic fit · Adjustable strap</div><div class="mc-price">$24.99</div></div>
    </div>
    <div class="mc">
      <div class="mc-img">
        <svg width="130" height="130" viewBox="0 0 130 130" fill="none">
          <path d="M15 38 L35 22 L50 36 Q65 30 80 36 L95 22 L115 38 L108 62 L90 54 L90 112 L40 112 L40 54 L22 62 Z" fill="${D.secondary}" stroke="${D.accent}" stroke-width="1.5" stroke-opacity="0.6"/>
          <path d="M50 36 Q65 44 80 36" fill="none" stroke="${D.accent}" stroke-width="1" stroke-opacity="0.4"/>
          <text x="65" y="86" font-family="Arial Black" font-size="8" fill="${D.accent}" text-anchor="middle" font-weight="900">${biz.name.substring(0,10).toUpperCase()}</text>
        </svg>
      </div>
      <div class="mc-body"><div class="mc-name">Heavy Blend Hoodie</div><div class="mc-desc">Gildan 18500 · Unisex · Warm</div><div class="mc-price">$54.99</div></div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="cta-glow"></div>
  <div class="cta-inner">
    <h2>Ready to Get Started?</h2>
    <p>Serving ${cityShort} and surrounding areas. Call us or request a free estimate — we respond same day, every day.</p>
    ${biz.phone ? `<a href="tel:${biz.phone}" class="cta-phone">${biz.phone}</a>` : ''}
    <br>
    <button class="btn-hero" onclick="openModal()" style="font-size:16px;padding:18px 44px">Claim This Website for $99 →</button>
  </div>
</section>

<!-- Footer -->
<footer>
  <div class="footer-brand">${biz.name}</div>
  <p>${biz.address || cityShort}${biz.phone ? ' · ' + biz.phone : ''}</p>
  <div class="preview-badge">⚡ Preview built by e-Falconry · Claim at efalconry.com for $99</div>
</footer>

<!-- Payment Modal -->
<div class="modal-ov" id="modal" onclick="if(event.target===this)closeModal()">
  <div class="modal">
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div id="pay-wrap">
      <div class="price-hero">$99</div>
      <div class="price-note">one-time · nothing required from you · live in 48 hours</div>
      <h3>Claim Your Website</h3>
      <p class="modal-sub">Your info, your domain, your site — fully built and delivered.</p>
      <div class="field"><label>Your Name</label><input id="p-name" type="text" placeholder="Bob Johnson"></div>
      <div class="field"><label>Email</label><input id="p-email" type="email" placeholder="bob@example.com"></div>
      <div class="pay-tabs">
        <div class="ptab on" onclick="swTab('card',this)">💳 Card</div>
        <div class="ptab" onclick="swTab('paypal',this)">🅿 PayPal</div>
      </div>
      <div class="ppanel on" id="pp-card">
        <div id="card-el"></div>
        <div id="pay-err"></div>
        <button class="pay-btn" onclick="payCard()">Pay $99 →</button>
      </div>
      <div class="ppanel" id="pp-paypal">
        <div id="pp-container"></div>
      </div>
    </div>
    <div id="pay-ok">
      <h3>🎉 You're in!</h3>
      <p style="color:var(--t2);font-size:15px;line-height:1.7">Check your email for confirmation. Your site will be live within 48 hours. We'll be in touch!</p>
    </div>
  </div>
</div>

<!-- Tracking + Payment JS -->
<script>
// ── Visit tracking ─────────────────────────────────────────
const slug = '${(biz.name + '-' + (biz.city||'')).toLowerCase().replace(/[^a-z0-9]/g,'-').replace(/-+/g,'-').substring(0,40)}';
const t0 = Date.now();
fetch('/api/track',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({slug,action:'view'})}).catch(()=>{});
window.addEventListener('beforeunload',()=>{
  navigator.sendBeacon('/api/track',JSON.stringify({slug,timeOnPage:Math.round((Date.now()-t0)/1000),action:'exit'}));
});

// ── Modal ─────────────────────────────────────────────────
const bizName='${biz.name.replace(/'/g,"\\'")}', previewUrl=location.href;
let stripe,cardEl,ppInited=false;

function openModal(){document.getElementById('modal').classList.add('open');initStripe();}
function closeModal(){document.getElementById('modal').classList.remove('open');}

function swTab(tab,el){
  document.querySelectorAll('.ptab').forEach(t=>t.classList.remove('on'));
  document.querySelectorAll('.ppanel').forEach(p=>p.classList.remove('on'));
  el.classList.add('on');
  document.getElementById('pp-'+tab).classList.add('on');
  if(tab==='paypal')initPP();
}

function initStripe(){
  if(stripe)return;
  const pk='${process.env.STRIPE_PUBLIC_KEY||''}';
  if(!pk)return;
  stripe=Stripe(pk);
  const els=stripe.elements({appearance:{theme:'night',variables:{colorPrimary:'${D.accent}',colorBackground:'${D.secondary}'}}});
  cardEl=els.create('card');
  cardEl.mount('#card-el');
}

async function payCard(){
  const name=document.getElementById('p-name').value.trim();
  const email=document.getElementById('p-email').value.trim();
  if(!name||!email){showErr('Please fill in your name and email.');return;}
  const btn=document.querySelector('.pay-btn');btn.textContent='Processing...';btn.disabled=true;
  try{
    const ir=await fetch('/api/checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'stripe_intent',bizName,email,plan:'site'})});
    const {clientSecret,error}=await ir.json();
    if(error)throw new Error(error);
    const{error:ce}=await stripe.confirmCardPayment(clientSecret,{payment_method:{card:cardEl,billing_details:{name,email}}});
    if(ce)throw new Error(ce.message);
    await confirm(name,email,'Stripe');
  }catch(e){showErr(e.message);btn.textContent='Pay $99 →';btn.disabled=false;}
}

let ppReady=false;
function initPP(){
  if(ppInited||!window.paypal)return;
  ppInited=true;
  paypal.Buttons({
    createOrder:async()=>{
      const r=await fetch('/api/checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'paypal_order',bizName,plan:'site'})});
      const{orderId,error}=await r.json();
      if(error)throw new Error(error);
      return orderId;
    },
    onApprove:async()=>{await confirm(document.getElementById('p-name').value,document.getElementById('p-email').value,'PayPal');},
    style:{layout:'vertical',color:'gold',shape:'rect',label:'pay'}
  }).render('#pp-container');
}

async function confirm(name,email,method){
  await fetch('/api/checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'confirm',bizName,email,plan:'site',previewUrl,paymentMethod:method})});
  document.getElementById('pay-wrap').style.display='none';
  document.getElementById('pay-ok').style.display='block';
}

function showErr(m){const e=document.getElementById('pay-err');e.textContent=m;e.style.display='block';}

// Wire all claim buttons to modal
document.querySelectorAll('[onclick*="claim"],[href*="claim"]').forEach(el=>{
  el.onclick=e=>{e.preventDefault();openModal();};
  if(el.href)el.href='#';
});
</script>
<script src="https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID||'test'}&currency=USD" defer></script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  return res.status(200).send(html);
}

function errorPage(msg) {
  return `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:40px;background:#07090C;color:#EDE8DC;text-align:center"><h2 style="color:#F07A20">Preview Unavailable</h2><p style="color:#8892A8;margin-top:12px">${msg}</p><br><a href="https://efalconry.com" style="color:#F07A20">← efalconry.com</a></body></html>`;
}
