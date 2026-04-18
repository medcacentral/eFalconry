// e-Falconry Niche Pages — fully rebuilt
// Consistent branding with main site, real photos, fixed pricing

const NICHES = {
  concrete: {
    title: 'Concrete Contractors',
    h1a: 'For Concrete', h1b: 'Contractors.',
    accent: '#F59E0B',
    tagline: 'Win more patio, driveway, and foundation jobs with AI tools built for concrete work.',
    hero: 'Every concrete contractor in your market is quoting the same way they did 20 years ago. Handwritten estimates, blurry phone photos, and "I\'ll get back to you." You can close jobs same-day with professional AI-generated quotes, photorealistic patio renderings, and a website that actually shows up on Google.',
    beforeImg: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=680&h=440&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=680&h=440&fit=crop&q=80',
    beforeLabel: 'Their backyard today',
    afterLabel: 'After your concrete work',
    beforeDesc: 'Plain grass, no defined space, no patio — customer has no idea what it could look like',
    afterDesc: 'Exposed aggregate patio with fire pit area — shown to customer before a single yard is poured',
    stats: [['$28K','Avg job closed with AI mockup'],['3 hrs','To generate a professional quote'],['47%','More Google calls after optimization']],
    services: [
      ['📐','AI Quote Generator','Input measurements, materials, and finish options — get a branded PDF proposal with scope of work, itemized costs, payment terms, and signature lines. Close jobs on the spot, from your phone.'],
      ['🎨','Project Mockups','Show customers a photorealistic render of their finished patio, driveway, or pool deck before you pour a single yard. Eliminates hesitation. Closes bigger jobs.'],
      ['🌐','$99 Website','A professional concrete contractor website that shows up on Google. Mobile-optimized, fast, with your real projects and Google reviews.'],
      ['📱','Paid Ads & TikTok','AI-generated before/after videos of your work on TikTok and Facebook. Google Ads targeting homeowners searching for concrete in your area.'],
      ['🗺️','Online Presence (38+ directories)','Google Maps, Yelp, HomeAdvisor, Angi, Nextdoor, Apple Maps, and 33 more — managed and consistent everywhere customers search.'],
      ['⭐','Review Automation','Every completed job triggers an automatic review request. More 5-star reviews = more calls from Google Maps without paying for ads.'],
    ],
    alacarte: [
      ['Professional Website','$99','one-time','Mobile-optimized concrete contractor site, built first — you just claim it','Start here'],
      ['AI Quote Generator','$79','/mo','Branded proposals with scope, measurements, options, and signature lines',''],
      ['Project Mockups','$149','/project','3 photorealistic renders of the finished project — before you pour',''],
      ['Online Presence (38+ directories)','$149','/mo','Every directory where concrete contractors get found — managed monthly',''],
      ['Review Automation','$49','/mo','Auto-request reviews after every job. Google rating climbs on autopilot',''],
      ['AI Chatbot','$99','/mo','Answers customer questions 24/7 on your website',''],
      ['Ads Management','$299','/mo','Google, Facebook, and TikTok ads. You set the budget, we handle everything',''],
    ],
    bundle_name: 'The Full Stack',
    bundle_price: '$549',
    bundle_savings: 'Save $175/mo vs a la carte',
    bundle_includes: ['Website hosting & monthly updates','AI Quote Generator','Online Presence (38+ directories)','Review Automation','AI Chatbot 24/7','Monthly performance report'],
    bundle_addons: ['Project Mockups — $149/project','Ads Management — $299/mo add-on'],
    bundle_note: 'Most concrete contractors start with The Full Stack plus Ads Management and see 3x more inbound calls within 90 days.',
    cta: 'Get Your Free Concrete Contractor Website',
    quoteTitle: 'BID PROPOSAL — EXPOSED AGGREGATE PROJECT',
    quoteClient: 'Rodriguez Residence',
    quoteAddress: '4821 Maple Ridge Rd, Tacoma, WA 98422',
    quoteOptions: [
      {label:'Option 1 — Exposed Aggregate / Broom Finish w/ Stamped Border', base:8500, tax:858.50, total:9358.50},
      {label:'Option 2 — Exposed Aggregate w/ Color (Premium)', base:9500, tax:959.50, total:10459.50},
    ],
    quoteMeasurements: [['Total Area','620','sq ft'],['Thickness','4.5','inches'],['Concrete PSI','5,000–5,500','PSI']],
    quotePayment: '10% due upon signing · 40% due at start · 50% due upon completion',
    quoteExclusions: 'Excavation beyond scope, landscaping outside work area, utility relocation, permits unless specified',
  },
  landscaping: {
    title: 'Landscaping Companies',
    h1a: 'For Landscapers', h1b: '& Lawn Pros.',
    accent: '#10B981',
    tagline: 'Win more landscape design, lawn care, and hardscape jobs with AI.',
    hero: 'Landscaping is a visual business and most landscaping websites look nothing like the work you actually do. Your best jobs deserve to be shown off. AI-powered mockups let you show customers their future yard before you lift a shovel. Professional quotes close jobs the same day.',
    beforeImg: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=680&h=440&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aeae?w=680&h=440&fit=crop&q=80',
    beforeLabel: 'The yard today',
    afterLabel: 'After your landscaping',
    beforeDesc: 'Overgrown, undefined space with no curb appeal — customer does not know what it could be',
    afterDesc: 'Designed landscape with clean beds, lighting, and hardscape — shown before you touch a shovel',
    stats: [['4.8★','Avg Google rating after review automation'],['$149','Per project for AI yard renderings'],['2x','More leads after website redesign']],
    services: [
      ['🌿','AI Project Mockups','Show clients a photorealistic render of their transformed yard — new lawn, garden beds, hardscape, lighting — before any work begins.'],
      ['📐','Quote Generator','Professional branded quotes with measurements, plant specifications, maintenance schedules, and payment terms.'],
      ['🌐','$99 Website','A gorgeous landscaping website with a photo gallery of your real work, service areas, and Google Maps integration.'],
      ['📅','Smart Booking','Customers book seasonal cleanups, lawn care, and consultations directly from your website.'],
      ['⭐','Review Automation','After every job, an automated follow-up requests a Google review. Your rating grows automatically.'],
      ['🤖','AI Chatbot','24/7 answers about your services, service area, pricing ranges, and how to get a quote.'],
    ],
    alacarte: [
      ['Professional Website','$99','one-time','Photo gallery, service areas, mobile-optimized, built for landscaping','Start here'],
      ['AI Project Mockups','$149','/project','3 photorealistic renders of the finished landscape design',''],
      ['AI Quote Generator','$79','/mo','Branded proposals with plant specs, measurements, and maintenance plans',''],
      ['Online Presence (38+ directories)','$149','/mo','Every directory where landscapers get found — managed monthly',''],
      ['Review Automation','$49','/mo','Automatic review requests after every job',''],
      ['Smart Booking','$79','/mo','Online booking for consultations, seasonal cleanups, and maintenance',''],
      ['Ads Management','$299','/mo','Google, Facebook, and TikTok. Before/after content that gets shared',''],
    ],
    bundle_name: 'The Full Stack',
    bundle_price: '$499',
    bundle_savings: 'Save $156/mo vs a la carte',
    bundle_includes: ['Website hosting & monthly updates','AI Quote Generator','Online Presence (38+ directories)','Review Automation','Smart Booking System','AI Chatbot 24/7','Monthly performance report'],
    bundle_addons: ['Project Mockups — $149/project','Ads Management — $299/mo add-on'],
    bundle_note: 'Most landscapers start here in spring and have a full calendar by summer.',
    cta: 'Get Your Free Landscaping Website',
  },
  hvac: {
    title: 'HVAC Contractors',
    h1a: 'For HVAC', h1b: 'Contractors.',
    accent: '#0EA5E9',
    tagline: 'Book more installs, service calls, and maintenance contracts with AI.',
    hero: 'HVAC customers decide in under 3 minutes. If your website is slow, looks outdated, or does not show up on Google — they call your competitor. AI tools give you a website that converts, an AI assistant that answers questions at midnight, and automated systems that follow up with every lead.',
    beforeImg: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=680&h=440&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=680&h=440&fit=crop&q=80',
    beforeLabel: 'Old HVAC system',
    afterLabel: 'Professional installation',
    beforeDesc: 'Outdated equipment, poor presentation, no digital record or quote for the customer',
    afterDesc: 'Professional installation with branded quote, warranty documentation, and follow-up automation',
    stats: [['24/7','AI answers customer questions'],['58%','HVAC searches happen on mobile'],['5x','ROI on Google Local Services Ads']],
    services: [
      ['❄️','$99 Website','A modern HVAC website that ranks locally, loads fast on mobile, and converts visitors into calls.'],
      ['🤖','AI Chatbot','Answers questions about services, pricing ranges, and emergency availability 24 hours a day.'],
      ['📐','Quote Generator','Professional HVAC proposals with system specs, labor, warranty terms, and financing options.'],
      ['📅','Maintenance Contracts','Automate annual maintenance reminders and contract renewals via SMS and email.'],
      ['⭐','Review Automation','Request Google reviews after every service call. More reviews equals more Google Maps calls.'],
      ['📊','Google Business','Dominate "HVAC near me" searches with an optimized Google Business Profile.'],
    ],
    alacarte: [
      ['Professional Website','$99','one-time','Fast, mobile-first HVAC website built to convert visitors into calls','Start here'],
      ['AI Chatbot','$99','/mo','Handles after-hours inquiries, emergency calls, and booking requests',''],
      ['AI Quote Generator','$79','/mo','System specs, labor, warranty, and financing options in one branded PDF',''],
      ['Online Presence (38+ directories)','$149','/mo','Show up everywhere homeowners search for HVAC — managed monthly',''],
      ['Review Automation','$49','/mo','Automatic review requests after every service call',''],
      ['Smart Booking','$79','/mo','Online scheduling for tune-ups, installs, and emergency service',''],
      ['Ads Management','$299','/mo','Google Local Services Ads — you only pay per qualified call',''],
    ],
    bundle_name: 'The Full Stack',
    bundle_price: '$499',
    bundle_savings: 'Save $155/mo vs a la carte',
    bundle_includes: ['Website hosting & monthly updates','AI Chatbot 24/7','AI Quote Generator','Online Presence (38+ directories)','Review Automation','Smart Booking System','Monthly performance report'],
    bundle_addons: ['Google Local Services Ads — $299/mo (highly recommended for HVAC)'],
    bundle_note: 'HVAC is one of the highest-competition local service categories. The Full Stack plus Google LSAs puts you ahead of 90% of competitors.',
    cta: 'Get Your Free HVAC Website',
  },
  roofing: {
    title: 'Roofing Contractors',
    h1a: 'For Roofing', h1b: 'Contractors.',
    accent: '#DC6803',
    tagline: 'Win more roof replacements, repairs, and storm jobs with AI.',
    hero: 'Storm season brings a flood of calls — but only the contractors with a professional online presence capture them. Most homeowners pick the first roofing company that looks trustworthy online. AI-powered quotes, a professional website, and managed reviews put you at the top of that list.',
    beforeImg: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=680&h=440&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=680&h=440&fit=crop&q=80',
    beforeLabel: 'Worn, aging roof',
    afterLabel: 'Professional replacement',
    beforeDesc: 'Damaged shingles, no documentation, customer unsure of cost or scope',
    afterDesc: 'New roof with branded quote, warranty terms, and before/after documentation',
    stats: [['24hr','Response time after storm events'],['$12K','Average roof replacement job'],['3x','More calls with Google Maps optimization']],
    services: [
      ['🏠','$99 Website','A professional roofing website with your certifications, project gallery, and service areas.'],
      ['📐','AI Quote Generator','Professional roofing proposals with measurements, material specs, warranty terms, and insurance documentation.'],
      ['🗺️','Online Presence (38+ directories)','Every place homeowners find roofers — Google Maps, Yelp, HomeAdvisor, and 33 more.'],
      ['⭐','Review Automation','Automatic review requests after every roof. More reviews means more emergency storm calls.'],
      ['📱','Paid Ads','Google Local Services Ads for roofing. Only pay per qualified call.'],
      ['🤖','AI Chatbot','Handles storm damage inquiries and insurance questions 24/7.'],
    ],
    alacarte: [
      ['Professional Website','$99','one-time','Certifications, project gallery, storm damage info, service areas','Start here'],
      ['AI Quote Generator','$79','/mo','Branded proposals with measurements, materials, warranty, and insurance'],
      ['Online Presence (38+ directories)','$149','/mo','Every directory where homeowners search for roofers — managed monthly',''],
      ['Review Automation','$49','/mo','Automatic review requests after every completed roof',''],
      ['AI Chatbot','$99','/mo','Handles storm damage inquiries and insurance questions 24/7',''],
      ['Ads Management','$299','/mo','Google Local Services Ads — only pay per qualified call',''],
    ],
    bundle_name: 'The Full Stack',
    bundle_price: '$499',
    bundle_savings: 'Save $175/mo vs a la carte',
    bundle_includes: ['Website hosting & monthly updates','AI Quote Generator','Online Presence (38+ directories)','Review Automation','AI Chatbot 24/7','Monthly performance report'],
    bundle_addons: ['Ads Management — $299/mo add-on'],
    bundle_note: 'Storm season or not, roofers with strong online presence get 4x more calls than those without.',
    cta: 'Get Your Free Roofing Website',
  },
  electrician: {
    title: 'Electricians',
    h1a: 'For Licensed', h1b: 'Electricians.',
    accent: '#F59E0B',
    tagline: 'Win more panel upgrades, EV charger installs, and service calls with AI.',
    hero: 'Electrical work is high-trust — homeowners need to feel confident before they let you in. A professional website with your license number, certifications, and customer reviews does more selling than any cold call. Add AI tools and you quote faster, follow up automatically, and show up everywhere online.',
    beforeImg: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=680&h=440&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=680&h=440&fit=crop&q=80',
    beforeLabel: 'Old panel / wiring',
    afterLabel: 'Professional upgrade',
    beforeDesc: 'Outdated panel, no documentation, homeowner not sure what work was done',
    afterDesc: 'New panel with branded quote, code compliance notes, and permit documentation',
    stats: [['$8K','Average panel upgrade job'],['68%','Homeowners pick the first licensed electrician they find online'],['2x','More service calls after review automation']],
    services: [
      ['⚡','$99 Website','Fast, professional electrician website showing your license, certifications, and services.'],
      ['📐','AI Quote Generator','Professional electrical proposals with scope of work, material specs, code compliance notes, and permit info.'],
      ['🗺️','Online Presence (38+ directories)','Every directory where homeowners find licensed electricians — managed monthly.'],
      ['⭐','Review Automation','After every service call, an automatic review request goes out. Builds your Google rating passively.'],
      ['🤖','AI Chatbot','Answers questions about your services, service area, licensing, and pricing ranges around the clock.'],
      ['📱','Ads Management','Google Local Services Ads for electricians — appear at the top of search, pay only per call.'],
    ],
    alacarte: [
      ['Professional Website','$99','one-time','License number, certifications, services, and service area — built for trust','Start here'],
      ['AI Quote Generator','$79','/mo','Electrical proposals with material specs, scope, permit notes, and signature lines',''],
      ['Online Presence (38+ directories)','$149','/mo','Every directory where homeowners search for licensed electricians',''],
      ['Review Automation','$49','/mo','Automatic review requests after every job',''],
      ['AI Chatbot','$99','/mo','24/7 answers about licensing, services, and pricing',''],
      ['Ads Management','$299','/mo','Google Local Services Ads — verified badge, top placement, pay per call',''],
    ],
    bundle_name: 'The Full Stack',
    bundle_price: '$499',
    bundle_savings: 'Save $175/mo vs a la carte',
    bundle_includes: ['Website hosting & monthly updates','AI Quote Generator','Online Presence (38+ directories)','Review Automation','AI Chatbot 24/7','Monthly performance report'],
    bundle_addons: ['Ads Management — $299/mo add-on (Google LSA highly recommended for electricians)'],
    bundle_note: 'Licensed electricians with strong online presence and Google reviews command 20-30% higher rates than competitors.',
    cta: 'Get Your Free Electrician Website',
  },
  plumber: {
    title: 'Plumbers',
    h1a: 'For Plumbers', h1b: '& Plumbing Pros.',
    accent: '#E53E3E',
    tagline: 'Win more emergency calls, installs, and service contracts with AI.',
    hero: 'When a pipe bursts at 2am, homeowners Google "emergency plumber near me" and call the first result that looks trustworthy. That means showing up on Google Maps, having a fast website with real reviews, and answering the phone — or having an AI answer it. All of that is what we build for you.',
    beforeImg: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=680&h=440&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=680&h=440&fit=crop&q=80',
    beforeLabel: 'The problem',
    afterLabel: 'After your work',
    beforeDesc: 'Burst pipe, no documentation, stressed homeowner with no info on next steps',
    afterDesc: 'Fixed and documented, with branded invoice, warranty, and review follow-up sent automatically',
    stats: [['3am','When most plumbing emergencies happen'],['$450','Average emergency service call value'],['5x','ROI on Google Local Services Ads for plumbers']],
    services: [
      ['🔧','$99 Website','Emergency-first plumber website. Fast, mobile-optimized, with your phone number front and center.'],
      ['📐','AI Quote Generator','Professional plumbing proposals for remodels, installations, and service work — branded and signed.'],
      ['🗺️','Online Presence (38+ directories)','Google Maps, Yelp, HomeAdvisor, Angi, and every other place plumbers get found.'],
      ['⭐','Review Automation','Post-job review requests sent automatically. Emergency customers are the best reviewers.'],
      ['🤖','AI Chatbot','Answers calls and questions at 3am. Captures leads when you cannot answer the phone.'],
      ['📱','Ads Management','Google Local Services Ads for plumbers — the highest-converting ad format for emergency services.'],
    ],
    alacarte: [
      ['Professional Website','$99','one-time','Emergency plumber site — phone number above the fold, fast on mobile','Start here'],
      ['AI Quote Generator','$79','/mo','Branded plumbing proposals with scope, materials, and warranty terms',''],
      ['Online Presence (38+ directories)','$149','/mo','Every directory where homeowners find emergency plumbers',''],
      ['Review Automation','$49','/mo','Automatic review requests after every job — emergency customers review fast',''],
      ['AI Chatbot','$99','/mo','Answers emergency inquiries 24/7 and captures lead info when you are on a job',''],
      ['Ads Management','$299','/mo','Google Local Services Ads — highest ROI ad format for plumbers',''],
    ],
    bundle_name: 'The Full Stack',
    bundle_price: '$499',
    bundle_savings: 'Save $175/mo vs a la carte',
    bundle_includes: ['Website hosting & monthly updates','AI Quote Generator','Online Presence (38+ directories)','Review Automation','AI Chatbot 24/7','Monthly performance report'],
    bundle_addons: ['Ads Management — $299/mo add-on (Google LSA essential for emergency plumbers)'],
    bundle_note: 'Emergency plumbers with Google LSA and strong reviews see 5x ROI on ad spend. The Full Stack sets the foundation.',
    cta: 'Get Your Free Plumber Website',
  },
};

