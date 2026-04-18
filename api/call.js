// e-Falconry AI Voice Call — triggers Vapi.ai outbound call
// Aria is a conversational AI agent that demonstrates AI while selling it

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { phone, bizName, city, category, score, issues, previewUrl, ownerName } = req.body || {};

  if (!phone || !bizName) {
    return res.status(400).json({ error: 'phone and bizName required' });
  }

  const vapiKey = process.env.VAPI_API_KEY;
  if (!vapiKey) return res.status(500).json({ error: 'VAPI_API_KEY not configured' });

  const firstName = ownerName ? ownerName.split(' ')[0] : 'there';
  const cityShort = (city || '').replace(/, [A-Z]{2}$/, '');
  const topIssue = issues ? issues.split(' | ')[0] : null;
  const hasScore = score && score !== 'N/A';

  // Build the assistant prompt dynamically per lead
  const systemPrompt = `You are Aria, a friendly and professional AI assistant calling on behalf of e-Falconry, a web design and AI services company based in Seattle.

You are calling ${bizName}${cityShort ? ' in ' + cityShort : ''}. ${ownerName ? 'The owner\'s name is ' + ownerName + '.' : ''}

YOUR GOAL: Let them know we built a free website preview for their business, get them to look at it, and ideally close them on the $99 offer or get their email for follow-up.

KEY FACTS:
- We built a live website preview specifically for ${bizName} — it's at: ${previewUrl}
- The site is $99 one-time — we built it first, they just claim it
- Nothing is required from them — we handle everything
- If they want AI features (chatbot, booking, quote automation) those are add-on plans
${hasScore ? `- Their current website scored ${score}/100 — well below average` : '- They have no website at all'}
${topIssue ? `- Main issue found: ${topIssue}` : ''}

CONVERSATION FLOW:
1. Introduce yourself as Aria from e-Falconry
2. Mention you're an AI — lean into it, it's a demonstration of what you sell
3. Tell them you built a website preview for their business
4. Offer to text them the link right now
5. If they're interested, confirm their number and say the SMS is on its way
6. If they ask about price — $99 one-time, no commitment, no work from them
7. If they ask about AI features — explain the $399/mo AI Pro plan briefly
8. If they're not interested — be gracious, mention the preview stays live, wish them well

TONE: Warm, confident, conversational. Not salesy. You're doing them a favor by calling — lead with that energy.

IMPORTANT: When you say the URL out loud, say it as: "efalconry dot com slash p slash ${slugify(bizName)}" — do not read out the full URL with parameters.

If they ask "are you a real person?" — say: "I'm actually an AI assistant — and honestly, this is exactly what we can set up for your business. Imagine your phone being answered 24/7 by an AI like me, booking jobs, answering questions, following up with leads. That's what our AI Pro plan does."

Keep the call under 2 minutes. Be natural. Allow silences. Don't interrupt.`;

  try {
    const resp = await fetch('https://api.vapi.ai/call/phone', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${vapiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumberId: process.env.VAPI_PHONE_NUMBER_ID,
        customer: {
          number: phone,
          name: ownerName || bizName,
        },
        assistant: {
          name: 'Aria',
          voice: {
            provider: '11labs',
            voiceId: 'rachel', // warm, professional female voice
          },
          model: {
            provider: 'openai',
            model: 'gpt-4o',
            messages: [{ role: 'system', content: systemPrompt }],
          },
          firstMessage: `Hi ${firstName}, my name is Aria — I'm an AI assistant calling from e-Falconry. I'll keep this quick — we actually built a website specifically for ${bizName}, and I wanted to make sure you had a chance to see it before we move on. Do you have about 30 seconds?`,
          endCallPhrases: ['goodbye', 'bye', 'not interested', 'remove me', 'stop calling'],
          recordingEnabled: true,
          silenceTimeoutSeconds: 30,
          maxDurationSeconds: 180,
          backgroundDenoisingEnabled: true,
        },
        // Webhook — Vapi will POST call outcome to our handler
        assistantOverrides: {
          serverUrl: `${process.env.SITE_URL || 'https://efalconry.com'}/api/vapi-webhook`,
        },
        metadata: {
          bizName,
          phone,
          previewUrl,
          score: score || 'N/A',
        },
      }),
    });

    const data = await resp.json();
    if (!resp.ok) throw new Error(data.message || data.error || 'Vapi error');

    return res.status(200).json({
      success: true,
      callId: data.id,
      message: `Call initiated for ${bizName}`,
    });

  } catch (e) {
    console.error('Call error:', e.message);
    return res.status(500).json({ error: e.message });
  }
}

function slugify(str) {
  return (str || '').toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
