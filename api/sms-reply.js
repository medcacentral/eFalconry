// Twilio SMS inbound webhook — handles replies from leads
// Twilio POSTs here when someone texts back
// Claude reads the reply and responds conversationally

export default async function handler(req, res) {
  // Twilio sends form-encoded data
  if (req.method !== 'POST') return res.status(405).end();

  const body = req.body || {};
  const from    = body.From || '';
  const to      = body.To || '';
  const msgBody = body.Body || '';

  if (!msgBody || !from) {
    return res.status(200).send('<Response></Response>');
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  let reply = '';
  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 160,
        system: `You are Aria from e-Falconry, responding to an SMS from a local business owner who received a preview of their new website.

e-Falconry builds professional websites for local businesses for $99 one-time. Nothing is required from the customer — we build it and they claim it. AI plans start at $49/mo.

Payment page: https://efalconry.com/pay

Rules:
- Keep replies under 160 characters (one SMS)
- Be warm, direct, helpful
- If they say yes/interested/how — send them to efalconry.com/pay
- If they ask about price — $99 one-time, or AI plans from $49/mo
- If they say stop/no/remove — reply "Got it, removing you now. Have a great day!"
- Never use markdown, emojis, or line breaks in SMS`,
        messages: [{ role: 'user', content: msgBody }],
      }),
    });
    const data = await resp.json();
    reply = data.content?.[0]?.text || "Thanks for your message! Visit efalconry.com to claim your site for $99.";
  } catch(e) {
    reply = "Thanks for reaching out! Visit efalconry.com or call us at hello@efalconry.com";
  }

  // Handle opt-out
  const lc = msgBody.toLowerCase().trim();
  if (['stop','unsubscribe','cancel','quit','remove','optout','opt out'].includes(lc)) {
    // Twilio handles STOP automatically, but we acknowledge it
    return res.status(200).send(`<Response><Message>You've been removed. Have a great day!</Message></Response>`);
  }

  // Log the reply
  console.log(JSON.stringify({ event: 'sms_reply', from, message: msgBody, response: reply, timestamp: new Date().toISOString() }));

  // Notify owner of hot inbound reply
  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL || 'hello@efalconry.com';
  if (resendKey) {
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'e-Falconry SMS <hello@efalconry.com>',
        to: notifyEmail,
        subject: `📱 SMS Reply from ${from}`,
        html: `<div style="font-family:sans-serif"><h3 style="color:#F07A20">Inbound SMS Reply</h3><p><b>From:</b> ${from}</p><p><b>Their message:</b> "${msgBody}"</p><p><b>Aria replied:</b> "${reply}"</p></div>`,
      }),
    }).catch(console.error);
  }

  // TwiML response — Twilio sends this as the reply SMS
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(`<Response><Message>${reply}</Message></Response>`);
}
