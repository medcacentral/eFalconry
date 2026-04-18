// e-Falconry Business Enrichment
// Scrapes their website + Google Places to extract real business data
// Used to power personalized preview pages

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { url, placeId, bizName, category, city } = req.body || {};
  if (!bizName) return res.status(400).json({ error: 'bizName required' });

  const placesKey = process.env.GOOGLE_PLACES_API_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;

  let websiteContent = null;
  let placesData = null;

  // ── 1. Scrape their website ─────────────────────────────
  if (url && url !== 'NO WEBSITE') {
    try {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), 8000);
      const pageResp = await fetch(url, {
        signal: controller.signal,
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; eFalconryBot/1.0)' }
      });
      const html = await pageResp.text();

      // Extract meaningful content — strip scripts/styles
      const stripped = html
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<nav[\s\S]*?<\/nav>/gi, '')
        .replace(/<footer[\s\S]*?<\/footer>/gi, '')
        .replace(/<header[\s\S]*?<\/header>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, 6000);

      // Also extract meta description and title
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      const metaDesc = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
      const metaKeywords = html.match(/<meta[^>]+name=["']keywords["'][^>]+content=["']([^"']+)["']/i);

      // Extract phone numbers
      const phoneMatches = html.match(/(\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/g) || [];

      // Extract email addresses
      const emailMatches = html.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];

      websiteContent = {
        title: titleMatch?.[1]?.trim() || '',
        metaDescription: metaDesc?.[1]?.trim() || '',
        keywords: metaKeywords?.[1]?.trim() || '',
        phones: [...new Set(phoneMatches)].slice(0, 3),
        emails: [...new Set(emailMatches.filter(e => !e.includes('example') && !e.includes('test')))].slice(0, 2),
        bodyText: stripped,
      };
    } catch(e) {
      console.log('Website scrape failed:', e.message);
    }
  }

  // ── 2. Fetch Google Places details ─────────────────────
  if (placesKey) {
    try {
      let pid = placeId;

      // If no placeId, search for it
      if (!pid) {
        const searchQuery = encodeURIComponent(`${bizName} ${city || ''}`);
        const searchResp = await fetch(
          `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&key=${placesKey}`,
          { headers: { 'User-Agent': 'eFalconryBot' } }
        );
        const searchData = await searchResp.json();
        pid = searchData.results?.[0]?.place_id;
      }

      if (pid) {
        const fields = [
          'name', 'formatted_address', 'formatted_phone_number',
          'website', 'rating', 'user_ratings_total', 'opening_hours',
          'photos', 'reviews', 'business_status', 'types',
          'price_level', 'url'
        ].join(',');

        const detailResp = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${pid}&fields=${fields}&key=${placesKey}`,
          { headers: { 'User-Agent': 'eFalconryBot' } }
        );
        const detailData = await detailResp.json();
        const place = detailData.result || {};

        // Get photo URLs (first 3)
        const photos = (place.photos || []).slice(0, 3).map(p =>
          `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${p.photo_reference}&key=${placesKey}`
        );

        // Parse opening hours
        let hours = null;
        if (place.opening_hours?.weekday_text) {
          hours = place.opening_hours.weekday_text;
        }

        // Get top reviews
        const topReviews = (place.reviews || [])
          .filter(r => r.rating >= 4)
          .slice(0, 4)
          .map(r => ({
            rating: r.rating,
            text: r.text?.substring(0, 200),
            author: r.author_name,
            time: r.relative_time_description,
          }));

        placesData = {
          placeId: pid,
          name: place.name,
          address: place.formatted_address,
          phone: place.formatted_phone_number,
          website: place.website,
          rating: place.rating,
          reviewCount: place.user_ratings_total,
          hours,
          photos,
          reviews: topReviews,
          types: place.types,
          googleMapsUrl: place.url,
          isOpen: place.opening_hours?.open_now,
        };
      }
    } catch(e) {
      console.log('Places fetch failed:', e.message);
    }
  }

  // ── 3. Use Claude to synthesize everything into rich business profile ──
  if (!anthropicKey) {
    return res.status(200).json({ websiteContent, placesData, profile: null });
  }

  let profile = null;
  try {
    const context = [
      `Business: ${bizName}`,
      `Category: ${category || 'local business'}`,
      `City: ${city || 'unknown'}`,
      placesData ? `Google Rating: ${placesData.rating} stars (${placesData.reviewCount} reviews)` : '',
      placesData?.address ? `Address: ${placesData.address}` : '',
      placesData?.phone ? `Phone: ${placesData.phone}` : '',
      placesData?.hours ? `Hours:\n${placesData.hours.join('\n')}` : '',
      placesData?.reviews?.length ? `Real customer reviews:\n${placesData.reviews.map(r => `"${r.text}" — ${r.author} (${r.rating}★)`).join('\n')}` : '',
      websiteContent?.title ? `Their website title: ${websiteContent.title}` : '',
      websiteContent?.metaDescription ? `Their meta description: ${websiteContent.metaDescription}` : '',
      websiteContent?.bodyText ? `Website content (first 3000 chars):\n${websiteContent.bodyText.substring(0, 3000)}` : '',
    ].filter(Boolean).join('\n\n');

    const prompt = `You are analyzing a real local business to help build them a stunning new website preview.

BUSINESS DATA:
${context}

Extract and create the following. Be SPECIFIC to this actual business — use their real info, not generic placeholders. Where you can infer something from the content, do so. Where you truly don't know, use smart defaults for their industry.

Return ONLY valid JSON:
{
  "tagline": "Their most compelling unique selling point in one sentence (max 12 words). Make it specific to what makes THIS business stand out.",
  "heroHeadline1": "3-5 word powerful first line for hero section",
  "heroHeadline2": "3-5 word second line — the emotional hook or differentiator",
  "about": "2-3 sentence business description that feels personal and real. Use details from their site/reviews.",
  "services": [
    {"name": "Service Name", "description": "Specific 1-sentence description from their actual offerings"},
    {"name": "Service Name", "description": "..."},
    {"name": "Service Name", "description": "..."},
    {"name": "Service Name", "description": "..."},
    {"name": "Service Name", "description": "..."},
    {"name": "Service Name", "description": "..."}
  ],
  "uspBullets": [
    "Specific trust point 1 (e.g. '30-minute response time guaranteed')",
    "Specific trust point 2",
    "Specific trust point 3",
    "Specific trust point 4"
  ],
  "ctaText": "Action-oriented CTA button text specific to their business (5-7 words)",
  "reviewHighlight": "The single best quote from their reviews, or null if no reviews",
  "reviewAuthor": "Author name of that review, or null",
  "yearsInBusiness": number or null,
  "phone": "phone number or null",
  "address": "full address or null",
  "email": "email address or null",
  "hours": ["Mon-Fri: 8am-6pm", "Sat: 9am-4pm", "Sun: Emergency only"] or null,
  "emergencyAvailable": true or false,
  "licenseInfo": "any licensing info found, or null",
  "serviceAreas": ["City1", "City2"] or null
}`;

    const claudeResp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': anthropicKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1200,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const claudeData = await claudeResp.json();
    const raw = claudeData.content?.[0]?.text || '{}';
    profile = JSON.parse(raw.replace(/```json|```/g, '').trim());

    // Merge with Places data for phone/address fallback
    if (placesData) {
      profile.phone = profile.phone || placesData.phone;
      profile.address = profile.address || placesData.address;
      profile.rating = placesData.rating;
      profile.reviewCount = placesData.reviewCount;
      profile.photos = placesData.photos;
      profile.googleMapsUrl = placesData.googleMapsUrl;
      profile.realReviews = placesData.reviews;
    }
    if (websiteContent) {
      profile.phones = websiteContent.phones;
      profile.emails = websiteContent.emails;
    }

  } catch(e) {
    console.error('Profile synthesis failed:', e.message);
  }

  return res.status(200).json({ profile, placesData, websiteContent });
}
