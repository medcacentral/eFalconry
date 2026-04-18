// Automated follow-up sequence — runs on a schedule via cron
// Day 3: email with preview screenshot
// Day 7: SMS nudge
// Day 14: final email "taking this down"
// Triggered by Vercel Cron (configure in vercel.json)

export default async function handler(req, res) {
  // Simple auth — Vercel cron sends this header
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const sheetWebhook = process.env.SHEET_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const twilioSid = process.env.TWILIO_ACCOUNT_SID;
  const twilioToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioFrom = process.env.TWILIO_PHONE_NUMBER;
  const apiKey = process.env.ANTHROPIC_API_KEY;

  // In production: fetch pending follow-ups from Google Sheet or DB
  // For now, log that the cron ran successfully
  console.log(JSON.stringify({ event: 'followup_cron', timestamp: new Date().toISOString() }));

  // Structure: follow-up logic would iterate leads from sheet
  // Each lead has: sentDate, status, email, phone, bizName, previewUrl, followupDay
  // Day 3 → email, Day 7 → SMS, Day 14 → final email

  return res.status(200).json({ ok: true, message: 'Follow-up cron ran', timestamp: new Date().toISOString() });
}

// Exported helpers used by Apps Script webhook
export async function sendDay3Email(to, bizName, previewUrl, resendKey) {
  if (!resendKey || !to) return;
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Martin at e-Falconry <hello@efalconry.com>',
      to,
      subject: `Still available — your new website for ${bizName}`,
      html: `<div style="font-family:sans-serif;max-width:600px">
        <p>Hi — just wanted to make sure you had a chance to see this.</p>
        <p>Your website preview for <b>${bizName}</b> is still live:</p>
        <p><a href="${previewUrl}" style="color:#F07A20;font-size:16px;font-weight:bold">${previewUrl}</a></p>
        <p>It's yours for $99, nothing required from you, and it goes live within 48 hours of payment.</p>
        <p>Any questions — just reply to this email.</p>
        <p>— Martin</p>
      </div>`,
    }),
  }).catch(console.error);
}

export async function sendDay7SMS(to, bizName, previewUrl, twilioSid, twilioToken, twilioFrom) {
  if (!twilioSid || !to) return;
  const msg = `Hi — still have your site preview up for ${bizName}: ${previewUrl} — $99, nothing needed from you. Reply STOP to opt out.`;
  await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ To: to, From: twilioFrom, Body: msg }).toString(),
  }).catch(console.error);
}

export async function sendDay14Email(to, bizName, previewUrl, resendKey) {
  if (!resendKey || !to) return;
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Martin at e-Falconry <hello@efalconry.com>',
      to,
      subject: `Last chance — taking down ${bizName}'s preview soon`,
      html: `<div style="font-family:sans-serif;max-width:600px">
        <p>Hi — this is my last follow-up, I promise.</p>
        <p>The website preview we built for <b>${bizName}</b> is still at <a href="${previewUrl}">${previewUrl}</a> but we'll be reassigning it to someone else soon.</p>
        <p>If you'd like to claim it — $99, nothing from you, live in 48 hours — just reply or click below.</p>
        <p><a href="${previewUrl}" style="display:inline-block;background:#F07A20;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:bold">Claim for $99 →</a></p>
        <p>If the timing isn't right, no worries at all — feel free to reach out anytime.</p>
        <p>— Martin</p>
      </div>`,
    }),
  }).catch(console.error);
}
