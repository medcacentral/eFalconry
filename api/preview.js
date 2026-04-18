// e-Falconry Preview Page Generator
// URL: /preview?d=BASE64_ENCODED_JSON
// Decodes business data and renders a live custom website preview

const SERVICES = {
  plumber:              ['Drain Cleaning', 'Pipe Repair & Replacement', 'Water Heater Install', 'Emergency Plumbing 24/7', 'Sewer Line Repair', 'Leak Detection'],
  'hvac contractor':    ['AC Installation & Repair', 'Furnace & Heating', 'Duct Cleaning', 'Thermostat Installation', 'Emergency HVAC 24/7', 'Preventive Maintenance'],
  electrician:          ['Panel Upgrades', 'Wiring & Rewiring', 'Outlet & Switch Install', 'EV Charger Installation', 'Emergency Electrical', 'Lighting Installation'],
  'roofing contractor': ['Roof Replacement', 'Roof Repair & Patching', 'Gutter Installation', 'Storm Damage Repair', 'Roof Inspection', 'Skylight Installation'],
  landscaping:          ['Lawn Care & Mowing', 'Landscape Design', 'Tree Trimming & Removal', 'Irrigation Systems', 'Hardscape & Patios', 'Seasonal Cleanup'],
  'general contractor': ['Kitchen Remodeling', 'Bathroom Renovation', 'Room Additions', 'Deck & Patio Building', 'Basement Finishing', 'Exterior Renovations'],
  default:              ['Professional Services', 'Quality Workmanship', 'Free Estimates', 'Licensed & Insured', 'Same-Day Service', 'Customer Satisfaction'],
};

function getServices(category) {
  const key = Object.keys(SERVICES).find(k => category?.toLowerCase().includes(k));
  return SERVICES[key] || SERVICES.default;
}

