// Vapi.ai webhook — receives call outcomes and updates our system
// Vapi POSTs here when a call ends with the transcript and outcome

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const event = req.body;
  const type = event?.message?.type;

  // We only care about call completion events
  if (type !== 'end-of-call-report') {
    return res.status(200).json({ received: true });
  }

  const call = event.message;
  const meta = call.metadata || {};
  const transcript = call.transcript || '';
  const endReason = call.endedReason || 'unknown';
  const durationSec = call.durationSeconds || 0;

  // Determine outcome from transcript + end reason
  let outcome = 'No Answer';
  let interested = false;

  if (endReason === 'voicemail') {
    outcome = 'Voicemail';
  } else if (durationSec < 8) {
    outcome = 'Hung Up';
  } else {
    const t = transcript.toLowerCase();
    if (t.includes('yes') || t.includes('sure') || t.includes('send') || t.includes('text me') || t.includes('interested') || t.includes('tell me more')) {
      outcome = 'Interested — Send Link';
      interested = true;
    } else if (t.includes('not interested') || t.includes('no thank') || t.includes('remove') || t.includes('stop')) {
      outcome = 'Not Interested';
    } else if (durationSec > 20) {
      outcome = 'Spoke — Neutral';
    }
  }

  // If they're interested, trigger an SMS with the preview link
  if (interested && meta.phone && meta.previewUrl) {
    try {
      await sendSMS(meta.phone, meta.bizName, meta.previewUrl);
    } catch (e) {
      console.error('SMS after call failed:', e.message);
    }
  }

  // Log to console (in production: write to Google Sheet via Sheets API or a DB)
  console.log(JSON.stringify({
    event: 'call_completed',
    bizName: meta.bizName,
    phone: meta.phone,
    outcome,
    interested,
    durationSec,
    callId: call.id,
    timestamp: new Date().toISOString(),
  }));

  // Update Google Sheet via webhook if configured
  const sheetWebhookUrl = process.env.SHEET_WEBHOOK_URL;
  if (sheetWebhookUrl) {
    fetch(sheetWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: meta.phone,
        bizName: meta.bizName,
        outcome,
        durationSec,
        callId: call.id,
        transcript: transcript.substring(0, 1000),
      }),
    }).catch(e => console.error('Sheet webhook error:', e.message));
  }

  return res.status(200).json({ received: true, outcome });
}

async function sendSMS(to, bizName, previewUrl) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    console.log('Twilio not configured — skipping SMS');
    return;
  }

  const message = `Hi! This is Aria from e-Falconry — we just spoke. Here's the website preview I mentioned for ${bizName}: ${previewUrl} — It's yours for $99, nothing required from you. Reply STOP to opt out.`;

  const body = new URLSearchParams({
    To: to,
    From: fromNumber,
    Body: message,
  });

  const resp = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  });

  const data = await resp.json();
  if (!resp.ok) throw new Error(data.message || 'Twilio error');
  console.log('SMS sent:', data.sid);
}