// Build functions that avoid nested template literals
function buildAlacarteItems(items) {
  return items.map(function(item) {
    var name = item[0], price = item[1], period = item[2], desc = item[3], tag = item[4];
    var tagHtml = tag ? '<span style="background:rgba(255,255,255,.08);border-radius:99px;padding:2px 9px;font-family:\'Syne\',sans-serif;font-size:9px;font-weight:700;letter-spacing:.08em;color:#8892A8;text-transform:uppercase;margin-left:8px">' + tag + '</span>' : '';
    return '<div style="background:#0F1219;border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px">'
      + '<div style="flex:1">'
      + '<div style="display:flex;align-items:center;margin-bottom:4px">'
      + '<span style="font-family:\'Syne\',sans-serif;font-size:14px;font-weight:700;color:#EDE8DC">' + name + '</span>'
      + tagHtml
      + '</div>'
      + '<div style="font-size:12px;color:#8892A8;line-height:1.5">' + desc + '</div>'
      + '</div>'
      + '<div style="text-align:right;flex-shrink:0">'
      + '<div style="font-family:\'Bebas Neue\',cursive;font-size:26px;line-height:1;color:#F07A20">' + price + '</div>'
      + '<div style="font-size:10px;color:#8892A8">' + period + '</div>'
      + '</div>'
      + '</div>';
  }).join('');
}

