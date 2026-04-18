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
      { icon: '📱', title: 'TikTok & Paid Ads', desc: 'AI-generated before/after videos of your concrete work go on TikTok and Facebook. We manage Google Ads targeting homeowners searching for concrete near you.' },
      { icon: '🗺️', title: 'Online Presence (38+ directories)', desc: 'We manage every directory — Google Maps, Yelp, HomeAdvisor, Angi, Nextdoor, Apple Maps, and 30 more. Consistent info everywhere = more calls.' },
      { icon: '⭐', title: 'Review Automation', desc: 'Every completed job triggers an automatic review request. More 5-star reviews = more calls from Google Maps.' },
    ],
    stats: ['$28K', 'Average project closed using AI mockup', '3 hrs', 'To generate a professional quote package', '47%', 'More Google calls after GBP optimization'],
    cta: 'Get Your Free Concrete Contractor Website',
    alacarte: [
      { name: 'Professional Website', price: '$99', period: 'one-time', desc: 'Mobile-optimized, fast, built for concrete contractors', tag: 'Start here' },
      { name: 'AI Quote Generator', price: '$79', period: '/mo', desc: 'Branded PDF proposals with measurements, scope, and signature lines' },
      { name: 'Project Mockups', price: '$149', period: '/project', desc: '3 photorealistic renders of the finished project — before you pour' },
      { name: 'Online Presence (38+ directories)', price: '$149', period: '/mo', desc: 'Google Maps, Yelp, HomeAdvisor, Angi, Apple Maps, and 33 more' },
      { name: 'Review Automation', price: '$49', period: '/mo', desc: 'Auto-request reviews after every job. Grow your Google rating on autopilot' },
      { name: 'AI Chatbot', price: '$99', period: '/mo', desc: 'Answers customer questions 24/7 on your website' },
      { name: 'Ads Management', price: '$299', period: '/mo', desc: 'Google, Facebook, and TikTok ads. You set the budget, we do everything else' },
    ],
    bundle: {
      name: 'The Full Stack',
      price: '$549',
      period: '/mo',
      savings: 'Save $175/mo vs à la carte',
      includes: [
        'Website hosting & monthly updates',
        'AI Quote Generator',
        'Online Presence (38+ directories)',
        'Review Automation',
        'AI Chatbot 24/7',
        'Google Business Profile optimization',
        'Monthly performance report',
      ],
      addons: [
        'Project Mockups — $149/project',
        'Ads Management — $299/mo add-on',
      ],
      note: 'Most concrete contractors start with The Full Stack + Ads Management and see 3x more inbound calls within 90 days.',
    },
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
    alacarte: [
      { name: 'Professional Website', price: '$99', period: 'one-time', desc: 'Photo gallery, service areas, mobile-optimized', tag: 'Start here' },
      { name: 'AI Project Mockups', price: '$149', period: '/project', desc: '3 photorealistic renders of the finished landscape design' },
      { name: 'AI Quote Generator', price: '$79', period: '/mo', desc: 'Branded proposals with plant specs, measurements, and pricing' },
      { name: 'Online Presence (38+ directories)', price: '$149', period: '/mo', desc: 'Every directory where landscapers get found — managed for you' },
      { name: 'Review Automation', price: '$49', period: '/mo', desc: 'Auto-request reviews after every lawn care or design job' },
      { name: 'Smart Booking', price: '$79', period: '/mo', desc: 'Online booking for consultations, seasonal cleanups, and maintenance' },
      { name: 'Ads Management', price: '$299', period: '/mo', desc: 'Google, Facebook, and TikTok. Before/after content that gets shared' },
    ],
    bundle: {
      name: 'The Full Stack',
      price: '$499',
      period: '/mo',
      savings: 'Save $156/mo vs à la carte',
      includes: [
        'Website hosting & monthly updates',
        'AI Quote Generator',
        'Online Presence (38+ directories)',
        'Review Automation',
        'Smart Booking System',
        'AI Chatbot 24/7',
        'Monthly performance report',
      ],
      addons: [
        'Project Mockups — $149/project',
        'Ads Management — $299/mo add-on',
      ],
      note: 'Most landscapers start here in spring and have a full calendar by summer.',
    },
  },

  roofing: {
    title: 'Roofing Contractors',
    headline: ['For Roofing', 'Contractors.'],
    color: '#1A0A00',
    accent: '#DC6803',
    accentGrad: 'linear-gradient(90deg,#DC6803,#F97316)',
    tagline: 'Win more roof replacements, repairs, and storm jobs with AI tools built for roofers.',
    hero: 'Storm season brings a flood of calls — but only the contractors with a professional online presence capture them. Most homeowners pick the first roofing company that looks trustworthy online. AI-powered quotes, a professional website, and managed reviews put you at the top of that list.',
    services: [
      { icon: '🏠', title: '$99 Website', desc: 'A professional roofing website with your projects, certifications, and service areas. Built to show up on Google.' },
      { icon: '📐', title: 'AI Quote Generator', desc: 'Professional roofing proposals with measurements, material specs, warranty terms, and insurance documentation.' },
      { icon: '🗺️', title: 'Online Presence (38+ directories)', desc: 'Google Maps, Yelp, HomeAdvisor, Angi, and 33 more — managed and consistent so homeowners find you first.' },
      { icon: '⭐', title: 'Review Automation', desc: 'Post-job review requests sent automatically. More Google reviews = more emergency calls after storms.' },
      { icon: '📱', title: 'Paid Ads', desc: 'Google Local Services Ads for roofing get you to the top of search results. Only pay when someone calls.' },
      { icon: '🤖', title: 'AI Chatbot', desc: '24/7 answers about your services, warranties, and how to file an insurance claim after storm damage.' },
    ],
    stats: ['24hr', 'Typical response time after storm events', '$12K', 'Average roof replacement job', '3x', 'More calls with Google Maps optimization'],
    cta: 'Get Your Free Roofing Contractor Website',
    alacarte: [
      { name: 'Professional Website', price: '$99', period: 'one-time', desc: 'Certifications, project gallery, storm damage info, service areas', tag: 'Start here' },
      { name: 'AI Quote Generator', price: '$79', period: '/mo', desc: 'Branded proposals with measurements, materials, warranty, and insurance' },
      { name: 'Online Presence (38+ directories)', price: '$149', period: '/mo', desc: 'Every place homeowners search for roofers — managed monthly' },
      { name: 'Review Automation', price: '$49', period: '/mo', desc: 'Automatic review requests after every completed roof' },
      { name: 'AI Chatbot', price: '$99', period: '/mo', desc: 'Handles storm damage inquiries and insurance questions 24/7' },
      { name: 'Ads Management', price: '$299', period: '/mo', desc: 'Google Local Services Ads — only pay per qualified call' },
    ],
    bundle: {
      name: 'The Full Stack',
      price: '$499',
      period: '/mo',
      savings: 'Save $175/mo vs à la carte',
      includes: [
        'Website hosting & monthly updates',
        'AI Quote Generator',
        'Online Presence (38+ directories)',
        'Review Automation',
        'AI Chatbot 24/7',
        'Monthly performance report',
      ],
      addons: ['Ads Management — $299/mo add-on'],
      note: 'Storm season or not — roofers with strong online presence get 4x more calls than those without.',
    },
  },

  electrician: {
    title: 'Electricians',
    headline: ['For Licensed', 'Electricians.'],
    color: '#0D0D1A',
    accent: '#F59E0B',
    accentGrad: 'linear-gradient(90deg,#F59E0B,#FCD34D)',
    tagline: 'Win more panel upgrades, EV charger installs, and service calls with AI.',
    hero: 'Electrical work is high-trust — homeowners need to feel confident before they let you in. A professional website with your license number, certifications, and customer reviews does more selling than any cold call. Add AI tools and you quote faster, follow up automatically, and show up everywhere online.',
    services: [
      { icon: '⚡', title: '$99 Website', desc: 'Fast, professional electrician website showing your license, certifications, and services. Built to rank locally.' },
      { icon: '📐', title: 'AI Quote Generator', desc: 'Professional electrical proposals with scope of work, material specs, code compliance notes, and permit info.' },
      { icon: '🗺️', title: 'Online Presence (38+ directories)', desc: 'Every directory where homeowners find electricians — managed and consistent.' },
      { icon: '⭐', title: 'Review Automation', desc: 'After every service call, an automatic review request goes out. Builds your Google rating passively.' },
      { icon: '🤖', title: 'AI Chatbot', desc: 'Answers questions about your services, service area, licensing, and pricing ranges around the clock.' },
      { icon: '📱', title: 'Ads Management', desc: 'Google Local Services Ads for electricians — appear at the very top of search, pay only per call.' },
    ],
    stats: ['$8K', 'Average panel upgrade job', '68%', 'Of homeowners pick the first licensed electrician they find online', '2x', 'More service calls after review automation'],
    cta: 'Get Your Free Electrician Website',
    alacarte: [
      { name: 'Professional Website', price: '$99', period: 'one-time', desc: 'License number, certifications, services, and service area displayed prominently', tag: 'Start here' },
      { name: 'AI Quote Generator', price: '$79', period: '/mo', desc: 'Electrical proposals with material specs, scope, permit notes, and signature lines' },
      { name: 'Online Presence (38+ directories)', price: '$149', period: '/mo', desc: 'Every directory where homeowners search for licensed electricians' },
      { name: 'Review Automation', price: '$49', period: '/mo', desc: 'Automatic review requests after every job' },
      { name: 'AI Chatbot', price: '$99', period: '/mo', desc: '24/7 answers about licensing, services, and pricing' },
      { name: 'Ads Management', price: '$299', period: '/mo', desc: 'Google Local Services Ads — verified badge, top placement, pay per call' },
    ],
    bundle: {
      name: 'The Full Stack',
      price: '$499',
      period: '/mo',
      savings: 'Save $175/mo vs à la carte',
      includes: [
        'Website hosting & monthly updates',
        'AI Quote Generator',
        'Online Presence (38+ directories)',
        'Review Automation',
        'AI Chatbot 24/7',
        'Monthly performance report',
      ],
      addons: ['Ads Management — $299/mo add-on (Google LSA highly recommended for electricians)'],
      note: 'Licensed electricians with strong online presence and Google reviews command 20-30% higher rates than competitors.',
    },
  },

  plumber: {
    title: 'Plumbers',
    headline: ['For Plumbers', '& Plumbing Pros.'],
    color: '#0A1628',
    accent: '#E53E3E',
    accentGrad: 'linear-gradient(90deg,#E53E3E,#FC8181)',
    tagline: 'Win more emergency calls, installs, and service contracts with AI built for plumbers.',
    hero: 'When a pipe bursts at 2am, homeowners Google "emergency plumber near me" and call the first result that looks trustworthy. That means showing up on Google Maps, having a fast website with real reviews, and answering the phone — or having an AI answer it. All of that is what we build for you.',
    services: [
      { icon: '🔧', title: '$99 Website', desc: 'Emergency-first plumber website. Fast, mobile-optimized, with your phone number front and center.' },
      { icon: '📐', title: 'AI Quote Generator', desc: 'Professional plumbing proposals for remodels, installations, and service work — branded and signed.' },
      { icon: '🗺️', title: 'Online Presence (38+ directories)', desc: 'Google Maps, Yelp, HomeAdvisor, Angi, and every other place plumbers get found.' },
      { icon: '⭐', title: 'Review Automation', desc: 'Post-job review requests sent automatically. Emergency customers are the best reviewers.' },
      { icon: '🤖', title: 'AI Chatbot', desc: 'Answers calls and questions at 3am. Captures leads when you can't answer the phone.' },
      { icon: '📱', title: 'Ads Management', desc: 'Google Local Services Ads for plumbers — the highest-converting ad format for emergency services.' },
    ],
    stats: ['3am', 'When most plumbing emergencies happen', '$450', 'Average emergency service call value', '5x', 'ROI on Google Local Services Ads for plumbers'],
    cta: 'Get Your Free Plumber Website',
    alacarte: [
      { name: 'Professional Website', price: '$99', period: 'one-time', desc: 'Emergency plumber website — phone number above the fold, fast on mobile', tag: 'Start here' },
      { name: 'AI Quote Generator', price: '$79', period: '/mo', desc: 'Branded plumbing proposals with scope, materials, and warranty terms' },
      { name: 'Online Presence (38+ directories)', price: '$149', period: '/mo', desc: 'Every directory where homeowners find emergency plumbers' },
      { name: 'Review Automation', price: '$49', period: '/mo', desc: 'Automatic review requests after every job — emergency customers review fast' },
      { name: 'AI Chatbot', price: '$99', period: '/mo', desc: 'Answers emergency inquiries 24/7 and captures lead info when you're on a job' },
      { name: 'Ads Management', price: '$299', period: '/mo', desc: 'Google Local Services Ads — highest ROI ad format for plumbers' },
    ],
    bundle: {
      name: 'The Full Stack',
      price: '$499',
      period: '/mo',
      savings: 'Save $175/mo vs à la carte',
      includes: [
        'Website hosting & monthly updates',
        'AI Quote Generator',
        'Online Presence (38+ directories)',
        'Review Automation',
        'AI Chatbot 24/7',
        'Monthly performance report',
      ],
      addons: ['Ads Management — $299/mo add-on (Google LSA essential for emergency plumbers)'],
      note: 'Emergency plumbers with Google LSA and strong reviews see 5x ROI on ad spend. The Full Stack sets the foundation.',
    },
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
    alacarte: [
      { name: 'Professional Website', price: '$99', period: 'one-time', desc: 'Fast, mobile-first HVAC website built to convert', tag: 'Start here' },
      { name: 'AI Chatbot', price: '$99', period: '/mo', desc: 'Handles after-hours inquiries, emergency calls, and booking requests' },
      { name: 'AI Quote Generator', price: '$79', period: '/mo', desc: 'System specs, labor, warranty, and financing options in one PDF' },
      { name: 'Online Presence (38+ directories)', price: '$149', period: '/mo', desc: 'Show up everywhere homeowners search for HVAC — managed monthly' },
      { name: 'Review Automation', price: '$49', period: '/mo', desc: 'Every service call triggers a review request. Google rating climbs automatically' },
      { name: 'Smart Booking', price: '$79', period: '/mo', desc: 'Online scheduling for tune-ups, installs, and emergency service' },
      { name: 'Ads Management', price: '$299', period: '/mo', desc: 'Google Local Services Ads — you only pay per call, not per click' },
    ],
    bundle: {
      name: 'The Full Stack',
      price: '$499',
      period: '/mo',
      savings: 'Save $155/mo vs à la carte',
      includes: [
        'Website hosting & monthly updates',
        'AI Chatbot 24/7',
        'AI Quote Generator',
        'Online Presence (38+ directories)',
        'Review Automation',
        'Smart Booking System',
        'Monthly performance report',
      ],
      addons: [
        'Google Local Services Ads — $299/mo add-on (highly recommended for HVAC)',
      ],
      note: 'HVAC is one of the highest-competition local service categories. The Full Stack + Google LSAs puts you ahead of 90% of competitors.',
    },
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
@media(max-width:860px){[style*="grid-template-columns:1fr 1fr"][style*="align-items:start"]{grid-template-columns:1fr !important;} [style*="position:sticky"]{position:relative !important;top:auto !important;}}
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

<!-- PRICING -->
${data.alacarte ? `
<section style="padding:88px 5%;background:var(--bg2);border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);">
<div style="max-width:1100px;margin:0 auto">

  <div class="eye">Pricing</div>
  <h2>Pick What<br><em style="font-style:normal;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent">You Need.</em></h2>
  <p style="font-size:16px;color:#C4CBDA;max-width:540px;line-height:1.75;margin-bottom:56px;font-weight:300">Every service is available individually. No contracts, no minimums. Or take everything at once with The Full Stack and save.</p>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start">

    <!-- À la carte menu -->
    <div>
      <div style="font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${accent};margin-bottom:20px">À La Carte — Pick Any Service</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        \${data.alacarte.map(item => \`
        <div style="background:#0F1219;border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;transition:border-color .15s"
             onmouseover="this.style.borderColor='rgba(255,255,255,.15)'" 
             onmouseout="this.style.borderColor='rgba(255,255,255,.07)'">
          <div style="flex:1">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
              <span style="font-family:'Syne',sans-serif;font-size:14px;font-weight:700;color:#EDE8DC">\${item.name}</span>
              \${item.tag ? \`<span style="background:rgba(255,255,255,.08);border-radius:99px;padding:2px 8px;font-family:'Syne',sans-serif;font-size:9px;font-weight:700;letter-spacing:.08em;color:#8892A8;text-transform:uppercase">\${item.tag}</span>\` : ''}
            </div>
            <div style="font-size:12px;color:#8892A8;line-height:1.5">\${item.desc}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-family:'Bebas Neue',cursive;font-size:24px;line-height:1;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">\${item.price}</div>
            <div style="font-size:10px;color:#8892A8">\${item.period}</div>
          </div>
        </div>\`).join('')}
      </div>
    </div>

    <!-- Bundle -->
    <div style="position:sticky;top:80px">
      <div style="font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${accent};margin-bottom:20px">The Full Stack — Everything at Once</div>
      <div style="background:#0F1219;border:2px solid rgba(255,255,255,.15);border-radius:20px;overflow:hidden;position:relative">
        <!-- Most popular badge -->
        <div style="background:var(--grad);padding:10px 24px;text-align:center">
          <span style="font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#fff">Most Popular</span>
        </div>
        <div style="padding:28px 28px 24px">
          <div style="font-family:'Bebas Neue',cursive;font-size:18px;color:#EDE8DC;margin-bottom:4px">\${data.bundle.name}</div>
          <div style="display:flex;align-items:baseline;gap:4px;margin-bottom:4px">
            <span style="font-family:'Bebas Neue',cursive;font-size:56px;line-height:1;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">\${data.bundle.price}</span>
            <span style="font-size:14px;color:#8892A8">\${data.bundle.period}</span>
          </div>
          <div style="display:inline-block;background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.25);border-radius:99px;padding:4px 12px;font-family:'Syne',sans-serif;font-size:11px;font-weight:700;color:#4ADE80;margin-bottom:20px">\${data.bundle.savings}</div>
          
          <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px">
            \${data.bundle.includes.map(inc => \`
            <div style="display:flex;align-items:center;gap:10px;font-size:13px;color:#C4CBDA">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="rgba(74,222,128,.15)" stroke="rgba(74,222,128,.4)"/><path d="M5 8l2 2 4-4" stroke="#4ADE80" stroke-width="1.5" stroke-linecap="round"/></svg>
              \${inc}
            </div>\`).join('')}
          </div>

          \${data.bundle.addons?.length ? \`
          <div style="border-top:1px solid rgba(255,255,255,.07);padding-top:16px;margin-bottom:20px">
            <div style="font-family:'Syne',sans-serif;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8892A8;margin-bottom:10px">Popular Add-Ons</div>
            \${data.bundle.addons.map(a => \`
            <div style="font-size:12px;color:#C4CBDA;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.05)">\${a}</div>
            \`).join('')}
          </div>\` : ''}

          <button class="btn-p" style="width:100%;font-size:15px;padding:15px" onclick="window.location.href='/#score'">Get Started — Free Audit First →</button>
          
          \${data.bundle.note ? \`<p style="font-size:12px;color:#8892A8;margin-top:14px;line-height:1.6;text-align:center">\${data.bundle.note}</p>\` : ''}
        </div>
      </div>

      <!-- Or start small -->
      <div style="margin-top:16px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:18px 20px;text-align:center">
        <div style="font-size:13px;color:#8892A8;margin-bottom:8px">Or start small — no commitment</div>
        <div style="font-family:'Syne',sans-serif;font-size:18px;font-weight:800;color:#EDE8DC;margin-bottom:4px">$99 Website Only</div>
        <div style="font-size:12px;color:#8892A8;margin-bottom:14px">One-time · Nothing required from you · Live in 48hrs</div>
        <button onclick="window.location.href='/#score'" style="background:transparent;border:1px solid rgba(255,255,255,.15);color:#C4CBDA;font-family:'Syne',sans-serif;font-weight:700;font-size:13px;padding:10px 22px;border-radius:8px;cursor:pointer;width:100%">Start with $99 →</button>
      </div>
    </div>

  </div>
</div>
</section>` : ''}

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
  // Vercel rewrites pass the niche as ?niche=concrete query param
  const nicheParam = (req.query && req.query.niche)
    ? req.query.niche
    : (req.url || '').split('?')[0].replace(/^\/api\/niche\/?/, '').replace(/^\//, '');
  const niche = nicheParam.toLowerCase().trim();
  const data = NICHES[niche];

  if (!data) {
    return res.status(404).send('Niche page not found. Available: ' + Object.keys(NICHES).join(', '));
  }

  const html = renderNichePage(niche, data);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=3600');
  return res.status(200).send(html);
}
