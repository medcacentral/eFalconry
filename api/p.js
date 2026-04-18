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
<script src="https://js.stripe.com/v3/"></script>
<script src="https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID || 'test'}&currency=USD" defer></script>
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


/* Merchandise section */
.merch-sec{background:var(--bg);padding:72px 5%;border-top:1px solid var(--bdr);}
.merch-inner{max-width:960px;margin:0 auto;}
.merch-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:32px;}
.merch-card{background:var(--bg2);border:1px solid var(--bdr);border-radius:16px;overflow:hidden;transition:transform .2s;}
.merch-card:hover{transform:translateY(-4px);}
.merch-img{height:200px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
.merch-img.tshirt{background:linear-gradient(135deg,#1a1a2e,#16213e);}
.merch-img.hat{background:linear-gradient(135deg,#0f0f23,#1a1a2e);}
.merch-img.hoodie{background:linear-gradient(135deg,#12121f,#1a1a2e);}
.merch-label{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);background:rgba(240,122,32,.15);border:1px solid rgba(240,122,32,.3);border-radius:99px;padding:4px 12px;font-family:'Syne',sans-serif;font-size:10px;font-weight:700;color:var(--acc);white-space:nowrap;}
.merch-info{padding:18px;}
.merch-info h4{font-family:'Syne',sans-serif;font-size:14px;font-weight:700;margin-bottom:4px;}
.merch-info p{font-size:12px;color:var(--t3);margin-bottom:10px;}
.merch-price{font-family:'Bebas Neue',cursive;font-size:24px;color:var(--acc);}
.merch-cta{display:block;background:var(--bg3);border:1px solid var(--bdr);border-radius:8px;padding:8px;font-family:'Syne',sans-serif;font-size:11px;font-weight:700;color:var(--t2);text-align:center;margin-top:10px;cursor:pointer;transition:background .15s;}
.merch-cta:hover{background:rgba(240,122,32,.1);color:var(--acc);}
.merch-banner{background:linear-gradient(135deg,rgba(240,122,32,.12),rgba(240,122,32,.04));border:1px solid rgba(240,122,32,.25);border-radius:16px;padding:28px 32px;margin-top:32px;display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;}
.merch-banner h4{font-family:'Bebas Neue',cursive;font-size:28px;margin-bottom:6px;}
.merch-banner p{font-size:13px;color:var(--t2);max-width:440px;line-height:1.6;}
.merch-banner .price-tag{font-family:'Bebas Neue',cursive;font-size:42px;color:var(--acc);white-space:nowrap;}
@media(max-width:640px){.merch-grid{grid-template-columns:1fr 1fr;}.merch-banner{flex-direction:column;text-align:center;}}

/* Payment modal */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:2000;display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;pointer-events:none;transition:opacity .2s;}
.modal-overlay.open{opacity:1;pointer-events:all;}
.modal{background:var(--bg2);border:1px solid rgba(240,122,32,.3);border-radius:20px;width:100%;max-width:480px;padding:36px;position:relative;}
.modal h3{font-family:'Bebas Neue',cursive;font-size:32px;margin-bottom:4px;}
.modal .sub{font-size:14px;color:var(--t2);margin-bottom:28px;}
.modal-close{position:absolute;top:16px;right:18px;background:none;border:none;color:var(--t3);font-size:22px;cursor:pointer;line-height:1;}
.pay-tabs{display:flex;gap:8px;margin-bottom:24px;}
.pay-tab{flex:1;padding:10px;border-radius:8px;border:1px solid var(--bdr);background:var(--bg3);color:var(--t2);font-family:'Syne',sans-serif;font-size:12px;font-weight:700;cursor:pointer;text-align:center;transition:all .15s;}
.pay-tab.active{border-color:var(--acc);color:var(--acc);background:rgba(240,122,32,.08);}
.pay-panel{display:none;}
.pay-panel.active{display:block;}
.fi-row{display:flex;gap:10px;margin-bottom:14px;}
.fi-row .field{flex:1;}
.field label{display:block;font-family:'Syne',sans-serif;font-size:11px;font-weight:700;color:var(--t3);letter-spacing:.08em;margin-bottom:6px;}
.field input{width:100%;background:var(--bg3);border:1px solid var(--bdr);border-radius:8px;padding:11px 13px;color:var(--text);font-size:14px;font-family:'DM Sans',sans-serif;outline:none;}
.field input:focus{border-color:rgba(240,122,32,.4);}
#card-element{background:var(--bg3);border:1px solid var(--bdr);border-radius:8px;padding:12px 13px;margin-bottom:14px;}
.pay-btn{width:100%;padding:15px;border-radius:10px;border:none;cursor:pointer;font-family:'Syne',sans-serif;font-weight:800;font-size:15px;margin-top:8px;transition:transform .15s;}
.pay-btn:hover{transform:scale(1.01);}
.pay-btn.stripe-btn{background:var(--acc);color:#fff;}
.pay-btn.pp-btn{background:#FFC439;color:#003087;}
#pay-error{color:#E03030;font-size:13px;margin-top:8px;display:none;}
#pay-success{text-align:center;display:none;}
#pay-success h3{color:#4ADE80;font-size:28px;margin-bottom:8px;}
.price-tag{font-family:'Bebas Neue',cursive;font-size:48px;color:var(--acc);line-height:1;}
.price-note{font-size:12px;color:var(--t3);margin-bottom:24px;}
#paypal-button-container{margin-top:8px;}

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


<!-- Merchandise Section -->
<div class="merch-sec">
  <div class="merch-inner">
    <div class="eye">Brand Merchandise</div>
    <h2>Your Logo.<br>On Everything.</h2>
    <p style="font-size:16px;color:var(--t2);max-width:540px;line-height:1.7;font-weight:300">Once we create your logo, we can put it on premium branded merchandise — shirts, hats, hoodies, mugs, jackets. Print-on-demand, shipped directly to you or your team. No inventory. No minimum orders.</p>

    <div class="merch-grid">
      <div class="merch-card">
        <div class="merch-img tshirt">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
  <path d="M20 30 L40 20 L50 30 L60 25 L70 30 L80 20 L100 30 L95 50 L80 45 L80 100 L40 100 L40 45 L25 50 Z" fill="#1a1a2e" stroke="rgba(240,122,32,0.4)" stroke-width="1.5"/>
  <text x="60" y="75" font-family="Arial Black,sans-serif" font-size="8" fill="#F07A20" text-anchor="middle" font-weight="900">BOBS</text>
  <text x="60" y="86" font-family="Arial Black,sans-serif" font-size="6" fill="rgba(240,122,32,0.6)" text-anchor="middle">PLUMBING</text>
</svg>
          <div class="merch-label">Your Logo Here</div>
        </div>
        <div class="merch-info">
          <h4>Premium T-Shirt</h4>
          <p>Bella + Canvas 3001 · Unisex fit · Any color</p>
          <div class="merch-price">$29.99</div>
          <div class="merch-cta" onclick="openModal()">Order with Your Logo →</div>
        </div>
      </div>
      <div class="merch-card">
        <div class="merch-img hat">
          <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
  <path d="M10 70 Q70 20 130 70" fill="#0f0f23" stroke="rgba(240,122,32,0.4)" stroke-width="1.5"/>
  <rect x="10" y="70" width="120" height="12" rx="6" fill="#0f0f23" stroke="rgba(240,122,32,0.3)" stroke-width="1"/>
  <rect x="55" y="22" width="30" height="3" rx="1.5" fill="rgba(240,122,32,0.3)"/>
  <text x="70" y="58" font-family="Arial Black,sans-serif" font-size="9" fill="#F07A20" text-anchor="middle" font-weight="900">BOBS</text>
  <text x="70" y="68" font-family="Arial Black,sans-serif" font-size="7" fill="rgba(240,122,32,0.6)" text-anchor="middle">PLUMBING</text>
</svg>
          <div class="merch-label">Your Logo Here</div>
        </div>
        <div class="merch-info">
          <h4>Classic Dad Hat</h4>
          <p>100% cotton · Adjustable · Low-profile</p>
          <div class="merch-price">$24.99</div>
          <div class="merch-cta" onclick="openModal()">Order with Your Logo →</div>
        </div>
      </div>
      <div class="merch-card">
        <div class="merch-img hoodie">
          <svg width="130" height="130" viewBox="0 0 130 130" fill="none">
  <path d="M15 35 L35 20 L50 35 Q60 28 65 30 Q70 28 80 35 L95 20 L115 35 L108 60 L90 52 L90 115 L40 115 L40 52 L22 60 Z" fill="#12121f" stroke="rgba(240,122,32,0.4)" stroke-width="1.5"/>
  <path d="M50 35 Q65 42 80 35" fill="none" stroke="rgba(240,122,32,0.3)" stroke-width="1.5"/>
  <text x="65" y="85" font-family="Arial Black,sans-serif" font-size="8" fill="#F07A20" text-anchor="middle" font-weight="900">BOBS</text>
  <text x="65" y="96" font-family="Arial Black,sans-serif" font-size="6" fill="rgba(240,122,32,0.6)" text-anchor="middle">PLUMBING</text>
</svg>
          <div class="merch-label">Your Logo Here</div>
        </div>
        <div class="merch-info">
          <h4>Heavy Blend Hoodie</h4>
          <p>Gildan 18500 · 50/50 blend · Unisex</p>
          <div class="merch-price">$54.99</div>
          <div class="merch-cta" onclick="openModal()">Order with Your Logo →</div>
        </div>
      </div>
    </div>

    <div class="merch-banner">
      <div>
        <h4>Brand Starter Kit</h4>
        <p>Logo design + 5 shirts + 3 hats — everything you need to show up professionally. No minimums, no inventory, shipped straight to your door.</p>
        <div style="margin-top:14px"><a href="#" onclick="openModal()" style="background:var(--acc);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:13px;padding:11px 24px;border-radius:8px;display:inline-block">Get the Starter Kit →</a></div>
      </div>
      <div style="text-align:right">
        <div class="price-tag">$249</div>
        <div style="font-size:12px;color:var(--t3)">one-time · includes logo</div>
      </div>
    </div>
  </div>
</div>


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


<!-- Visit tracking pixel -->
<script>
(function() {
  const slug = window.location.pathname.replace('/p/','').split('?')[0];
  let startTime = Date.now();
  function track(extra) {
    fetch('/api/track', {
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ slug, timeOnPage: Math.round((Date.now()-startTime)/1000), ...extra })
    }).catch(()=>{});
  }
  // Track on load
  track({ action: 'view' });
  // Track on exit
  window.addEventListener('beforeunload', () => track({ action: 'exit' }));
})();
</script>

<!-- Payment Modal -->
<div class="modal-overlay" id="pay-modal" onclick="if(event.target===this)closeModal()">
  <div class="modal">
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="price-tag">$99</div>
    <div class="price-note">one-time · no subscription · yours forever</div>
    <h3>Claim Your Website</h3>
    <p class="sub">Fill in your details and pay — your site goes live within 48 hours.</p>

    <div id="pay-form-wrap">
      <div class="fi-row">
        <div class="field"><label>Your Name</label><input id="pay-name" type="text" placeholder="Bob Johnson"></div>
        <div class="field"><label>Email</label><input id="pay-email" type="email" placeholder="bob@example.com"></div>
      </div>

      <div class="pay-tabs">
        <div class="pay-tab active" onclick="switchPayTab('card',this)">💳 Card</div>
        <div class="pay-tab" onclick="switchPayTab('paypal',this)">🅿 PayPal</div>
        <div class="pay-tab" onclick="switchPayTab('applepay',this)">⬛ Apple / Google Pay</div>
      </div>

      <div class="pay-panel active" id="panel-card">
        <div id="card-element"></div>
        <div id="pay-error"></div>
        <button class="pay-btn stripe-btn" onclick="payWithCard()">Pay $99 with Card →</button>
      </div>

      <div class="pay-panel" id="panel-paypal">
        <div id="paypal-button-container"></div>
      </div>

      <div class="pay-panel" id="panel-applepay">
        <div id="card-element-pr"></div>
        <p style="font-size:12px;color:var(--t3);margin-top:8px;text-align:center">Use Apple Pay, Google Pay, or Link</p>
      </div>
    </div>

    <div id="pay-success">
      <h3>🎉 Payment Confirmed!</h3>
      <p style="color:var(--t2);font-size:15px;line-height:1.7">Check your email for confirmation. Your site will be live within 48 hours. We'll reach out if we need anything.</p>
    </div>
  </div>
</div>

<script>
// ── Grab biz data from URL ──────────────────────────────────
const urlParams = new URLSearchParams(window.location.search);
const bizData = (() => { try { return JSON.parse(atob(urlParams.get('v')||'')); } catch(e){ return {}; }})();
const bizName = bizData.name || document.title.replace(' — New Website Preview','');
const previewUrl = window.location.href;

// ── Modal open/close ────────────────────────────────────────
function openModal() {
  document.getElementById('pay-modal').classList.add('open');
  initStripe();
}
function closeModal() {
  document.getElementById('pay-modal').classList.remove('open');
}

// Wire all claim buttons to modal
document.querySelectorAll('a[href*="claim"]').forEach(a => {
  a.href = '#';
  a.onclick = (e) => { e.preventDefault(); openModal(); };
});

// ── Stripe ──────────────────────────────────────────────────
let stripe, cardEl, prEl;
function initStripe() {
  if (stripe) return;
  const pk = '${process.env.STRIPE_PUBLIC_KEY || 'pk_test_placeholder'}';
  if (!pk || pk.includes('placeholder')) return;
  stripe = Stripe(pk);
  const elements = stripe.elements({ appearance: { theme: 'night', variables: { colorPrimary: '#F07A20' }}});
  cardEl = elements.create('card');
  cardEl.mount('#card-element');

  // Payment Request (Apple/Google Pay)
  const pr = stripe.paymentRequest({ country:'US', currency:'usd', total:{ label:'e-Falconry Website', amount:9900 }, requestPayerName:true, requestPayerEmail:true });
  const prElems = stripe.elements();
  prEl = prElems.create('paymentRequestButton', { paymentRequest: pr });
  pr.canMakePayment().then(result => { if(result) prEl.mount('#card-element-pr'); });
}

async function payWithCard() {
  const name = document.getElementById('pay-name').value.trim();
  const email = document.getElementById('pay-email').value.trim();
  if (!name||!email) { showError('Please fill in your name and email.'); return; }

  const btn = document.querySelector('.stripe-btn');
  btn.textContent = 'Processing...';
  btn.disabled = true;

  try {
    const intentResp = await fetch('/api/checkout', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ action:'stripe_intent', bizName, email, plan:'site' })
    });
    const { clientSecret, error } = await intentResp.json();
    if (error) throw new Error(error);

    const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: cardEl, billing_details: { name, email }}
    });
    if (confirmError) throw new Error(confirmError.message);

    await confirmPayment(name, email, 'Stripe Card');
  } catch(e) {
    showError(e.message);
    btn.textContent = 'Pay $99 with Card →';
    btn.disabled = false;
  }
}

