// Preview page visit tracker
// Called when someone opens their preview link
// Logs the visit, checks if they're "hot", triggers callback if so

const visitLog = new Map(); // in-memory, replace with Upstash Redis for persistence

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { bizName, slug, timeOnPage, action } = req.body || req.query || {};

  if (!slug && !bizName) return res.status(400).json({ ok: false });

  const key = slug || bizName;
  const now = Date.now();

  // Record the visit
  const existing = visitLog.get(key) || { visits: 0, firstSeen: now, lastSeen: now, totalTime: 0, hot: false };
  existing.visits++;
  existing.lastSeen = now;
  if (timeOnPage) existing.totalTime += parseInt(timeOnPage) || 0;

  // "Hot" = visited 2+ times OR spent 30+ seconds on page
  const isHot = existing.visits >= 2 || existing.totalTime >= 30;
  existing.hot = isHot;
  visitLog.set(key, existing);

  // If hot and haven't been called back yet — trigger a callback
  if (isHot && !existing.callbackSent && existing.phone) {
    existing.callbackSent = true;
    visitLog.set(key, existing);

    // Trigger Aria to call them back
    const callUrl = `${process.env.SITE_URL || 'https://efalconry.com'}/api/call`;
    fetch(callUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: existing.phone,
        bizName: existing.bizName || key,
        city: existing.city,
        category: existing.category,
        previewUrl: existing.previewUrl,
        ownerName: existing.ownerName,
        context: 'callback — they viewed the preview page',
      }),
    }).catch(console.error);
  }

  // Notify owner if hot lead
  if (isHot && !existing.ownerNotified) {
    existing.ownerNotified = true;
    visitLog.set(key, existing);
    notifyOwnerHotLead(key, existing);
  }

  return res.status(200).json({ ok: true, visits: existing.visits, hot: isHot });
}

async function notifyOwnerHotLead(key, data) {
  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL || 'hello@efalconry.com';
  if (!resendKey) return;

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'e-Falconry Alerts <hello@efalconry.com>',
      to: notifyEmail,
      subject: `🔥 Hot lead: ${key} viewed their preview ${data.visits}x`,
      html: `<div style="font-family:sans-serif;max-width:500px">
        <h2 style="color:#F07A20">🔥 Hot Lead Alert</h2>
        <p><b>${key}</b> has viewed their preview page <b>${data.visits} times</b>.</p>
        <p>Total time on page: <b>${data.totalTime}s</b></p>
        <p>Last seen: <b>${new Date(data.lastSeen).toLocaleString()}</b></p>
        ${data.phone ? `<p><b>Phone:</b> ${data.phone}</p>` : ''}
        <p style="margin-top:16px;background:#fff8f0;padding:12px;border-left:4px solid #F07A20;border-radius:4px">
          Aria has been triggered to call them back. If they don't answer, follow up manually.
        </p>
      </div>`,
    }),
  }).catch(console.error);
}
