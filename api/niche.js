// e-Falconry Niche Industry Pages
// Routes: /concrete, /landscaping, /hvac, /roofing, /electrician, /plumber
// Each page is tailored to that specific trade with real examples

const NICHES = {
  concrete: {
    title: 'Concrete Contractors',
    headline: ['For Concrete', 'Contractors.'],
    color: '#6B7280',
    accent: '#F59E0B',
    accentGrad: 'linear-gradient(90deg,#F59E0B,#FCD34D)',
    tagline: 'Win more patio, driveway, and foundation jobs with AI tools built for concrete work.',
    hero: 'Every concrete contractor in your market is quoting the same way they did 20 years ago. Handwritten estimates, blurry phone photos, and "I\'ll get back to you." You can close jobs same-day — with professional AI-generated quotes, photorealistic patio renderings, and a website that actually shows up on Google.',
    mockupBefore: {
      label: 'Backyard today',
      desc: 'Overgrown grass, no patio, wasted space',
      color: '#3a3520',
    },
    mockupAfter: {
      label: 'After your proposal',
      desc: 'Stamped concrete patio with fire pit area — shown to client before you pour a single yard',
      color: '#2a3a2a',
    },
    mockupPrompt: 'Photorealistic photo of a beautifully finished stamped concrete patio in a suburban backyard. Large 30x20 foot brushed concrete pad with decorative border pattern, outdoor furniture, string lights overhead, surrounded by well-maintained landscaping. Professional photography, golden hour lighting.',
    quoteExample: {
      projectTitle: 'Stamped Concrete Patio — Rodriguez Residence',
      measurements: [
        { label: 'Total Area', value: '620', unit: 'sq ft' },
        { label: 'Thickness', value: '4', unit: 'inches' },
        { label: 'Concrete Needed', value: '7.6', unit: 'yards' },
      ],
      materials: [
        { item: 'Ready-mix concrete (4000 PSI)', quantity: '8', unit: 'yards', unitCost: '165' },
        { item: 'Stamping mats (Ashlar pattern)', quantity: '1', unit: 'set', unitCost: '0' },
        { item: 'Color hardener (Terra Cotta)', quantity: '12', unit: 'bags', unitCost: '45' },
        { item: 'Sealer (solvent-based, 2 coats)', quantity: '6', unit: 'gallons', unitCost: '38' },
        { item: 'Rebar #4 (16" grid)', quantity: '400', unit: 'lf', unitCost: '0.85' },
        { item: 'Expansion joint material', quantity: '80', unit: 'lf', unitCost: '1.20' },
      ],
      laborItems: [
        { description: 'Form setting and prep', hours: '8', rate: '75' },
        { description: 'Pour and finish', hours: '12', rate: '85' },
        { description: 'Stamping and coloring', hours: '8', rate: '95' },
        { description: 'Sealing (2 visits)', hours: '4', rate: '75' },
      ],
    },
    services: [
      { icon: '📐', title: 'AI Quote Generator', desc: 'Input measurements and materials — get a professional branded PDF quote with scope of work, itemized costs, and signature lines. Close jobs on the spot.' },
      { icon: '🎨', title: 'Project Mockups', desc: 'Show clients a photorealistic render of their finished patio, driveway, or pool deck before you pour. Eliminates hesitation. Closes bigger jobs.' },
      { icon: '🌐', title: '$99 Website', desc: 'A professional concrete contractor website that shows up on Google. Mobile-optimized, fast, with your real projects and reviews.' },
      { icon: '⭐', title: 'Review Automation', desc: 'Every completed job triggers an automatic review request. More 5-star reviews = more calls from Google Maps.' },
      { icon: '🤖', title: 'AI Chatbot', desc: 'Customers get instant answers on your site 24/7 — what you do, your service area, rough pricing, how to get a quote.' },
      { icon: '📊', title: 'Google Business', desc: 'We optimize your Google Maps listing so you show up when people search "concrete contractor near me."' },
    ],
    stats: ['$28K', 'Average project closed using AI mockup', '3 hrs', 'To generate a professional quote package', '47%', 'More Google calls after GBP optimization'],
    cta: 'Get Your Free Concrete Contractor Website',
  },

  landscaping: {
    title: 'Landscaping Companies',
    headline: ['For Landscapers', '& Lawn Pros.'],
    color: '#065F46',
    accent: '#10B981',
    accentGrad: 'linear-gradient(90deg,#10B981,#34D399)',
    tagline: 'Win more landscape design, lawn care, and hardscape jobs with AI.',
    hero: 'Landscaping is a visual business — and most landscaping websites look nothing like the work you actually do. Your best jobs deserve to be shown off. AI-powered mockups let you show customers their future yard before you lift a shovel. Professional quotes close jobs the same day.',
    services: [
      { icon: '🌿', title: 'AI Project Mockups', desc: 'Show clients a photorealistic render of their transformed yard — new lawn, garden beds, hardscape — before any work begins.' },
      { icon: '📐', title: 'Quote Generator', desc: 'Professional branded quotes with measurements, material lists, plant specifications, and maintenance schedules.' },
      { icon: '🌐', title: '$99 Website', desc: 'A gorgeous landscaping website with a photo gallery of your real work, service areas, and Google Maps integration.' },
      { icon: '📅', title: 'Smart Booking', desc: 'Customers book seasonal cleanups, lawn care, and consultations directly from your website.' },
      { icon: '⭐', title: 'Review Automation', desc: 'After every job, an automated follow-up requests a Google review. Your rating climbs automatically.' },
      { icon: '🤖', title: 'AI Chatbot', desc: '24/7 answers about your services, service area, pricing ranges, and how to get a quote.' },
    ],
    stats: ['4.8★', 'Average Google rating after review automation', '$149', 'Per project for AI yard renderings', '2x', 'More website leads after redesign'],
    cta: 'Get Your Free Landscaping Website',
  },

  hvac: {
    title: 'HVAC Contractors',
    headline: ['For HVAC', 'Contractors.'],
    color: '#0C4A6E',
    accent: '#0EA5E9',
    accentGrad: 'linear-gradient(90deg,#0EA5E9,#38BDF8)',
    tagline: 'Book more installs, service calls, and maintenance contracts with AI.',
    hero: 'HVAC customers decide in under 3 minutes. If your website is slow, looks outdated, or doesn\'t show up on Google — they call your competitor. AI tools give you a website that converts, an AI assistant that answers questions at midnight, and automated systems that follow up with every lead.',
    services: [
      { icon: '❄️', title: '$99 Website', desc: 'A modern HVAC website that ranks locally, loads fast, and converts visitors into calls.' },
      { icon: '🤖', title: 'AI Chatbot', desc: 'Answers questions about your services, pricing ranges, and emergency availability 24/7.' },
      { icon: '📐', title: 'Quote Generator', desc: 'Professional HVAC quotes with system specs, labor, warranty terms, and financing options.' },
      { icon: '📅', title: 'Maintenance Contracts', desc: 'Automate annual maintenance reminders and contract renewals via SMS and email.' },
      { icon: '⭐', title: 'Review Automation', desc: 'Request Google reviews after every service call. More reviews = more Google Maps calls.' },
      { icon: '📊', title: 'Google Business', desc: 'Dominate "HVAC near me" searches with an optimized Google Business Profile.' },
    ],
    stats: ['24/7', 'AI answers customer questions', '58%', 'Of HVAC searches happen on mobile', '$0', 'Extra cost to you for AI features'],
    cta: 'Get Your Free HVAC Website',
  },
};