function buildBundleIncludes(items) {
  return items.map(function(inc) {
    return '<div style="display:flex;align-items:center;gap:10px;font-size:13px;color:#C4CBDA;margin-bottom:8px">'
      + '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="rgba(74,222,128,.15)" stroke="rgba(74,222,128,.4)"/><path d="M5 8l2 2 4-4" stroke="#4ADE80" stroke-width="1.5" stroke-linecap="round"/></svg>'
      + inc + '</div>';
  }).join('');
}

function buildServices(items, accent) {
  return items.map(function(s) {
    return '<div style="background:#0F1219;border:1px solid rgba(255,255,255,.07);border-left:3px solid ' + accent + ';border-radius:16px;padding:26px 24px">'
      + '<div style="font-size:28px;margin-bottom:14px">' + s[0] + '</div>'
      + '<div style="font-family:\'Syne\',sans-serif;font-size:15px;font-weight:700;color:#EDE8DC;margin-bottom:8px">' + s[1] + '</div>'
      + '<div style="font-size:13px;color:#8892A8;line-height:1.65">' + s[2] + '</div>'
      + '</div>';
  }).join('');
}

function buildStats(stats, accent) {
  return stats.map(function(s) {
    return '<div style="flex:1;text-align:center;padding:0 20px;border-right:1px solid rgba(255,255,255,.07)">'
      + '<div style="font-family:\'Bebas Neue\',cursive;font-size:42px;color:' + accent + ';line-height:1">' + s[0] + '</div>'
      + '<div style="font-size:12px;color:#8892A8;margin-top:4px;line-height:1.4">' + s[1] + '</div>'
      + '</div>';
  }).join('');
}