function renderPreview(biz) {
  const services = getServices(biz.category);
  const rating = biz.rating ? parseFloat(biz.rating).toFixed(1) : null;
  const reviews = biz.reviews ? parseInt(biz.reviews) : null;
  const stars = rating ? '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating)) : '';
  const cityShort = (biz.city || '').replace(/, [A-Z]{2}$/, '');
  const claimUrl = `https://efalconry.com/?claim=${encodeURIComponent(biz.name)}&source=preview`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${biz.name} — Preview by e-Falconry</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@700;800&family=DM+Sans:wght@300;400&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
:root{--acc:#F07A20;--bg:#07090C;--bg2:#0F1219;--bg3:#161B26;--text:#EDE8DC;--t2:#C4CBDA;--t3:#8892A8;}
body{background:var(--bg);color:var(--text);font-family:'DM Sans',sans-serif;min-height:100vh;}
a{color:inherit;text-decoration:none;}

/* ── CLAIM BANNER ── */
.claim-banner{position:sticky;top:0;z-index:1000;background:var(--acc);padding:14px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;box-shadow:0 4px 24px rgba(240,122,32,.4);}
.cb-left{font-family:'Syne',sans-serif;font-size:13px;font-weight:700;color:#fff;line-height:1.4;}
.cb-left span{opacity:.85;font-weight:400;}
.cb-btn{background:#fff;color:var(--acc);font-family:'Syne',sans-serif;font-weight:800;font-size:14px;padding:10px 24px;border-radius:8px;white-space:nowrap;border:none;cursor:pointer;transition:transform .15s;}
.cb-btn:hover{transform:scale(1.03);}

/* ── NAV ── */
nav{background:rgba(7,9,12,.97);border-bottom:1px solid rgba(14,165,233,.2);padding:0 32px;height:64px;display:flex;align-items:center;justify-content:space-between;}
.n-brand{font-family:'Bebas Neue',cursive;font-size:22px;letter-spacing:.06em;color:var(--text);}
.n-phone{font-family:'Syne',sans-serif;font-size:13px;font-weight:700;color:#0EA5E9;}
.n-cta{background:#0EA5E9;color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:12px;padding:9px 20px;border-radius:6px;}

/* ── HERO ── */
.hero{padding:80px 32px 64px;max-width:900px;margin:0 auto;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(14,165,233,.12);border:1px solid rgba(14,165,233,.3);border-radius:99px;padding:6px 16px;font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:.1em;color:#0EA5E9;text-transform:uppercase;margin-bottom:24px;}
.hero-eyebrow::before{content:'';width:6px;height:6px;border-radius:50%;background:#4ADE80;box-shadow:0 0 6px #4ADE80;}
.hero h1{font-family:'Bebas Neue',cursive;font-size:clamp(52px,10vw,88px);line-height:.95;margin-bottom:20px;}
.hero h1 span{color:#0EA5E9;}
.hero-sub{font-size:17px;color:var(--t2);line-height:1.7;max-width:540px;margin-bottom:36px;font-weight:300;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;}
.btn-primary{background:#0EA5E9;color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:15px;padding:15px 32px;border-radius:10px;border:none;cursor:pointer;}
.btn-sec{background:transparent;color:var(--t2);font-family:'Syne',sans-serif;font-weight:700;font-size:15px;padding:15px 32px;border-radius:10px;border:1px solid rgba(255,255,255,.15);}

/* ── TRUST STRIP ── */
.trust{border-top:1px solid rgba(14,165,233,.15);border-bottom:1px solid rgba(14,165,233,.15);padding:20px 32px;display:flex;gap:8px;flex-wrap:wrap;max-width:900px;margin:0 auto;}
.t-badge{background:rgba(14,165,233,.07);border:1px solid rgba(14,165,233,.15);border-radius:8px;padding:10px 18px;font-family:'Syne',sans-serif;font-size:12px;font-weight:700;color:var(--t2);}
.t-badge b{color:#0EA5E9;}

/* ── SERVICES ── */
.services{padding:72px 32px;max-width:900px;margin:0 auto;}
.sec-eye{font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:.14em;color:#0EA5E9;text-transform:uppercase;margin-bottom:12px;}
.sec-eye::before{content:'— ';opacity:.5;}
.services h2{font-family:'Bebas Neue',cursive;font-size:clamp(36px,6vw,52px);margin-bottom:36px;}
.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.svc-card{background:var(--bg2);border:1px solid rgba(14,165,233,.15);border-left:4px solid #0EA5E9;border-radius:12px;padding:20px;}
.svc-card h3{font-family:'Syne',sans-serif;font-size:13px;font-weight:700;color:var(--text);margin-bottom:6px;}
.svc-card p{font-size:12px;color:var(--t3);line-height:1.5;}

/* ── REVIEWS ── */
.reviews{background:var(--bg2);padding:64px 32px;border-top:1px solid rgba(14,165,233,.1);}
.reviews-inner{max-width:900px;margin:0 auto;}
.rating-hero{display:flex;align-items:center;gap:24px;margin-bottom:40px;flex-wrap:wrap;}
.rating-num{font-family:'Bebas Neue',cursive;font-size:72px;line-height:1;color:var(--text);}
.rating-stars{font-size:28px;color:#FBBF24;letter-spacing:2px;}
.rating-count{font-size:14px;color:var(--t3);}
.review-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;}
.rv-card{background:var(--bg3);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:20px;}
.rv-stars{color:#FBBF24;font-size:13px;margin-bottom:8px;}
.rv-text{font-size:13px;color:var(--t2);line-height:1.6;margin-bottom:12px;font-style:italic;}
.rv-name{font-family:'Syne',sans-serif;font-size:11px;font-weight:700;color:var(--t3);}

/* ── CTA ── */
.cta-sec{padding:80px 32px;text-align:center;max-width:700px;margin:0 auto;}
.cta-sec h2{font-family:'Bebas Neue',cursive;font-size:clamp(40px,8vw,64px);line-height:1;margin-bottom:16px;}
.cta-sec p{font-size:16px;color:var(--t2);margin-bottom:32px;line-height:1.7;}
.cta-phone{font-family:'Bebas Neue',cursive;font-size:42px;color:#0EA5E9;display:block;margin-top:16px;}

/* ── FOOTER ── */
footer{background:#060E18;border-top:1px solid rgba(14,165,233,.15);padding:32px;text-align:center;}
footer p{font-size:12px;color:var(--t3);}
footer .fb{font-family:'Bebas Neue',cursive;font-size:20px;color:var(--text);margin-bottom:8px;}
.preview-note{background:rgba(240,122,32,.08);border:1px solid rgba(240,122,32,.2);border-radius:8px;padding:10px 16px;font-size:11px;color:var(--acc);margin-top:12px;font-family:'Syne',sans-serif;font-weight:700;letter-spacing:.05em;}

@media(max-width:640px){
  .svc-grid{grid-template-columns:1fr 1fr;}
  .review-cards{grid-template-columns:1fr;}
  .claim-banner{flex-direction:column;text-align:center;}
  .hero{padding:48px 20px 40px;}
  nav{padding:0 20px;}
  .trust{padding:16px 20px;}
  .services,.reviews-inner,.cta-sec{padding-left:20px;padding-right:20px;}
}
</style>
</head>
<body>

<!-- Claim Banner -->
<div class="claim-banner">
  <div class="cb-left">
    This website was built for <strong>${biz.name}</strong><br>
    <span>Preview only — claim it for $99 and it's yours.</span>
  </div>
  <a href="${claimUrl}" class="cb-btn">Claim This Site — $99 →</a>
</div>

<!-- Nav -->
<nav>
  <div class="n-brand">${biz.name}</div>
  ${biz.phone ? `<a href="tel:${biz.phone}" class="n-phone">${biz.phone}</a>` : ''}
  <a href="${claimUrl}" class="n-cta">Get a Free Quote</a>
</nav>

<!-- Hero -->
<div class="hero">
  <div class="hero-eyebrow">Available 24/7 · ${cityShort}</div>
  <h1>${getHeadline(biz.category)}<br><span>${cityShort}'s Trusted Choice.</span></h1>
  <p class="hero-sub">Licensed, insured, and trusted by homeowners and businesses across ${cityShort}. Free estimates. Same-day availability.</p>
  <div class="hero-btns">
    ${biz.phone ? `<a href="tel:${biz.phone}" class="btn-primary">Call ${biz.phone}</a>` : '<a href="#contact" class="btn-primary">Get a Free Quote</a>'}
    <a href="#services" class="btn-sec">Our Services</a>
  </div>
</div>

<!-- Trust -->
<div class="trust">
  <div class="t-badge"><b>Licensed</b> & Insured</div>
  <div class="t-badge"><b>Free</b> Estimates</div>
  <div class="t-badge"><b>Same-Day</b> Service</div>
  ${rating ? `<div class="t-badge"><b>${rating} ★</b> Google Rating</div>` : ''}
  ${reviews ? `<div class="t-badge"><b>${reviews}+</b> Happy Customers</div>` : ''}
  <div class="t-badge"><b>Serving</b> ${cityShort} & Surrounding Areas</div>
</div>

<!-- Services -->
<div class="services" id="services">
  <div class="sec-eye">What We Do</div>
  <h2>Our Services</h2>
  <div class="svc-grid">
    ${services.map(s => `
    <div class="svc-card">
      <h3>${s}</h3>
      <p>Professional service, fair pricing, and quality results every time.</p>
    </div>`).join('')}
  </div>
</div>

<!-- Reviews -->
${rating ? `
<div class="reviews">
  <div class="reviews-inner">
    <div class="sec-eye">What Customers Say</div>
    <h2 style="font-family:'Bebas Neue',cursive;font-size:clamp(36px,6vw,52px);margin-bottom:28px;">Google Reviews</h2>
    <div class="rating-hero">
      <div class="rating-num">${rating}</div>
      <div>
        <div class="rating-stars">${stars}</div>
        <div class="rating-count">Based on ${reviews || 'verified'} Google reviews</div>
      </div>
    </div>
    <div class="review-cards">
      <div class="rv-card">
        <div class="rv-stars">★★★★★</div>
        <div class="rv-text">"Fast, professional, and fair pricing. Called at 8am, they were here by noon. Will definitely use again."</div>
        <div class="rv-name">— Google Review</div>
      </div>
      <div class="rv-card">
        <div class="rv-stars">★★★★★</div>
        <div class="rv-text">"Honest pricing, no upsell nonsense. Fixed the problem quickly and cleaned up after themselves. Highly recommend."</div>
        <div class="rv-name">— Google Review</div>
      </div>
    </div>
  </div>
</div>` : ''}

<!-- CTA -->
<div class="cta-sec" id="contact">
  <h2>Ready to Get Started?</h2>
  <p>We serve ${cityShort} and the surrounding area. Call us or request a free estimate online — we respond same day.</p>
  ${biz.phone ? `<a href="tel:${biz.phone}" class="cta-phone">${biz.phone}</a>` : ''}
  <br><br>
  <a href="${claimUrl}" class="btn-primary" style="font-size:16px;padding:16px 36px;">Claim This Website for $99 →</a>
</div>

<!-- Footer -->
<footer>
  <div class="fb">${biz.name}</div>
  <p>${biz.address || cityShort} · ${biz.phone || ''}</p>
  <div class="preview-note">⚡ This is a preview built by e-Falconry — claim it at efalconry.com for $99</div>
</footer>

</body>
</html>`;
}

function getHeadline(category) {
  const cat = category?.toLowerCase() || '';
  if (cat.includes('plumb')) return 'Fast, Reliable Plumbing';
  if (cat.includes('hvac') || cat.includes('heat') || cat.includes('cool')) return 'Comfort All Year Round.';
  if (cat.includes('electr')) return 'Safe, Reliable Electrical Work.';
  if (cat.includes('roof')) return 'Roofing You Can Count On.';
  if (cat.includes('landscap')) return 'Beautiful Outdoor Spaces.';
  if (cat.includes('contrac')) return 'Quality Work, Every Time.';
  return 'Professional Service You Can Trust.';
}

export default async function handler(req, res) {
  const { d } = req.query;

  if (!d) {
    return res.status(400).send('<h1>No preview data provided</h1>');
  }

  let biz;
  try {
    biz = JSON.parse(Buffer.from(d, 'base64').toString('utf-8'));
  } catch (e) {
    return res.status(400).send('<h1>Invalid preview link</h1>');
  }

  if (!biz.name) {
    return res.status(400).send('<h1>Missing business data</h1>');
  }

  const html = renderPreview(biz);
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-maxage=86400'); // cache for 24hr on Vercel edge
  return res.status(200).send(html);
}