// ── PayPal ──────────────────────────────────────────────────
function switchPayTab(tab, el) {
  document.querySelectorAll('.pay-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.pay-panel').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('panel-'+tab).classList.add('active');

  if (tab==='paypal') initPayPal();
}

let ppInited = false;
async function initPayPal() {
  if (ppInited) return;
  ppInited = true;
  if (!window.paypal) return;

  const name = document.getElementById('pay-name').value.trim();
  const email = document.getElementById('pay-email').value.trim();

  paypal.Buttons({
    createOrder: async () => {
      const resp = await fetch('/api/checkout', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ action:'paypal_order', bizName, email, plan:'site' })
      });
      const { orderId, error } = await resp.json();
      if (error) throw new Error(error);
      return orderId;
    },
    onApprove: async (data) => {
      await confirmPayment(name||bizName, email||'', 'PayPal');
    },
    onError: (err) => showError('PayPal error — please try card payment.'),
    style: { layout:'vertical', color:'gold', shape:'rect', label:'pay' }
  }).render('#paypal-button-container');
}

async function confirmPayment(name, email, method) {
  await fetch('/api/checkout', {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ action:'confirm', bizName, email, plan:'site', previewUrl, paymentMethod: method })
  });
  document.getElementById('pay-form-wrap').style.display='none';
  document.getElementById('pay-success').style.display='block';
}

