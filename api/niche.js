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

function buildServices(services, accent) {
  return services.map(function(s, i) {
    var num = String(i + 1).padStart(2, '0');
    return '<div class="svc-card">'
      + '<div class="svc-num">' + num + '</div>'
      + '<div class="svc-title">' + s[1] + '</div>'
      + '<div class="svc-desc">' + s[2] + '</div>'
      + '</div>';
  }).join('');
}

function buildStats(stats, accent) {
  return stats.map(function(s) {
    return '<div style="flex:1;text-align:center;padding:36px 20px;border-right:1px solid rgba(255,255,255,.06)">'
      + '<div style="font-family:\'Bebas Neue\',cursive;font-size:56px;line-height:1;color:' + accent + ';margin-bottom:6px;letter-spacing:.01em">' + s[0] + '</div>'
      + '<div style="font-size:11px;color:#8892A8;font-weight:700;font-family:\'Syne\',sans-serif;letter-spacing:.14em;text-transform:uppercase;line-height:1.4;max-width:140px;margin:0 auto">' + s[1] + '</div>'
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


function buildPkgCard(name, price, badge, items, featured, hasBadge) {
  var border = featured ? '2px solid rgba(240,122,32,.35)' : '1px solid rgba(255,255,255,.1)';
  var bg = featured ? '#0F1219' : '#07090C';
  var popularBadge = featured ? '<div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(90deg,#F07A20,#FF9A50);color:#fff;font-family:\'Syne\',sans-serif;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 16px;border-radius:99px;white-space:nowrap">Most Popular</div>' : '';
  var greenBadge = hasBadge ? '<div style="display:inline-block;background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.25);border-radius:99px;padding:3px 10px;font-family:\'Syne\',sans-serif;font-size:9px;font-weight:700;color:#4ADE80;margin-bottom:18px">&#10003; Website included free</div>' : '<div style="height:22px;margin-bottom:18px"></div>';
  var liHtml = items.map(function(item, i) {
    var color = (i === 0 && !hasBadge) ? '#F07A20' : '#F07A20';
    var fill = (i === 0 && hasBadge) ? 'rgba(74,222,128,.15)' : 'rgba(240,122,32,.15)';
    var stroke = (i === 0 && hasBadge) ? '#4ADE80' : '#F07A20';
    return '<li style="display:flex;align-items:flex-start;gap:8px;font-size:13px;color:#C4CBDA;margin-bottom:8px">'
      + '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" style="flex-shrink:0;margin-top:2px">'
      + '<circle cx="7" cy="7" r="6" fill="' + fill + '" stroke="' + stroke + '" stroke-width=".8"/>'
      + '<path d="M4 7l2 2 4-4" stroke="' + stroke + '" stroke-width="1.3" stroke-linecap="round"/>'
      + '</svg>' + item + '</li>';
  }).join('');
  return '<div style="background:' + bg + ';border:' + border + ';border-radius:18px;padding:28px 24px;position:relative">'
    + popularBadge
    + '<div style="font-family:\'Bebas Neue\',cursive;font-size:24px;color:#EDE8DC;margin-bottom:4px">' + name + '</div>'
    + '<div style="display:flex;align-items:baseline;gap:3px;margin-bottom:6px">'
    + '<span style="font-family:\'Bebas Neue\',cursive;font-size:48px;color:#F07A20;line-height:1">' + price + '</span>'
    + '<span style="font-size:13px;color:#8892A8">/mo</span>'
    + '</div>'
    + greenBadge
    + '<div style="border-top:1px solid rgba(255,255,255,.07);padding-top:18px">'
    + '<ul style="list-style:none;margin-bottom:24px">' + liHtml + '</ul>'
    + '<button class="btn-p" style="width:100%;font-size:14px;padding:13px" onclick="window.location.href=\'/#score\'">Get Started →</button>'
    + '</div></div>';
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
    + ':root{--acc:' + acc + ';--bg:#07090C;--bg2:#0F1219;--bg3:#161B26;--text:#EDE8DC;--t2:#C4CBDA;--t3:#8892A8;--bdr:rgba(255,255,255,.07);--bdr2:rgba(255,255,255,.11);}\n'
    + 'body{background:var(--bg);color:var(--text);font-family:\'DM Sans\',sans-serif;-webkit-font-smoothing:antialiased;}\n'
    + 'a{color:inherit;text-decoration:none;}\n'
    + 'nav{background:rgba(7,9,12,.96);backdrop-filter:blur(12px);border-bottom:1px solid rgba(240,122,32,.15);padding:0 5%;height:66px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;}\n'
    + '.n-logo{display:flex;align-items:center;gap:10px;}\n'
    + '.n-brand{font-family:\'Syne\',sans-serif;font-weight:800;font-size:16px;letter-spacing:-.02em;color:#EDE8DC;}\n'
    + '.n-brand span{color:#F07A20;}\n'
    + '.n-cta{background:linear-gradient(90deg,#F07A20,#FF9A50);color:#fff;font-family:\'Syne\',sans-serif;font-weight:700;font-size:12px;padding:10px 22px;border-radius:8px;border:none;cursor:pointer;white-space:nowrap;box-shadow:0 4px 16px rgba(240,122,32,.3);}\n'
    + '.hero{min-height:90vh;display:flex;align-items:center;position:relative;overflow:hidden;padding:88px 5% 80px;background:var(--bg);}\n'
    + '.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(240,122,32,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(240,122,32,.04) 1px,transparent 1px);background-size:64px 64px;pointer-events:none;}\n'
    + '.hero-glow{position:absolute;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,' + acc + '14 0%,transparent 65%);top:-150px;right:-150px;pointer-events:none;}\n'
    + '.hero-glow2{position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,' + acc + '0a 0%,transparent 70%);bottom:-100px;left:10%;pointer-events:none;}\n'
    + '.hero-inner{position:relative;z-index:2;max-width:1000px;width:100%;}\n'
    + '.pill{display:inline-flex;align-items:center;gap:8px;background:rgba(240,122,32,.1);border:1px solid rgba(240,122,32,.22);border-radius:99px;padding:6px 16px;font-family:\'Syne\',sans-serif;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#F07A20;margin-bottom:28px;}\n'
    + '.pill::before{content:\'\';width:5px;height:5px;border-radius:50%;background:#F07A20;}\n'
    + 'h1{font-family:\'Bebas Neue\',cursive;font-size:clamp(64px,12vw,110px);line-height:.9;margin-bottom:28px;letter-spacing:.01em;}\n'
    + 'h1 em{font-style:normal;color:' + acc + ';}\n'
    + '.hero-sub{font-size:17px;color:#C4CBDA;line-height:1.82;max-width:580px;margin-bottom:44px;font-weight:300;}\n'
    + '.btn-p{background:linear-gradient(90deg,#F07A20,#FF9A50);color:#fff;font-family:\'Syne\',sans-serif;font-weight:700;font-size:15px;padding:15px 34px;border-radius:10px;border:none;cursor:pointer;display:inline-block;box-shadow:0 8px 32px rgba(240,122,32,.35);transition:opacity .2s;}\n'
    + '.btn-s{background:transparent;color:#C4CBDA;font-family:\'Syne\',sans-serif;font-weight:700;font-size:15px;padding:15px 34px;border-radius:10px;border:1px solid rgba(255,255,255,.13);cursor:pointer;display:inline-block;margin-left:14px;transition:border-color .2s;}\n'
    + '.btn-s:hover{border-color:rgba(255,255,255,.25);}\n'
    + '.stats-row{display:flex;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);background:rgba(0,0,0,.25);}\n'
    + '.stats-row div:last-child{border-right:none !important;}\n'
    + '.section-wrap{max-width:1100px;margin:0 auto;}\n'
    + '.eye{font-family:\'Syne\',sans-serif;font-size:10.5px;font-weight:700;letter-spacing:.2em;color:#F07A20;text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:10px;}\n'
    + '.eye::before{content:\'\';width:24px;height:1.5px;background:linear-gradient(90deg,#F07A20,#FF9A50);border-radius:2px;}\n'
    + 'h2{font-family:\'Bebas Neue\',cursive;font-size:clamp(44px,7.5vw,72px);line-height:.93;margin-bottom:18px;letter-spacing:.01em;}\n'
    + 'h2 em{font-style:normal;color:' + acc + ';}\n'
    + '.section-sub{font-size:16px;color:#C4CBDA;max-width:540px;line-height:1.8;margin-bottom:52px;font-weight:300;}\n'
    + '.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}\n'
    + '.svc-card{background:#0F1219;border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:28px 24px;position:relative;overflow:hidden;transition:border-color .2s,transform .2s,box-shadow .2s;}\n'
    + '.svc-card:hover{border-color:rgba(240,122,32,.3);transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.4);}\n'
    + '.svc-card::before{content:\'\';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(240,122,32,.4),transparent);}\n'
    + '.svc-num{font-family:\'Bebas Neue\',cursive;font-size:52px;line-height:1;color:rgba(240,122,32,.1);margin-bottom:14px;letter-spacing:.01em;transition:color .3s;}\n'
    + '.svc-card:hover .svc-num{color:rgba(240,122,32,.22);}\n'
    + '.svc-title{font-family:\'Syne\',sans-serif;font-weight:700;font-size:16px;color:#EDE8DC;margin-bottom:10px;}\n'
    + '.svc-desc{font-size:13.5px;color:#8892A8;line-height:1.72;}\n'
    + '.mockup-wrap{border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,.08);display:grid;grid-template-columns:1fr 1fr;background:var(--bg2);}\n'
    + '.mockup-panel{position:relative;}\n'
    + '.mockup-panel img{width:100%;height:300px;object-fit:cover;display:block;}\n'
    + '.panel-badge{position:absolute;top:14px;left:14px;z-index:2;font-family:\'Syne\',sans-serif;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:5px 14px;border-radius:99px;backdrop-filter:blur(8px);}\n'
    + '.panel-divider{position:absolute;top:0;bottom:0;right:0;width:1px;background:rgba(255,255,255,.12);}\n'
    + '.panel-foot{padding:16px 20px;font-size:13px;color:#8892A8;background:#0F1219;border-top:1px solid rgba(255,255,255,.06);}\n'
    + '.panel-foot strong{color:#C4CBDA;display:block;font-family:\'Syne\',sans-serif;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:4px;}\n'
    + '.price-section{padding:100px 5%;background:#0F1219;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);}\n'
    + '.price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:52px;margin-bottom:28px;}\n'
    + '.pkg-card{background:#07090C;border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:28px 24px;position:relative;}\n'
    + '.pkg-card.featured{border-color:rgba(240,122,32,.4);background:linear-gradient(160deg,#181E2C 0%,#0F1219 100%);box-shadow:0 0 80px rgba(240,122,32,.1),0 0 40px rgba(240,122,32,.06);}\n'
    + '.pkg-card.featured::after{content:\'\';position:absolute;inset:-1px;border-radius:21px;background:linear-gradient(160deg,rgba(240,122,32,.14) 0%,transparent 50%);pointer-events:none;z-index:0;}\n'
    + '.pkg-card>*{position:relative;z-index:1;}\n'
    + '.pkg-popular{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(90deg,#F07A20,#FF9A50);color:#fff;font-family:\'Syne\',sans-serif;font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:4px 16px;border-radius:99px;white-space:nowrap;box-shadow:0 4px 14px rgba(240,122,32,.4);z-index:10;}\n'
    + '.pkg-name{font-family:\'Syne\',sans-serif;font-weight:700;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8892A8;margin-bottom:16px;}\n'
    + '.pkg-price{font-family:\'Bebas Neue\',cursive;font-size:60px;line-height:1;color:#F07A20;margin-bottom:4px;}\n'
    + '.pkg-card.featured .pkg-price{color:#F07A20;}\n'
    + '.pkg-mo{font-size:13px;color:#8892A8;margin-bottom:14px;}\n'
    + '.pkg-badge{display:inline-block;background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.22);border-radius:99px;padding:3px 11px;font-family:\'Syne\',sans-serif;font-size:9px;font-weight:700;color:#4ADE80;margin-bottom:16px;}\n'
    + '.pkg-sep{border-top:1px solid rgba(255,255,255,.07);margin:16px 0 18px;}\n'
    + '.pkg-li{display:flex;align-items:flex-start;gap:8px;font-size:13px;color:#C4CBDA;margin-bottom:8px;}\n'
    + '.pkg-check{flex-shrink:0;width:14px;height:14px;margin-top:2px;}\n'
    + '.pkg-btn{display:block;text-align:center;padding:12px;border-radius:10px;font-family:\'Syne\',sans-serif;font-weight:700;font-size:13.5px;margin-top:20px;border:1px solid rgba(255,255,255,.12);color:#EDE8DC;transition:border-color .2s,background .2s;}\n'
    + '.pkg-btn:hover{border-color:rgba(255,255,255,.28);}\n'
    + '.pkg-card.featured .pkg-btn{background:linear-gradient(90deg,#F07A20,#FF9A50);border:none;color:#fff;box-shadow:0 6px 24px rgba(240,122,32,.3);}\n'
    + '.escape-valve{background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:22px 28px;display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-bottom:28px;}\n'
    + '.addon-grid{background:#07090C;border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:24px 28px;}\n'
    + '.addon-item{display:flex;justify-content:space-between;background:rgba(255,255,255,.03);border-radius:8px;padding:10px 14px;margin-bottom:8px;}\n'
    + '.cta-block{background:linear-gradient(160deg,#0A0E17 0%,#0F1219 50%,#0A0E17 100%);border:1px solid rgba(255,255,255,.07);border-radius:24px;padding:70px 60px;text-align:center;margin:0 5% 80px;position:relative;overflow:hidden;}\n'
    + '.cta-glow{position:absolute;width:500px;height:300px;background:radial-gradient(ellipse,rgba(240,122,32,.08) 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;}\n'
    + '.cta-block h2{font-size:clamp(40px,7vw,64px);margin-bottom:18px;position:relative;}\n'
    + '.cta-block p{font-size:16px;color:#C4CBDA;max-width:480px;margin:0 auto 36px;line-height:1.75;position:relative;}\n'
    + 'footer{background:#05080E;border-top:1px solid rgba(255,255,255,.05);padding:28px 5%;text-align:center;}\n'
    + 'footer p{font-size:12px;color:#8892A8;}\n'
    + 'footer a{color:#F07A20;}\n'
    + '@media(max-width:900px){.svc-grid{grid-template-columns:repeat(2,1fr);}.price-grid{grid-template-columns:1fr;}.mockup-wrap{grid-template-columns:1fr;}.cta-block{padding:48px 32px;}}\n'
    + '@media(max-width:540px){.svc-grid{grid-template-columns:1fr;}.stats-row{flex-wrap:wrap;}.hero{padding:64px 5% 52px;}.cta-block{margin:0 0 60px;border-radius:0;}.escape-valve{flex-direction:column;}}\n'
    + '</style>\n</head>\n<body>\n'


    // Nav
    + '<nav>\n'
    + '<div class="n-logo">'
    + '<div style="width:32px;height:32px;background:linear-gradient(135deg,#F07A20,#FF9A50);border-radius:8px;display:flex;align-items:center;justify-content:center"><svg width="18" height="18" viewBox="0 0 40 40" fill="none"><path d="M20 4 L28 16 L20 12 L12 16 Z" fill="#fff"/><path d="M20 12 L28 16 L24 28 L20 24 L16 28 L12 16 Z" fill="rgba(255,255,255,.85)"/><path d="M20 24 L24 28 L20 36 L16 28 Z" fill="rgba(255,255,255,.65)"/></svg></div>'
    + '<div class="n-brand"><a href="/"><span>e-</span>Falconry</a></div>'
    + '</div>\n'
    + '<button class="n-cta" onclick="window.location.href=\'/#score\'">Get Free Website Audit →</button>\n'
    + '</nav>\n'

    // Hero
    + '<section class="hero">\n'
    + '<div class="hero-grid"></div>\n'
    + '<div class="hero-glow"></div>\n'
    + '<div class="hero-glow2"></div>\n'
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
    + '<section style="padding:96px 5% 0">\n<div class="section-wrap">\n'
    + '<div class="eye">AI Project Mockups</div>\n'
    + '<h2>Show Clients the<br><em>Finished Project</em></h2>\n'
    + '<p class="section-sub">Before you move a single yard of material — show your customer exactly what they are getting. AI-rendered mockups close jobs that would otherwise stall.</p>\n'
    + '<div class="mockup-wrap">\n'
    + '<div class="mockup-panel">'
    + '<span class="panel-badge" style="background:rgba(0,0,0,.7);color:#C4CBDA;border:1px solid rgba(255,255,255,.12)">Before</span>'
    + '<img src="' + data.beforeImg + '" alt="' + data.beforeLabel + '" loading="lazy">'
    + '<div class="panel-foot"><strong>' + (i===0 ? data.beforeLabel : 'AI Render') + '</strong>' + data.beforeLabel + ' — ' + data.beforeDesc + '</div>'
    + '</div>\n'
    + '<div class="mockup-panel">'
    + '<span class="panel-badge" style="background:#F07A20;color:#fff;box-shadow:0 4px 14px rgba(240,122,32,.4)">AI Mockup</span>'
    + '<img src="' + data.afterImg + '" alt="' + data.afterLabel + '" loading="lazy">'
    + '<div class="panel-foot"><strong>' + (i===0 ? data.beforeLabel : 'AI Render') + '</strong>' + data.afterLabel + ' — ' + data.afterDesc + '</div>'
    + '</div>\n'
    + '</div>\n'
    + quoteSection
    + '</div>\n</section>\n'

    // Services
    + '<section style="padding:96px 5%;" id="services">\n<div class="section-wrap">\n'
    + '<div class="eye">Everything We Offer</div>\n'
    + '<h2>Built for<br><em>' + data.title + '</em></h2>\n'
    + '<p class="section-sub">Every tool designed specifically for how ' + niche + ' contractors win, quote, and close jobs.</p>\n'
    + '<div class="svc-grid">' + buildServices(data.services, acc) + '</div>\n'
    + '</div>\n</section>\n'

    // ── New 3-package pricing ─────────────────────────────────────
    + '<div class="price-section">\n<div class="section-wrap">\n'
    + '<div class="eye">Pricing</div>\n'
    + '<h2>Simple <em>Packages.</em></h2>\n'
    + '<p class="section-sub">Start with a website included free. Add what you need as you grow. Cancel anytime.</p>\n'
    + '<div class="price-grid">\n'

    // Starter
    + '<div class="pkg-card">'
    + '<div class="pkg-name">Starter</div>'
    + '<div class="pkg-price">$79</div>'
    + '<div class="pkg-mo">/month</div>'
    + '<div class="pkg-badge">✓ Website included free</div>'
    + '<div class="pkg-sep"></div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(74,222,128,.15)" stroke="#4ADE80" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#4ADE80" stroke-width="1.3" stroke-linecap="round"/></svg>Professional website — built &amp; hosted</div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>AI Quote Generator — branded PDFs</div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>Smart Booking &amp; Calendar</div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>Automated follow-ups on every quote</div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>Review requests after every job</div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>AI Chatbot on your website 24/7</div>'
    + '<a href="/#score" class="pkg-btn">Get Started →</a>'
    + '</div>'

    // Growth
    + '<div class="pkg-card">'
    + '<div class="pkg-name">Growth</div>'
    + '<div class="pkg-price">$199</div>'
    + '<div class="pkg-mo">/month</div>'
    + '<div style="height:26px;margin-bottom:16px"></div>'
    + '<div class="pkg-sep"></div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>Everything in Starter</div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>Google Business Profile — managed</div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>Online Presence (38+ directories)</div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>Social media — 3 AI posts/week</div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>Monthly SEO &amp; ranking updates</div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>Analytics &amp; reporting dashboard</div>'
    + '<a href="/#score" class="pkg-btn">Get Started →</a>'
    + '</div>'

    // Pro (featured)
    + '<div class="pkg-card featured">'
    + '<div class="pkg-popular">Most Popular</div>'
    + '<div class="pkg-name">Pro</div>'
    + '<div class="pkg-price">$399</div>'
    + '<div class="pkg-mo">/month</div>'
    + '<div style="height:26px;margin-bottom:16px"></div>'
    + '<div class="pkg-sep"></div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>Everything in Growth</div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>Google + Facebook + TikTok Ads</div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>2 AI Project Mockups per month</div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>Dedicated account manager</div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>Monthly performance report</div>'
    + '<div class="pkg-li"><svg class="pkg-check" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(240,122,32,.15)" stroke="#F07A20" stroke-width=".8"/><path d="M4 7l2 2 4-4" stroke="#F07A20" stroke-width="1.3" stroke-linecap="round"/></svg>Priority support</div>'
    + '<a href="/#score" class="pkg-btn">Get Started →</a>'
    + '</div>'

    + '</div>\n'

    // Escape valve
    + '<div class="escape-valve">'
    + '<div><div style="font-family:\'Syne\',sans-serif;font-size:14px;font-weight:700;color:#EDE8DC;margin-bottom:4px">Just want a website for now?</div>'
    + '<div style="font-size:13px;color:#8892A8">One-time · Nothing from you · Live in 48 hours · Upgrade anytime</div></div>'
    + '<div style="text-align:right;flex-shrink:0"><div style="font-family:\'Bebas Neue\',cursive;font-size:48px;line-height:1;color:#F07A20">$99</div>'
    + '<a href="/#score" style="display:inline-block;margin-top:6px;font-family:\'Syne\',sans-serif;font-size:11px;font-weight:700;color:#F07A20;border:1px solid rgba(240,122,32,.3);padding:5px 16px;border-radius:6px">Claim Your Website →</a></div>'
    + '</div>'

    // Add-ons
    + '<div class="addon-grid">'
    + '<div style="font-family:\'Syne\',sans-serif;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#8892A8;margin-bottom:16px">Add-Ons — available on any plan</div>'
    + '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">'
    + '<div class="addon-item"><span style="font-size:13px;color:#C4CBDA">Extra AI Project Mockups (3)</span><span style="font-family:\'Syne\',sans-serif;font-size:13px;font-weight:700;color:#F07A20">$149</span></div>'
    + '<div class="addon-item"><span style="font-size:13px;color:#C4CBDA">Additional Social Platforms</span><span style="font-family:\'Syne\',sans-serif;font-size:13px;font-weight:700;color:#F07A20">$99/mo</span></div>'
    + '<div class="addon-item"><span style="font-size:13px;color:#C4CBDA">Email Marketing Campaigns</span><span style="font-family:\'Syne\',sans-serif;font-size:13px;font-weight:700;color:#F07A20">$99/mo</span></div>'
    + '<div class="addon-item"><span style="font-size:13px;color:#C4CBDA">Logo &amp; Brand Kit</span><span style="font-family:\'Syne\',sans-serif;font-size:13px;font-weight:700;color:#F07A20">$149</span></div>'
    + '</div></div>'
    + '</div>\n</div>\n'


    // CTA
    + '<div class="cta-block">\n'
    + '<div class="cta-glow"></div>\n'
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