function buildBundleAddons(items) {
  return items.map(function(a) {
    return '<div style="font-size:12px;color:#C4CBDA;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05)">' + a + '</div>';
  }).join('');
}

function buildQuoteOptions(options) {
  if (!options) return '';
  return options.map(function(opt) {
    return '<tr><td style="padding:10px 12px;font-size:13px;color:#555;border-bottom:1px solid #f0f0f0">' + opt.label + '</td>'
      + '<td style="padding:10px 12px;text-align:right;font-size:13px;font-weight:600;border-bottom:1px solid #f0f0f0">$' + opt.base.toLocaleString('en-US', {minimumFractionDigits:2}) + '</td>'
      + '<td style="padding:10px 12px;text-align:right;font-size:13px;color:#888;border-bottom:1px solid #f0f0f0">$' + opt.tax.toFixed(2) + '</td>'
      + '<td style="padding:10px 12px;text-align:right;font-size:14px;font-weight:800;border-bottom:1px solid #f0f0f0">$' + opt.total.toLocaleString('en-US', {minimumFractionDigits:2}) + '</td></tr>';
  }).join('');
}

function buildQuoteMeasurements(measurements) {
  if (!measurements) return '';
  return measurements.map(function(m) {
    return '<div style="background:#f0f7ff;border:1px solid #dbeafe;border-radius:8px;padding:14px;text-align:center">'
      + '<div style="font-family:\'Syne\',sans-serif;font-size:20px;font-weight:800;color:#1d4ed8;line-height:1">' + m[1] + '</div>'
      + '<div style="font-size:11px;color:#3b82f6;font-weight:600;margin:2px 0">' + m[2] + '</div>'
      + '<div style="font-size:11px;color:#666">' + m[0] + '</div>'
      + '</div>';
  }).join('');
}

