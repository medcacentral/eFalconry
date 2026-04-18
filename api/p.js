// Readable preview URLs: /api/p?s=bobs-plumbing-seattle&v=BASE64DATA
// The slug makes it readable/speakable, the v param carries the data
// Route is configured in vercel.json to map /p/* to this function

const SERVICES = {
  plumber:           ['Drain Cleaning','Pipe Repair & Replacement','Water Heater Install','Emergency Plumbing 24/7','Sewer Line Repair','Leak Detection'],
  hvac:              ['AC Installation & Repair','Furnace & Heating','Duct Cleaning','Thermostat Installation','Emergency HVAC 24/7','Preventive Maintenance'],
  electrician:       ['Panel Upgrades','Wiring & Rewiring','Outlet & Switch Install','EV Charger Installation','Emergency Electrical','Lighting Installation'],
  roofing:           ['Roof Replacement','Roof Repair & Patching','Gutter Installation','Storm Damage Repair','Roof Inspection','Skylight Installation'],
  landscaping:       ['Lawn Care & Mowing','Landscape Design','Tree Trimming & Removal','Irrigation Systems','Hardscape & Patios','Seasonal Cleanup'],
  contractor:        ['Kitchen Remodeling','Bathroom Renovation','Room Additions','Deck & Patio Building','Basement Finishing','Exterior Renovations'],
  default:           ['Professional Services','Quality Workmanship','Free Estimates','Licensed & Insured','Same-Day Service','Customer Satisfaction'],
};

function getServices(category) {
  const c = (category||'').toLowerCase();
  if (c.includes('plumb')) return SERVICES.plumber;
  if (c.includes('hvac')||c.includes('heat')||c.includes('cool')||c.includes('air')) return SERVICES.hvac;
  if (c.includes('electr')) return SERVICES.electrician;
  if (c.includes('roof')) return SERVICES.roofing;
  if (c.includes('landscap')) return SERVICES.landscaping;
  if (c.includes('contrac')) return SERVICES.contractor;
  return SERVICES.default;
}

function getHeadline(category) {
  const c = (category||'').toLowerCase();
  if (c.includes('plumb')) return ['Fast, Reliable Plumbing','You Can Count On.'];
  if (c.includes('hvac')||c.includes('heat')) return ['Year-Round Comfort','For Your Home.'];
  if (c.includes('electr')) return ['Safe, Professional','Electrical Work.'];
  if (c.includes('roof')) return ['Roofing That','Protects Your Home.'];
  if (c.includes('landscap')) return ['Beautiful Outdoor','Spaces. Guaranteed.'];
  return ['Professional Service','You Can Trust.'];
}