function renderNichePage(niche, data) {
  const { accent, accentGrad } = data;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>e-Falconry ${data.title}</title>
<meta name="description" content="${data.tagline}">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
:root{--acc:${accent};--grad:${accentGrad};}
body{background:#07090C;color:#EDE8DC;font-family:'DM Sans',sans-serif;}
/* Nav */
nav{background:rgba(7,9,12,.97);border-bottom:1px solid rgba(255,255,255,.07);padding:0 5%;height:66px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;}
.n-brand{font-family:'Bebas Neue',cursive;font-size:20px;letter-spacing:.08em;}
.n-brand a{color:#EDE8DC;text-decoration:none;}
.n-brand span{color:#F07A20;}
.n-cta{background:var(--grad);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:12px;padding:10px 22px;border-radius:8px;border:none;cursor:pointer;white-space:nowrap;}
/* Hero */
.hero{min-height:85vh;display:flex;align-items:center;position:relative;overflow:hidden;padding:80px 5%;}
.hero-bg{position:absolute;inset:0;background:linear-gradient(160deg,#07090C 0%,#0F1219 60%,#07090C 100%);}
.hero-glow{position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,${accent}18 0%,transparent 70%);top:-100px;right:-100px;}
.hero-inner{position:relative;z-index:2;max-width:960px;width:100%;}
.pill{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:99px;padding:6px 16px;font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#C4CBDA;margin-bottom:24px;}
.pill span{color:var(--acc);}
h1{font-family:'Bebas Neue',cursive;font-size:clamp(60px,11vw,100px);line-height:.92;margin-bottom:24px;}
h1 em{font-style:normal;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-sub{font-size:17px;color:#C4CBDA;line-height:1.8;max-width:600px;margin-bottom:40px;font-weight:300;}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap;}
.btn-p{background:var(--grad);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:15px;padding:15px 32px;border-radius:10px;border:none;cursor:pointer;}
.btn-s{background:transparent;color:#C4CBDA;font-family:'Syne',sans-serif;font-weight:700;font-size:15px;padding:15px 32px;border-radius:10px;border:1px solid rgba(255,255,255,.12);cursor:pointer;}
/* Stats */
.stats-row{display:flex;gap:0;border-top:1px solid rgba(255,255,255,.07);border-bottom:1px solid rgba(255,255,255,.07);padding:28px 5%;background:rgba(0,0,0,.2);}
.stat{flex:1;text-align:center;border-right:1px solid rgba(255,255,255,.07);padding:0 20px;}
.stat:last-child{border-right:none;}
.stat-n{font-family:'Bebas Neue',cursive;font-size:42px;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;}
.stat-l{font-size:12px;color:#8892A8;margin-top:4px;line-height:1.4;}
/* Section */
.section{padding:88px 5%;max-width:1100px;margin:0 auto;}
.eye{font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:.16em;color:var(--acc);text-transform:uppercase;margin-bottom:10px;display:flex;align-items:center;gap:8px;}
.eye::before{content:'';width:24px;height:2px;background:var(--grad);border-radius:2px;}
h2{font-family:'Bebas Neue',cursive;font-size:clamp(40px,7vw,64px);line-height:.93;margin-bottom:16px;}
.section-sub{font-size:16px;color:#C4CBDA;max-width:560px;line-height:1.75;margin-bottom:48px;font-weight:300;}
/* Mockup demo */
.mockup-demo{background:#0F1219;border:1px solid rgba(255,255,255,.07);border-radius:20px;overflow:hidden;margin-bottom:48px;}
.mockup-header{padding:20px 28px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;justify-content:space-between;}
.mockup-title{font-family:'Syne',sans-serif;font-size:14px;font-weight:700;}
.mockup-badge{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:99px;padding:4px 12px;font-family:'Syne',sans-serif;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8892A8;}
.mockup-panels{display:grid;grid-template-columns:1fr 1fr;}
.panel{position:relative;}
.panel-label{position:absolute;top:12px;left:12px;z-index:2;font-family:'Syne',sans-serif;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:5px 12px;border-radius:99px;}
.panel-label.before{background:rgba(0,0,0,.7);color:#C4CBDA;}
.panel-label.after{background:var(--acc);color:#fff;}
.panel-img{height:280px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
.panel-desc{padding:14px 18px;font-size:12px;color:#8892A8;border-top:1px solid rgba(255,255,255,.06);}
/* Before SVG */
.before-svg{width:100%;height:100%;background:linear-gradient(160deg,#1a1a0a,#2a2a15);display:flex;align-items:center;justify-content:center;}
/* After SVG */
.after-svg{width:100%;height:100%;background:linear-gradient(160deg,#0a1a0a,#0a2a0a);display:flex;align-items:center;justify-content:center;position:relative;}
/* Quote demo */
.quote-demo{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 24px 64px rgba(0,0,0,.5);}
.qd-header{background:#1a1a1a;padding:20px 24px;display:flex;justify-content:space-between;align-items:center;}
.qd-brand{color:#fff;font-weight:800;font-size:16px;}
.qd-number{color:#888;font-size:12px;}
.qd-body{padding:20px 24px;color:#1a1a1a;}
.qd-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:13px;}
.qd-row:last-child{border-bottom:none;font-weight:800;font-size:15px;}
.qd-label{color:#666;}
.qd-section-label{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#999;margin:16px 0 8px;}
/* Services grid */
.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.svc-card{background:#0F1219;border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:26px;position:relative;overflow:hidden;transition:transform .2s,border-color .2s;}
.svc-card:hover{transform:translateY(-4px);border-color:rgba(255,255,255,.15);}
.svc-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--grad);border-radius:2px 0 0 2px;}
.svc-icon{font-size:28px;margin-bottom:14px;display:block;}
.svc-name{font-family:'Syne',sans-serif;font-size:15px;font-weight:700;margin-bottom:6px;}
.svc-desc{font-size:13px;color:#8892A8;line-height:1.65;}
/* CTA */
.cta-block{background:linear-gradient(135deg,#0F1219,#161B26);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:60px;text-align:center;margin:0 5% 80px;}
.cta-block h2{font-size:clamp(40px,7vw,60px);margin-bottom:16px;}
.cta-block p{font-size:16px;color:#C4CBDA;max-width:500px;margin:0 auto 32px;line-height:1.7;}
/* Footer */
footer{background:#060E18;border-top:1px solid rgba(255,255,255,.06);padding:28px 5%;text-align:center;}
footer p{font-size:12px;color:#8892A8;}
footer a{color:#F07A20;text-decoration:none;}
@media(max-width:768px){.svc-grid{grid-template-columns:1fr 1fr;}.mockup-panels{grid-template-columns:1fr;}.stats-row{flex-wrap:wrap;}.stat{min-width:50%;border-right:none;border-bottom:1px solid rgba(255,255,255,.07);padding:16px;}.stat:last-child{border-bottom:none;}.cta-block{padding:40px 24px;}}
@media(max-width:480px){.svc-grid{grid-template-columns:1fr;}}
</style>
</head>
<body>

<nav>
  <div class="n-brand"><a href="/"><span>e-</span>Falconry</a></div>
  <button class="n-cta" onclick="window.location.href='/#score'">Get Free Website Audit →</button>
</nav>

<!-- Hero -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-glow"></div>
  <div class="hero-inner">
    <div class="pill"><span>AI-First Agency</span> · Built for ${data.title}</div>
    <h1>${data.headline[0]}<br><em>${data.headline[1]}</em></h1>
    <p class="hero-sub">${data.hero}</p>
    <div class="hero-cta">
      <button class="btn-p" onclick="window.location.href='/#score'">Get Your Free Website Audit</button>
      <button class="btn-s" onclick="document.getElementById('services').scrollIntoView({behavior:'smooth'})">See What We Offer ↓</button>
    </div>
  </div>
</section>

<!-- Stats -->
<div class="stats-row">
  ${data.stats.map((s, i) => i % 2 === 0 ? `<div class="stat"><div class="stat-n">${s}</div><div class="stat-l">${data.stats[i+1] || ''}</div></div>` : '').filter(Boolean).join('')}
</div>

<!-- Mockup Demo (concrete/landscaping only) -->
${data.mockupBefore ? `
<div style="padding:88px 5% 0">
  <div style="max-width:1100px;margin:0 auto">
    <div class="eye">AI Project Mockups</div>
    <h2>Show Clients the<br><span style="background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Finished Project</span></h2>
    <p class="section-sub">Before you move a single yard of dirt or pour a single yard of concrete — show your customer exactly what they're getting. AI-rendered mockups close jobs that would otherwise stall on "I need to think about it."</p>

    <div class="mockup-demo">
      <div class="mockup-header">
        <div class="mockup-title">AI Project Rendering — ${data.title.split(' ')[0]} Project</div>
        <div class="mockup-badge">Powered by e-Falconry AI</div>
      </div>
      <div class="mockup-panels">
        <div class="panel">
          <div class="panel-label before">Before</div>
          <div class="panel-img">
            <div class="before-svg">
              <svg width="280" height="180" viewBox="0 0 280 180" fill="none">
                <rect width="280" height="180" fill="#1a1a0a"/>
                <!-- Rough ground -->
                <path d="M0 120 Q70 110 140 115 Q210 120 280 112 L280 180 L0 180 Z" fill="#2a2a12"/>
                <!-- Patchy grass -->
                <rect x="20" y="100" width="8" height="15" fill="#3a4a1a" rx="2"/>
                <rect x="35" y="95" width="6" height="20" fill="#2a3a12" rx="2"/>
                <rect x="50" y="105" width="10" height="12" fill="#3a4a1a" rx="2"/>
                <rect x="80" y="98" width="7" height="18" fill="#2a3a12" rx="2"/>
                <rect x="120" y="102" width="9" height="14" fill="#3a4a1a" rx="2"/>
                <rect x="160" y="96" width="8" height="20" fill="#2a3a12" rx="2"/>
                <rect x="200" y="105" width="11" height="11" fill="#3a4a1a" rx="2"/>
                <rect x="240" y="100" width="7" height="16" fill="#2a3a12" rx="2"/>
                <!-- House wall -->
                <rect x="0" y="0" width="280" height="85" fill="#2a2520"/>
                <rect x="40" y="20" width="60" height="45" fill="#1a1a15" stroke="#3a3530" stroke-width="1"/>
                <rect x="170" y="25" width="45" height="40" fill="#1a1a15" stroke="#3a3530" stroke-width="1"/>
                <text x="140" y="55" font-family="system-ui" font-size="12" fill="#555" text-anchor="middle">Existing backyard</text>
                <text x="140" y="145" font-family="system-ui" font-size="11" fill="#555" text-anchor="middle">No patio · Patchy grass · Wasted space</text>
              </svg>
            </div>
          </div>
          <div class="panel-desc">${data.mockupBefore.desc}</div>
        </div>
        <div class="panel">
          <div class="panel-label after">AI Mockup</div>
          <div class="panel-img">
            <div class="after-svg">
              <svg width="280" height="180" viewBox="0 0 280 180" fill="none">
                <rect width="280" height="180" fill="#0a1a0a"/>
                <!-- Sky -->
                <rect width="280" height="70" fill="#0a0f1a"/>
                <!-- Lush lawn -->
                <rect x="0" y="70" width="280" height="110" fill="#0d2a0d"/>
                <!-- Concrete patio -->
                <path d="M30 105 L250 105 L260 175 L20 175 Z" fill="#4a4a45" stroke="#5a5a55" stroke-width="1"/>
                <!-- Patio grid lines -->
                <line x1="30" y1="120" x2="248" y2="120" stroke="#5a5a55" stroke-width="0.5" opacity="0.6"/>
                <line x1="30" y1="135" x2="252" y2="135" stroke="#5a5a55" stroke-width="0.5" opacity="0.6"/>
                <line x1="30" y1="150" x2="255" y2="150" stroke="#5a5a55" stroke-width="0.5" opacity="0.6"/>
                <line x1="30" y1="165" x2="258" y2="165" stroke="#5a5a55" stroke-width="0.5" opacity="0.6"/>
                <!-- Furniture -->
                <rect x="95" y="115" width="90" height="45" fill="#3a2a1a" rx="4"/>
                <rect x="88" y="112" width="104" height="8" fill="#4a3a2a" rx="3"/>
                <rect x="85" y="120" width="12" height="38" fill="#3a2a1a" rx="2"/>
                <rect x="183" y="120" width="12" height="38" fill="#3a2a1a" rx="2"/>
                <!-- Fire pit -->
                <circle cx="200" cy="145" r="15" fill="#2a1a0a" stroke="#8B4513" stroke-width="2"/>
                <circle cx="200" cy="145" r="8" fill="#cc4400" opacity="0.7"/>
                <!-- Plants -->
                <circle cx="15" cy="90" r="18" fill="#1a4a1a" opacity="0.8"/>
                <circle cx="265" cy="88" r="20" fill="#1a4a1a" opacity="0.8"/>
                <circle cx="15" cy="90" r="12" fill="#2a6a2a" opacity="0.6"/>
                <!-- String lights -->
                <path d="M50 75 Q140 68 230 75" stroke="#FCD34D" stroke-width="1" fill="none"/>
                <circle cx="80" cy="73" r="2" fill="#FCD34D"/>
                <circle cx="110" cy="71" r="2" fill="#FCD34D"/>
                <circle cx="140" cy="70" r="2" fill="#FCD34D"/>
                <circle cx="170" cy="71" r="2" fill="#FCD34D"/>
                <circle cx="200" cy="73" r="2" fill="#FCD34D"/>
                <text x="140" y="52" font-family="system-ui" font-size="10" fill="${accent}" text-anchor="middle" font-weight="bold">AI MOCKUP</text>
                <text x="140" y="95" font-family="system-ui" font-size="10" fill="#4a8a4a" text-anchor="middle">Stamped concrete · Fire pit · String lights</text>
              </svg>
            </div>
          </div>
          <div class="panel-desc">${data.mockupAfter.desc}</div>
        </div>
      </div>
    </div>

    <!-- Quote Demo -->
    <div style="margin-top:48px">
      <div class="eye">AI Quote Generator</div>
      <h2>Professional Quotes<br><span style="background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent">That Close Jobs</span></h2>
      <p class="section-sub">Input measurements, materials, and labor — we generate a branded PDF proposal with scope of work, itemized costs, and signature lines. Send it from your phone before you leave the driveway.</p>

      ${data.quoteExample ? `
      <div class="quote-demo">
        <div class="qd-header">
          <div class="qd-brand">${data.quoteExample.projectTitle.split('—')[0].trim()}</div>
          <div class="qd-number">Quote Q-${Math.floor(Math.random()*900000)+100000}</div>
        </div>
        <div class="qd-body" style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
          <div>
            <div class="qd-section-label">Measurements</div>
            ${data.quoteExample.measurements.map(m => `
              <div class="qd-row">
                <span class="qd-label">${m.label}</span>
                <span style="font-weight:600">${m.value} ${m.unit}</span>
              </div>
            `).join('')}
            <div class="qd-section-label">Materials</div>
            ${data.quoteExample.materials.slice(0,3).map(m => `
              <div class="qd-row">
                <span class="qd-label">${m.item}</span>
                <span style="font-weight:600">$${(parseFloat(m.quantity)*parseFloat(m.unitCost)).toLocaleString()}</span>
              </div>
            `).join('')}
          </div>
          <div>
            <div class="qd-section-label">Labor</div>
            ${data.quoteExample.laborItems.map(l => `
              <div class="qd-row">
                <span class="qd-label">${l.description}</span>
                <span style="font-weight:600">$${(parseFloat(l.hours)*parseFloat(l.rate)).toLocaleString()}</span>
              </div>
            `).join('')}
            <div class="qd-section-label">Totals</div>
            <div class="qd-row"><span class="qd-label">Subtotal</span><span>$${
              (data.quoteExample.materials.reduce((s,m)=>s+parseFloat(m.quantity)*parseFloat(m.unitCost),0) +
               data.quoteExample.laborItems.reduce((s,l)=>s+parseFloat(l.hours)*parseFloat(l.rate),0)).toLocaleString('en-US',{minimumFractionDigits:2})
            }</span></div>
            <div class="qd-row" style="font-size:16px"><span><strong>Total</strong></span><strong style="color:${accent}">$${
              ((data.quoteExample.materials.reduce((s,m)=>s+parseFloat(m.quantity)*parseFloat(m.unitCost),0) +
               data.quoteExample.laborItems.reduce((s,l)=>s+parseFloat(l.hours)*parseFloat(l.rate),0)) * 1.095).toLocaleString('en-US',{minimumFractionDigits:2})
            }</strong></div>
          </div>
        </div>
      </div>` : ''}
    </div>
  </div>
</div>` : ''}

<!-- Services -->
<section class="section" id="services">
  <div class="eye">Everything We Offer</div>
  <h2>Built for<br><em style="font-style:normal;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent">${data.title}</em></h2>
  <p class="section-sub">Every tool designed specifically for how ${niche} contractors win, quote, and close jobs.</p>
  <div class="svc-grid">
    ${data.services.map(s => `
    <div class="svc-card">
      <span class="svc-icon">${s.icon}</span>
      <div class="svc-name">${s.title}</div>
      <div class="svc-desc">${s.desc}</div>
    </div>`).join('')}
  </div>
</section>

<!-- CTA -->
<div class="cta-block">
  <h2>${data.cta}</h2>
  <p>Start with a $99 website. Add the AI tools that actually move the needle for ${niche} contractors. No contracts, no commitments.</p>
  <button class="btn-p" style="font-size:16px;padding:17px 40px" onclick="window.location.href='/#score'">Get Started — Audit My Website Free →</button>
</div>

<footer>
  <p><a href="/">← Back to e-Falconry</a> · AI-First Agency for Local Contractors · <a href="mailto:hello@efalconry.com">hello@efalconry.com</a></p>
</footer>

</body>
</html>`;
}

export default function handler(req, res) {
  const path = req.url?.split('?')[0].replace('/', '') || '';
  const niche = path.toLowerCase();
  const data = NICHES[niche];

  if (!data) {
    return res.status(404).send('Niche page not found. Available: ' + Object.keys(NICHES).join(', '));
  }

  const html = renderNichePage(niche, data);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=3600');
  return res.status(200).send(html);
}