function showError(msg) {
  const el = document.getElementById('pay-error');
  el.textContent = msg;
  el.style.display = 'block';
}
</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  return res.status(200).send(html);
}

function errorPage(msg) {
  return `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:40px;background:#07090C;color:#EDE8DC;text-align:center"><h2 style="color:#F07A20">Preview Unavailable</h2><p style="color:#8892A8;margin-top:12px">${msg}</p><br><a href="https://efalconry.com" style="color:#0EA5E9">← efalconry.com</a>
<!-- Visit tracking pixel -->
<script>
(function() {
  const slug = window.location.pathname.replace('/p/','').split('?')[0];
  let startTime = Date.now();
  function track(extra) {
    fetch('/api/track', {
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ slug, timeOnPage: Math.round((Date.now()-startTime)/1000), ...extra })
    }).catch(()=>{});
  }
  // Track on load
  track({ action: 'view' });
  // Track on exit
  window.addEventListener('beforeunload', () => track({ action: 'exit' }));
})();
</script>

<!-- Payment Modal -->
<div class="modal-overlay" id="pay-modal" onclick="if(event.target===this)closeModal()">
  <div class="modal">
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="price-tag">$99</div>
    <div class="price-note">one-time · no subscription · yours forever</div>
    <h3>Claim Your Website</h3>
    <p class="sub">Fill in your details and pay — your site goes live within 48 hours.</p>

    <div id="pay-form-wrap">
      <div class="fi-row">
        <div class="field"><label>Your Name</label><input id="pay-name" type="text" placeholder="Bob Johnson"></div>
        <div class="field"><label>Email</label><input id="pay-email" type="email" placeholder="bob@example.com"></div>
      </div>

      <div class="pay-tabs">
        <div class="pay-tab active" onclick="switchPayTab('card',this)">💳 Card</div>
        <div class="pay-tab" onclick="switchPayTab('paypal',this)">🅿 PayPal</div>
        <div class="pay-tab" onclick="switchPayTab('applepay',this)">⬛ Apple / Google Pay</div>
      </div>

      <div class="pay-panel active" id="panel-card">
        <div id="card-element"></div>
        <div id="pay-error"></div>
        <button class="pay-btn stripe-btn" onclick="payWithCard()">Pay $99 with Card →</button>
      </div>

      <div class="pay-panel" id="panel-paypal">
        <div id="paypal-button-container"></div>
      </div>

      <div class="pay-panel" id="panel-applepay">
        <div id="card-element-pr"></div>
        <p style="font-size:12px;color:var(--t3);margin-top:8px;text-align:center">Use Apple Pay, Google Pay, or Link</p>
      </div>
    </div>

    <div id="pay-success">
      <h3>🎉 Payment Confirmed!</h3>
      <p style="color:var(--t2);font-size:15px;line-height:1.7">Check your email for confirmation. Your site will be live within 48 hours. We'll reach out if we need anything.</p>
    </div>
  </div>
</div>

<script>
// ── Grab biz data from URL ──────────────────────────────────
const urlParams = new URLSearchParams(window.location.search);
const bizData = (() => { try { return JSON.parse(atob(urlParams.get('v')||'')); } catch(e){ return {}; }})();
const bizName = bizData.name || document.title.replace(' — New Website Preview','');
const previewUrl = window.location.href;

// ── Modal open/close ────────────────────────────────────────
function openModal() {
  document.getElementById('pay-modal').classList.add('open');
  initStripe();
}
function closeModal() {
  document.getElementById('pay-modal').classList.remove('open');
}

// Wire all claim buttons to modal
document.querySelectorAll('a[href*="claim"]').forEach(a => {
  a.href = '#';
  a.onclick = (e) => { e.preventDefault(); openModal(); };
});

// ── Stripe ──────────────────────────────────────────────────
let stripe, cardEl, prEl;
function initStripe() {
  if (stripe) return;
  const pk = '${process.env.STRIPE_PUBLIC_KEY || 'pk_test_placeholder'}';
  if (!pk || pk.includes('placeholder')) return;
  stripe = Stripe(pk);
  const elements = stripe.elements({ appearance: { theme: 'night', variables: { colorPrimary: '#F07A20' }}});
  cardEl = elements.create('card');
  cardEl.mount('#card-element');

  // Payment Request (Apple/Google Pay)
  const pr = stripe.paymentRequest({ country:'US', currency:'usd', total:{ label:'e-Falconry Website', amount:9900 }, requestPayerName:true, requestPayerEmail:true });
  const prElems = stripe.elements();
  prEl = prElems.create('paymentRequestButton', { paymentRequest: pr });
  pr.canMakePayment().then(result => { if(result) prEl.mount('#card-element-pr'); });
}

async function payWithCard() {
  const name = document.getElementById('pay-name').value.trim();
  const email = document.getElementById('pay-email').value.trim();
  if (!name||!email) { showError('Please fill in your name and email.'); return; }

  const btn = document.querySelector('.stripe-btn');
  btn.textContent = 'Processing...';
  btn.disabled = true;

  try {
    const intentResp = await fetch('/api/checkout', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ action:'stripe_intent', bizName, email, plan:'site' })
    });
    const { clientSecret, error } = await intentResp.json();
    if (error) throw new Error(error);

    const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: cardEl, billing_details: { name, email }}
    });
    if (confirmError) throw new Error(confirmError.message);

    await confirmPayment(name, email, 'Stripe Card');
  } catch(e) {
    showError(e.message);
    btn.textContent = 'Pay $99 with Card →';
    btn.disabled = false;
  }
}

// ── PayPal ──────────────────────────────────────────────────
function switchPayTab(tab, el) {
  document.querySelectorAll('.pay-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.pay-panel').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('panel-'+tab).classList.add('active');

  if (tab==='paypal') initPayPal();
}

let ppInited = false;
async function initPayPal() {
  if (ppInited) return;
  ppInited = true;
  if (!window.paypal) return;

  const name = document.getElementById('pay-name').value.trim();
  const email = document.getElementById('pay-email').value.trim();

  paypal.Buttons({
    createOrder: async () => {
      const resp = await fetch('/api/checkout', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ action:'paypal_order', bizName, email, plan:'site' })
      });
      const { orderId, error } = await resp.json();
      if (error) throw new Error(error);
      return orderId;
    },
    onApprove: async (data) => {
      await confirmPayment(name||bizName, email||'', 'PayPal');
    },
    onError: (err) => showError('PayPal error — please try card payment.'),
    style: { layout:'vertical', color:'gold', shape:'rect', label:'pay' }
  }).render('#paypal-button-container');
}

async function confirmPayment(name, email, method) {
  await fetch('/api/checkout', {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ action:'confirm', bizName, email, plan:'site', previewUrl, paymentMethod: method })
  });
  document.getElementById('pay-form-wrap').style.display='none';
  document.getElementById('pay-success').style.display='block';
}

function showError(msg) {
  const el = document.getElementById('pay-error');
  el.textContent = msg;
  el.style.display = 'block';
}
</script>
</body></html>`;
}