export default async function handler(req, res) {
  const { v } = req.query;
  // Also support legacy /preview?d= format
  const d = req.query.d || v;

  if (!d) {
    return res.status(400).send(errorPage('No preview data found. This link may be invalid.'));
  }

  let biz;
  try {
    biz = JSON.parse(Buffer.from(decodeURIComponent(d), 'base64').toString('utf-8'));
  } catch(e) {
    return res.status(400).send(errorPage('This preview link appears to be broken. Please contact hello@efalconry.com'));
  }

  if (!biz.name) return res.status(400).send(errorPage('Missing business information.'));

  const services = getServices(biz.category);
  const [h1, h2] = getHeadline(biz.category);
  const rating = biz.rating ? parseFloat(biz.rating).toFixed(1) : null;
  const reviews = biz.reviews ? parseInt(biz.reviews) : null;
  const cityShort = (biz.city||'').replace(/, [A-Z]{2}$/, '');
  const claimUrl = `https://efalconry.com/?claim=${encodeURIComponent(biz.name)}&source=preview`;
  const stars = rating ? Math.round(parseFloat(rating)) : 0;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${biz.name} — New Website Preview</title>
<meta name="robots" content="noindex">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@700;800&family=DM+Sans:wght@300;400&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
:root{--acc:#F07A20;--blue:#0EA5E9;--bg:#07090C;--bg2:#0F1219;--bg3:#161B26;--text:#EDE8DC;--t2:#C4CBDA;--t3:#8892A8;--bdr:rgba(255,255,255,.07);}
body{background:var(--bg);color:var(--text);font-family:'DM Sans',sans-serif;}

/* Claim banner */
.banner{position:sticky;top:0;z-index:999;background:var(--acc);padding:12px 24px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;box-shadow:0 4px 20px rgba(240,122,32,.5);}
.banner-text{font-family:'Syne',sans-serif;font-size:13px;font-weight:700;color:#fff;line-height:1.45;}
.banner-text em{font-style:normal;opacity:.8;font-weight:400;}
.banner-btn{background:#fff;color:var(--acc);font-family:'Syne',sans-serif;font-weight:800;font-size:13px;padding:10px 22px;border-radius:8px;white-space:nowrap;transition:transform .15s;display:inline-block;}
.banner-btn:hover{transform:scale(1.04);}

/* Nav */
nav{background:rgba(7,9,12,.98);border-bottom:1px solid rgba(14,165,233,.2);padding:0 5%;height:66px;display:flex;align-items:center;justify-content:space-between;gap:16px;}
.nav-brand{font-family:'Bebas Neue',cursive;font-size:20px;letter-spacing:.06em;}
.nav-phone{font-family:'Syne',sans-serif;font-size:13px;font-weight:700;color:var(--blue);}
.nav-cta{background:var(--blue);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:12px;padding:9px 18px;border-radius:6px;white-space:nowrap;}

/* Hero */
.hero{padding:80px 5% 64px;max-width:960px;margin:0 auto;}
.pill{display:inline-flex;align-items:center;gap:8px;background:rgba(14,165,233,.1);border:1px solid rgba(14,165,233,.25);border-radius:99px;padding:6px 16px;font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:.1em;color:var(--blue);text-transform:uppercase;margin-bottom:24px;}
.pill::before{content:'';width:6px;height:6px;border-radius:50%;background:#4ADE80;box-shadow:0 0 8px #4ADE80;}
h1{font-family:'Bebas Neue',cursive;font-size:clamp(52px,11vw,90px);line-height:.93;margin-bottom:20px;}
h1 span{color:var(--blue);}
.hero-sub{font-size:17px;color:var(--t2);line-height:1.72;max-width:520px;margin-bottom:36px;font-weight:300;}
.btns{display:flex;gap:12px;flex-wrap:wrap;}
.btn-p{background:var(--blue);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:15px;padding:15px 32px;border-radius:10px;display:inline-block;}
.btn-s{background:transparent;color:var(--t2);font-family:'Syne',sans-serif;font-weight:700;font-size:15px;padding:15px 32px;border-radius:10px;border:1px solid var(--bdr);display:inline-block;}

/* Trust strip */
.trust{border-top:1px solid rgba(14,165,233,.12);border-bottom:1px solid rgba(14,165,233,.12);padding:20px 5%;display:flex;gap:10px;flex-wrap:wrap;}
.tb{background:rgba(14,165,233,.07);border:1px solid rgba(14,165,233,.14);border-radius:8px;padding:9px 16px;font-family:'Syne',sans-serif;font-size:12px;font-weight:700;color:var(--t2);}
.tb b{color:var(--blue);}

/* Services */
.services{padding:72px 5%;max-width:960px;margin:0 auto;}
.eye{font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:.14em;color:var(--acc);text-transform:uppercase;margin-bottom:10px;}
.eye::before{content:'— ';}
h2{font-family:'Bebas Neue',cursive;font-size:clamp(36px,6vw,54px);margin-bottom:32px;}
.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
.svc{background:var(--bg2);border:1px solid var(--bdr);border-left:3px solid var(--blue);border-radius:12px;padding:20px 18px;}
.svc h3{font-family:'Syne',sans-serif;font-size:13px;font-weight:700;margin-bottom:5px;}
.svc p{font-size:12px;color:var(--t3);line-height:1.5;}

/* Reviews */
.reviews{background:var(--bg2);border-top:1px solid var(--bdr);padding:64px 5%;}
.reviews-inner{max-width:960px;margin:0 auto;}
.rating-row{display:flex;align-items:center;gap:20px;margin-bottom:32px;flex-wrap:wrap;}
.big-num{font-family:'Bebas Neue',cursive;font-size:80px;line-height:1;color:var(--text);}
.stars-col .stars{font-size:26px;color:#FBBF24;letter-spacing:2px;}
.stars-col .rc{font-size:13px;color:var(--t3);margin-top:4px;}
.rv-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.rv{background:var(--bg3);border:1px solid var(--bdr);border-radius:12px;padding:20px;}
.rv .s{color:#FBBF24;font-size:12px;margin-bottom:8px;}
.rv .t{font-size:13px;color:var(--t2);line-height:1.65;font-style:italic;margin-bottom:10px;}
.rv .n{font-family:'Syne',sans-serif;font-size:10px;font-weight:700;color:var(--t3);}

/* CTA section */
.cta{padding:80px 5%;text-align:center;max-width:700px;margin:0 auto;}
.cta h2{font-size:clamp(40px,8vw,64px);}
.cta p{font-size:16px;color:var(--t2);line-height:1.7;margin:16px 0 32px;}
.big-phone{font-family:'Bebas Neue',cursive;font-size:44px;color:var(--blue);display:block;margin:12px 0;}
.claim-big{background:var(--acc);color:#fff;font-family:'Syne',sans-serif;font-weight:800;font-size:16px;padding:18px 40px;border-radius:12px;display:inline-block;margin-top:12px;}

/* Footer */
footer{background:#060E18;border-top:1px solid rgba(14,165,233,.12);padding:32px 5%;text-align:center;}
.f-brand{font-family:'Bebas Neue',cursive;font-size:22px;margin-bottom:6px;}
footer p{font-size:12px;color:var(--t3);margin-bottom:10px;}
.f-note{display:inline-block;background:rgba(240,122,32,.1);border:1px solid rgba(240,122,32,.25);border-radius:6px;padding:8px 16px;font-family:'Syne',sans-serif;font-size:11px;color:var(--acc);font-weight:700;letter-spacing:.04em;}

@media(max-width:640px){
  .svc-grid{grid-template-columns:1fr 1fr;}
  .rv-grid{grid-template-columns:1fr;}
  .banner{flex-direction:column;text-align:center;}
  h1{font-size:clamp(44px,13vw,72px);}
  .btns .btn-p,.btns .btn-s{width:100%;text-align:center;}
}
</style>
</head>
<body>

<div class="banner">
  <div class="banner-text">
    This site was built for <strong>${biz.name}</strong><br>
    <em>Preview only — claim it and it's live in 48 hours.</em>
  </div>
  <a href="${claimUrl}" class="banner-btn">Claim This Site — $99 →</a>
</div>

<nav>
  <div class="nav-brand">${biz.name}</div>
  ${biz.phone ? `<a href="tel:${biz.phone}" class="nav-phone">${biz.phone}</a>` : ''}
  <a href="${claimUrl}" class="nav-cta">Free Quote</a>
</nav>

<div class="hero">
  <div class="pill">Available 24/7 · ${cityShort}</div>
  <h1>${h1}<br><span>${h2}</span></h1>
  <p class="hero-sub">Licensed, insured, and trusted by homeowners across ${cityShort}. Free estimates. Same-day availability on most jobs.</p>
  <div class="btns">
    ${biz.phone ? `<a href="tel:${biz.phone}" class="btn-p">Call ${biz.phone}</a>` : `<a href="${claimUrl}" class="btn-p">Get a Free Quote</a>`}
    <a href="#services" class="btn-s">See Our Services</a>
  </div>
</div>

<div class="trust">
  <div class="tb"><b>Licensed</b> & Insured</div>
  <div class="tb"><b>Free</b> Estimates</div>
  <div class="tb"><b>Same-Day</b> Available</div>
  ${rating ? `<div class="tb"><b>${rating} ★</b> on Google</div>` : ''}
  ${reviews ? `<div class="tb"><b>${reviews}+</b> Customers Served</div>` : ''}
  <div class="tb"><b>Serving</b> ${cityShort} & Surrounding Areas</div>
</div>

<div class="services" id="services">
  <div class="eye">What We Do</div>
  <h2>Our Services</h2>
  <div class="svc-grid">
    ${services.map(s => `<div class="svc"><h3>${s}</h3><p>Professional service, fair pricing, guaranteed results.</p></div>`).join('')}
  </div>
</div>

${rating ? `
<div class="reviews">
  <div class="reviews-inner">
    <div class="eye">What Customers Say</div>
    <h2>Google Reviews</h2>
    <div class="rating-row">
      <div class="big-num">${rating}</div>
      <div class="stars-col">
        <div class="stars">${'★'.repeat(stars)}${'☆'.repeat(5-stars)}</div>
        <div class="rc">Based on ${reviews||'verified'} Google reviews</div>
      </div>
    </div>
    <div class="rv-grid">
      <div class="rv"><div class="s">★★★★★</div><div class="t">"Fast, professional, and fair. Called in the morning, fixed by noon. Will absolutely use again."</div><div class="n">— Google Review</div></div>
      <div class="rv"><div class="s">★★★★★</div><div class="t">"No upsells, no nonsense. They fixed the problem right the first time and left the place clean."</div><div class="n">— Google Review</div></div>
    </div>
  </div>
</div>` : ''}

<div class="cta">
  <h2>Ready to Get Started?</h2>
  <p>Serving ${cityShort} and surrounding areas. Call us or request a free estimate — we respond same day.</p>
  ${biz.phone ? `<a href="tel:${biz.phone}" class="big-phone">${biz.phone}</a>` : ''}
  <br>
  <a href="${claimUrl}" class="claim-big">Claim This Website for $99 →</a>
</div>

<footer>
  <div class="f-brand">${biz.name}</div>
  <p>${biz.address||cityShort}${biz.phone ? ' · ' + biz.phone : ''}</p>
  <span class="f-note">⚡ Preview built by e-Falconry · Claim at efalconry.com for $99</span>
</footer>

</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  return res.status(200).send(html);
}

function errorPage(msg) {
  return `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:40px;background:#07090C;color:#EDE8DC;text-align:center"><h2 style="color:#F07A20">Preview Unavailable</h2><p style="color:#8892A8;margin-top:12px">${msg}</p><br><a href="https://efalconry.com" style="color:#0EA5E9">← efalconry.com</a></body></html>`;
}