function renderNichePage(niche, data) {
  var acc = data.accent;
  var quoteSection = '';
  if (data.quoteTitle) {
    quoteSection = '<div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 24px 64px rgba(0,0,0,.5);margin-top:48px">'
      + '<div style="background:#1a1a1a;padding:20px 28px;display:flex;align-items:center;justify-content:space-between">'
      + '<div style="display:flex;align-items:center;gap:14px">'
      + '<div style="width:40px;height:40px;background:#F07A20;border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:\'Bebas Neue\',cursive;font-size:16px;color:#fff">ONYX</div>'
      + '<div><div style="color:#fff;font-weight:800;font-size:15px">Onyx Concrete LLC</div>'
      + '<div style="color:#888;font-size:11px">License: ONYXCC*756PA · 253-448-7283</div></div></div>'
      + '<div style="color:#666;font-size:12px;text-align:right">Q-' + Math.floor(Math.random()*900000+100000) + '<br>Valid 30 days</div>'
      + '</div>'
      + '<div style="padding:20px 28px;color:#1a1a1a">'
      + '<div style="font-size:16px;font-weight:800;color:#1a1a1a;margin-bottom:4px">' + data.quoteTitle + '</div>'
      + '<div style="font-size:13px;color:#555;margin-bottom:20px">Client: ' + data.quoteClient + ' &nbsp;·&nbsp; ' + data.quoteAddress + '</div>'
      + (data.quoteMeasurements ? '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px">' + buildQuoteMeasurements(data.quoteMeasurements) + '</div>' : '')
      + '<div style="font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#999;margin-bottom:8px">Pricing Options</div>'
      + '<table style="width:100%;border-collapse:collapse">'
      + '<thead><tr style="background:#1a1a1a;color:#fff">'
      + '<th style="padding:9px 12px;text-align:left;font-size:11px">Option</th>'
      + '<th style="padding:9px 12px;text-align:right;font-size:11px">Base Price</th>'
      + '<th style="padding:9px 12px;text-align:right;font-size:11px">Tax (~10.1%)</th>'
      + '<th style="padding:9px 12px;text-align:right;font-size:11px">Total</th>'
      + '</tr></thead>'
      + '<tbody>' + buildQuoteOptions(data.quoteOptions) + '</tbody>'
      + '</table>'
      + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px">'
      + '<div style="background:#f8f8f8;border-radius:8px;padding:12px 14px;font-size:12px;color:#555"><strong style="color:#1a1a1a">Payment Terms</strong><br>' + (data.quotePayment||'') + '</div>'
      + '<div style="background:#f8f8f8;border-radius:8px;padding:12px 14px;font-size:12px;color:#555"><strong style="color:#1a1a1a">Exclusions</strong><br>' + (data.quoteExclusions||'Excavation beyond scope, permits unless specified') + '</div>'
      + '</div>'
      + '<div style="margin-top:14px;padding:10px 14px;background:#fff8f0;border-left:3px solid #F07A20;border-radius:4px;font-size:12px;color:#666">Delivered as a professional web-based quote — printable, convertible to PDF, and ready to email to your customer.</div>'
      + '</div></div>';
  }

  var html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n'
    + '<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">\n'
    + '<title>e-Falconry — ' + data.title + '</title>\n'
    + '<meta name="description" content="' + data.tagline + '">\n'
    + '<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">\n'
    + '<style>\n'
    + '*{margin:0;padding:0;box-sizing:border-box;}\n'
    + ':root{--acc:' + acc + ';--bg:#07090C;--bg2:#0F1219;--bg3:#161B26;--text:#EDE8DC;--t2:#C4CBDA;--t3:#8892A8;--bdr:rgba(255,255,255,.07);}\n'
    + 'body{background:var(--bg);color:var(--text);font-family:\'DM Sans\',sans-serif;}\n'
    + 'a{color:inherit;text-decoration:none;}\n'
    + 'nav{background:rgba(7,9,12,.97);border-bottom:1px solid rgba(240,122,32,.2);padding:0 5%;height:66px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;}\n'
    + '.n-logo{display:flex;align-items:center;gap:10px;}\n'
    + '.n-brand{font-family:\'Bebas Neue\',cursive;font-size:20px;letter-spacing:.08em;color:#EDE8DC;}\n'
    + '.n-brand span{color:#F07A20;}\n'
    + '.n-cta{background:linear-gradient(90deg,#F07A20,#FF9A50);color:#fff;font-family:\'Syne\',sans-serif;font-weight:700;font-size:12px;padding:10px 22px;border-radius:8px;border:none;cursor:pointer;white-space:nowrap;}\n'
    + '.hero{min-height:88vh;display:flex;align-items:center;position:relative;overflow:hidden;padding:80px 5%;background:linear-gradient(160deg,#07090C 0%,#0F1219 60%,#07090C 100%);}\n'
    + '.hero-glow{position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,' + acc + '18 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none;}\n'
    + '.hero-inner{position:relative;z-index:2;max-width:960px;width:100%;}\n'
    + '.pill{display:inline-flex;align-items:center;gap:8px;background:rgba(240,122,32,.1);border:1px solid rgba(240,122,32,.25);border-radius:99px;padding:6px 16px;font-family:\'Syne\',sans-serif;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#F07A20;margin-bottom:24px;}\n'
    + 'h1{font-family:\'Bebas Neue\',cursive;font-size:clamp(60px,11vw,100px);line-height:.92;margin-bottom:24px;}\n'
    + 'h1 em{font-style:normal;color:' + acc + ';}\n'
    + '.hero-sub{font-size:17px;color:#C4CBDA;line-height:1.8;max-width:600px;margin-bottom:40px;font-weight:300;}\n'
    + '.btn-p{background:linear-gradient(90deg,#F07A20,#FF9A50);color:#fff;font-family:\'Syne\',sans-serif;font-weight:700;font-size:15px;padding:15px 32px;border-radius:10px;border:none;cursor:pointer;display:inline-block;}\n'
    + '.btn-s{background:transparent;color:#C4CBDA;font-family:\'Syne\',sans-serif;font-weight:700;font-size:15px;padding:15px 32px;border-radius:10px;border:1px solid rgba(255,255,255,.12);cursor:pointer;display:inline-block;margin-left:12px;}\n'
    + '.stats-row{display:flex;border-top:1px solid rgba(255,255,255,.07);border-bottom:1px solid rgba(255,255,255,.07);padding:28px 5%;background:rgba(0,0,0,.2);}\n'
    + '.stats-row div:last-child{border-right:none !important;}\n'
    + '.eye{font-family:\'Syne\',sans-serif;font-size:11px;font-weight:700;letter-spacing:.16em;color:#F07A20;text-transform:uppercase;margin-bottom:10px;display:flex;align-items:center;gap:8px;}\n'
    + '.eye::before{content:\'\';width:24px;height:2px;background:linear-gradient(90deg,#F07A20,#FF9A50);border-radius:2px;}\n'
    + 'h2{font-family:\'Bebas Neue\',cursive;font-size:clamp(40px,7vw,64px);line-height:.93;margin-bottom:16px;}\n'
    + 'h2 em{font-style:normal;color:' + acc + ';}\n'
    + '.section-sub{font-size:16px;color:#C4CBDA;max-width:560px;line-height:1.75;margin-bottom:48px;font-weight:300;}\n'
    + '.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}\n'
    + '.cta-block{background:linear-gradient(135deg,#0F1219,#161B26);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:60px;text-align:center;margin:0 5% 80px;}\n'
    + '.cta-block h2{font-size:clamp(40px,7vw,60px);margin-bottom:16px;}\n'
    + '.cta-block p{font-size:16px;color:#C4CBDA;max-width:500px;margin:0 auto 32px;line-height:1.7;}\n'
    + 'footer{background:#060E18;border-top:1px solid rgba(255,255,255,.06);padding:28px 5%;text-align:center;}\n'
    + 'footer p{font-size:12px;color:#8892A8;}\n'
    + 'footer a{color:#F07A20;}\n'
    + '.mockup-panels{display:grid;grid-template-columns:1fr 1fr;gap:0;border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,.08);}\n'
    + '.mockup-panel{position:relative;}\n'
    + '.mockup-panel img{width:100%;height:280px;object-fit:cover;display:block;}\n'
    + '.panel-label{position:absolute;top:12px;left:12px;z-index:2;font-family:\'Syne\',sans-serif;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:5px 12px;border-radius:99px;}\n'
    + '.panel-desc{padding:14px 18px;font-size:12px;color:#8892A8;background:#0F1219;border-top:1px solid rgba(255,255,255,.06);}\n'
    + '.price-section{padding:88px 5%;background:#0F1219;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);}\n'
    + '.price-inner{max-width:1100px;margin:0 auto;}\n'
    + '.price-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;margin-top:48px;}\n'
    + '.bundle-card{background:#07090C;border:2px solid rgba(255,255,255,.15);border-radius:20px;overflow:hidden;position:sticky;top:80px;}\n'
    + '.bundle-banner{background:linear-gradient(90deg,#F07A20,#FF9A50);padding:10px 24px;text-align:center;font-family:\'Syne\',sans-serif;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#fff;}\n'
    + '.bundle-body{padding:28px 28px 24px;}\n'
    + '.bundle-price{font-family:\'Bebas Neue\',cursive;font-size:56px;line-height:1;color:#F07A20;}\n'
    + '.savings-pill{display:inline-block;background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.25);border-radius:99px;padding:4px 12px;font-family:\'Syne\',sans-serif;font-size:11px;font-weight:700;color:#4ADE80;margin:8px 0 20px;}\n'
    + '.start-small{margin-top:16px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:18px 20px;text-align:center;}\n'
    + '@media(max-width:860px){.svc-grid{grid-template-columns:1fr 1fr;}.price-grid{grid-template-columns:1fr;}.mockup-panels{grid-template-columns:1fr;}.bundle-card{position:static;}}\n'
    + '@media(max-width:480px){.svc-grid{grid-template-columns:1fr;}.stats-row{flex-wrap:wrap;}.hero{padding:60px 5% 48px;}}\n'
    + '</style>\n</head>\n<body>\n'

    // Nav
    + '<nav>\n'
    + '<div class="n-logo">'
    + '<svg width="32" height="32" viewBox="0 0 40 40" fill="none"><path d="M20 4 L28 16 L20 12 L12 16 Z" fill="#F07A20"/><path d="M20 12 L28 16 L24 28 L20 24 L16 28 L12 16 Z" fill="#EDE8DC" opacity=".9"/><path d="M20 24 L24 28 L20 36 L16 28 Z" fill="#F07A20" opacity=".7"/></svg>'
    + '<div class="n-brand"><a href="/"><span>e-</span>Falconry</a></div>'
    + '</div>\n'
    + '<button class="n-cta" onclick="window.location.href=\'/#score\'">Get Free Website Audit →</button>\n'
    + '</nav>\n'

    // Hero
    + '<section class="hero">\n'
    + '<div class="hero-glow"></div>\n'
    + '<div class="hero-inner">\n'
    + '<div class="pill">AI-First Agency &nbsp;·&nbsp; Built for ' + data.title + '</div>\n'
    + '<h1>' + data.h1a + '<br><em>' + data.h1b + '</em></h1>\n'
    + '<p class="hero-sub">' + data.hero + '</p>\n'
    + '<button class="btn-p" onclick="window.location.href=\'/#score\'">Get Your Free Website Audit</button>'
    + '<button class="btn-s" onclick="document.getElementById(\'services\').scrollIntoView({behavior:\'smooth\'})">See What We Offer ↓</button>\n'
    + '</div>\n</section>\n'

    // Stats
    + '<div class="stats-row">' + buildStats(data.stats, acc) + '</div>\n'

    // Mockup demo
    + '<section style="padding:88px 5% 0">\n<div style="max-width:1100px;margin:0 auto">\n'
    + '<div class="eye">AI Project Mockups</div>\n'
    + '<h2>Show Clients the<br><em>Finished Project</em></h2>\n'
    + '<p class="section-sub">Before you move a single yard of material — show your customer exactly what they are getting. AI-rendered mockups close jobs that would otherwise stall.</p>\n'
    + '<div class="mockup-panels">\n'
    + '<div class="mockup-panel">'
    + '<span class="panel-label" style="background:rgba(0,0,0,.75);color:#C4CBDA">Before</span>'
    + '<img src="' + data.beforeImg + '" alt="' + data.beforeLabel + '" loading="lazy">'
    + '<div class="panel-desc">' + data.beforeLabel + ' — ' + data.beforeDesc + '</div>'
    + '</div>\n'
    + '<div class="mockup-panel">'
    + '<span class="panel-label" style="background:#F07A20;color:#fff">AI Mockup</span>'
    + '<img src="' + data.afterImg + '" alt="' + data.afterLabel + '" loading="lazy">'
    + '<div class="panel-desc">' + data.afterLabel + ' — ' + data.afterDesc + '</div>'
    + '</div>\n'
    + '</div>\n'
    + quoteSection
    + '</div>\n</section>\n'

    // Services
    + '<section style="padding:88px 5%;" id="services">\n<div style="max-width:1100px;margin:0 auto">\n'
    + '<div class="eye">Everything We Offer</div>\n'
    + '<h2>Built for<br><em>' + data.title + '</em></h2>\n'
    + '<p class="section-sub">Every tool designed specifically for how ' + niche + ' contractors win, quote, and close jobs.</p>\n'
    + '<div class="svc-grid">' + buildServices(data.services, acc) + '</div>\n'
    + '</div>\n</section>\n'

    // Pricing
    + '<div class="price-section">\n<div class="price-inner">\n'
    + '<div class="eye">Pricing</div>\n'
    + '<h2>Pick What<br><em>You Need.</em></h2>\n'
    + '<p class="section-sub">Every service is available individually. No contracts, no minimums. Or take everything at once with The Full Stack and save.</p>\n'
    + '<div class="price-grid">\n'

    // Left: a la carte
    + '<div>\n'
    + '<div style="font-family:\'Syne\',sans-serif;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#F07A20;margin-bottom:20px">A La Carte — Pick Any Service</div>\n'
    + '<div style="display:flex;flex-direction:column;gap:10px">'
    + buildAlacarteItems(data.alacarte)
    + '</div>\n</div>\n'

    // Right: bundle
    + '<div>\n'
    + '<div style="font-family:\'Syne\',sans-serif;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#F07A20;margin-bottom:20px">The Full Stack — Everything at Once</div>\n'
    + '<div class="bundle-card">\n'
    + '<div class="bundle-banner">Most Popular</div>\n'
    + '<div class="bundle-body">\n'
    + '<div style="font-family:\'Syne\',sans-serif;font-size:18px;font-weight:800;margin-bottom:4px">' + data.bundle_name + '</div>\n'
    + '<div style="display:flex;align-items:baseline;gap:4px">'
    + '<span class="bundle-price">' + data.bundle_price + '</span>'
    + '<span style="font-size:14px;color:#8892A8">/mo</span>'
    + '</div>\n'
    + '<div class="savings-pill">' + data.bundle_savings + '</div>\n'
    + '<div style="margin-bottom:20px">' + buildBundleIncludes(data.bundle_includes) + '</div>\n'
    + (data.bundle_addons && data.bundle_addons.length ? '<div style="border-top:1px solid rgba(255,255,255,.07);padding-top:16px;margin-bottom:20px"><div style="font-family:\'Syne\',sans-serif;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8892A8;margin-bottom:10px">Popular Add-Ons</div>' + buildBundleAddons(data.bundle_addons) + '</div>\n' : '')
    + '<button class="btn-p" style="width:100%;font-size:15px;padding:15px" onclick="window.location.href=\'/#score\'">Get Started — Free Audit First →</button>\n'
    + (data.bundle_note ? '<p style="font-size:12px;color:#8892A8;margin-top:14px;line-height:1.6;text-align:center">' + data.bundle_note + '</p>\n' : '')
    + '</div>\n</div>\n'
    + '<div class="start-small">'
    + '<div style="font-size:13px;color:#8892A8;margin-bottom:6px">Or start small — no commitment</div>'
    + '<div style="font-family:\'Syne\',sans-serif;font-size:18px;font-weight:800;margin-bottom:4px">$99 Website Only</div>'
    + '<div style="font-size:12px;color:#8892A8;margin-bottom:14px">One-time · Nothing required from you · Live in 48hrs</div>'
    + '<button onclick="window.location.href=\'/#score\'" style="background:transparent;border:1px solid rgba(255,255,255,.15);color:#C4CBDA;font-family:\'Syne\',sans-serif;font-weight:700;font-size:13px;padding:10px 22px;border-radius:8px;cursor:pointer;width:100%">Start with $99 →</button>'
    + '</div>\n'
    + '</div>\n'
    + '</div>\n</div>\n</div>\n'

    // CTA
    + '<div class="cta-block">\n'
    + '<h2>' + data.cta + '</h2>\n'
    + '<p>Start with a $99 website. Add the AI tools that move the needle for ' + niche + ' contractors. No contracts, no commitments.</p>\n'
    + '<button class="btn-p" style="font-size:16px;padding:17px 40px" onclick="window.location.href=\'/#score\'">Get Started — Audit My Website Free →</button>\n'
    + '</div>\n'

    // Footer
    + '<footer>\n'
    + '<p><a href="/">← Back to e-Falconry</a> &nbsp;·&nbsp; AI-First Agency for Local Contractors &nbsp;·&nbsp; <a href="mailto:hello@efalconry.com">hello@efalconry.com</a></p>\n'
    + '</footer>\n'
    + '</body>\n</html>';

  return html;
}

export default function handler(req, res) {
  var niche = ((req.query && req.query.niche) || '').toLowerCase().trim();
  if (!niche) {
    niche = ((req.url || '').split('?')[0].replace(/^\/api\//, '').replace(/^\//, '')).toLowerCase().trim();
  }
  var data = NICHES[niche];
  if (!data) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(404).send('<html><body style="font-family:sans-serif;padding:40px;background:#07090C;color:#EDE8DC"><h2 style="color:#F07A20">Page not found</h2><p style="color:#8892A8">Available: ' + Object.keys(NICHES).join(', ') + '</p></body></html>');
  }
  var html = renderNichePage(niche, data);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=3600');
  return res.status(200).send(html);
}
