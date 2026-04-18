// e-Falconry AI Project Mockup Generator
// Takes photos of current space + project description
// Generates 3 photorealistic renders of the finished project using Gemini Imagen

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    bizName,
    category,       // landscaping, contractor, roofing, etc.
    description,    // detailed description of finished project
    images,         // array of base64 image strings
    contactEmail,
    contactPhone,
  } = req.body || {};

  if (!description) return res.status(400).json({ error: 'Project description required' });
  if (!bizName) return res.status(400).json({ error: 'Business name required' });

  const geminiKey = process.env.GEMINI_API_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL || 'hello@efalconry.com';

  if (!geminiKey) return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });

  // ── Step 1: Use Claude to craft optimal image generation prompts ──
  let imagePrompts = [];
  try {
    const promptBuilderResp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': anthropicKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 800,
        messages: [{
          role: 'user',
          content: `You are an expert at writing prompts for AI image generation to create photorealistic architectural and landscaping mockups.

Business: ${bizName}
Project type: ${category || 'home improvement'}
Project description: ${description}
${images?.length ? `Reference photos provided: ${images.length} photos of the current space` : ''}

Create 3 different image generation prompts for this project. Each prompt should:
1. Be photorealistic — look like a real professional photo, not a rendering
2. Show the COMPLETED project as it would look in real life
3. Include realistic lighting, shadows, textures, and materials
4. Specify a slightly different angle or time of day for variety
5. Be detailed enough to generate a compelling sales mockup

Return ONLY valid JSON:
{
  "prompts": [
    {
      "label": "Main View",
      "prompt": "Photorealistic photo of [detailed description of finished project, angle, lighting, materials, style]..."
    },
    {
      "label": "Detail View", 
      "prompt": "..."
    },
    {
      "label": "Lifestyle View",
      "prompt": "..."
    }
  ],
  "projectSummary": "2-sentence summary of what this mockup package will show"
}`
        }]
      })
    });

    const promptData = await promptBuilderResp.json();
    const raw = promptData.content?.[0]?.text || '{}';
    const parsed = JSON.parse(raw.replace(/```json|```/g, '').trim());
    imagePrompts = parsed.prompts || [];

    // ── Step 2: Generate images with Gemini Imagen ──────────
    const generatedImages = [];

    for (const p of imagePrompts) {
      try {
        // Build the content array — include reference images if provided
        const contentParts = [];

        // Add reference images for context if provided
        if (images?.length) {
          images.slice(0, 2).forEach(img => {
            const base64Data = img.includes(',') ? img.split(',')[1] : img;
            contentParts.push({
              inlineData: {
                mimeType: 'image/jpeg',
                data: base64Data
              }
            });
          });
          contentParts.push({
            text: `Based on this current space, generate a photorealistic image showing: ${p.prompt}`
          });
        } else {
          contentParts.push({ text: p.prompt });
        }

        const imgResp = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${geminiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ role: 'user', parts: contentParts }],
              generationConfig: {
                responseModalities: ['IMAGE', 'TEXT'],
                temperature: 1,
              }
            })
          }
        );

        const imgData = await imgResp.json();

        // Extract image from response
        const parts = imgData.candidates?.[0]?.content?.parts || [];
        const imagePart = parts.find(p => p.inlineData?.mimeType?.startsWith('image/'));

        if (imagePart?.inlineData?.data) {
          generatedImages.push({
            label: p.label,
            prompt: p.prompt,
            imageBase64: imagePart.inlineData.data,
            mimeType: imagePart.inlineData.mimeType,
          });
        }
      } catch(imgErr) {
        console.error(`Image generation failed for "${p.label}":`, imgErr.message);
      }

      // Small delay between requests
      await new Promise(r => setTimeout(r, 500));
    }

    // ── Step 3: Notify owner with results ──────────────────
    if (resendKey) {
      const imagesHtml = generatedImages.map(img => `
        <div style="margin-bottom:20px">
          <p><b>${img.label}</b></p>
          <img src="data:${img.mimeType};base64,${img.imageBase64}" style="max-width:100%;border-radius:8px;border:1px solid #eee" />
        </div>
      `).join('');

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'e-Falconry <hello@efalconry.com>',
          to: notifyEmail,
          subject: `🎨 New Mockup Request: ${bizName}`,
          html: `<div style="font-family:sans-serif;max-width:700px">
            <h2 style="color:#F07A20">New AI Mockup Request</h2>
            <p><b>Business:</b> ${bizName}</p>
            <p><b>Category:</b> ${category || '—'}</p>
            <p><b>Contact:</b> ${contactEmail || '—'} ${contactPhone ? '/ ' + contactPhone : ''}</p>
            <p><b>Project description:</b> ${description}</p>
            <p><b>Reference photos submitted:</b> ${images?.length || 0}</p>
            <hr>
            <h3>Generated Mockups (${generatedImages.length})</h3>
            ${imagesHtml || '<p>No images generated — check Gemini API key and model availability.</p>'}
          </div>`
        })
      }).catch(e => console.error('Email error:', e.message));

      // Send confirmation to customer
      if (contactEmail) {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'e-Falconry <hello@efalconry.com>',
            to: contactEmail,
            subject: `Your project mockups are ready — ${bizName}`,
            html: `<div style="font-family:sans-serif;max-width:700px">
              <h2 style="color:#F07A20">Your AI Project Mockups</h2>
              <p>Hi — your mockup renders for <b>${bizName}</b> are complete!</p>
              <p><b>Project:</b> ${description.substring(0, 200)}...</p>
              <hr style="margin:20px 0">
              ${generatedImages.map(img => `
                <div style="margin-bottom:24px">
                  <p style="font-weight:bold;color:#333">${img.label}</p>
                  <img src="data:${img.mimeType};base64,${img.imageBase64}" style="max-width:100%;border-radius:10px;border:1px solid #eee" />
                </div>
              `).join('')}
              <p style="margin-top:24px;color:#666">Use these renders to show your customer exactly what the finished project will look like. Questions? Reply to this email.</p>
              <p>— Martin<br>e-Falconry<br>hello@efalconry.com</p>
            </div>`
          })
        }).catch(e => console.error('Customer email error:', e.message));
      }
    }

    return res.status(200).json({
      success: true,
      projectSummary: parsed.projectSummary || '',
      renders: generatedImages.map(img => ({
        label: img.label,
        imageBase64: img.imageBase64,
        mimeType: img.mimeType,
      })),
      count: generatedImages.length,
    });

  } catch(e) {
    console.error('Mockup generation error:', e.message);
    return res.status(500).json({ error: 'Mockup generation failed: ' + e.message });
  }
}
