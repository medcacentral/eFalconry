// e-Falconry Intake API
// Receives job submissions from contractor app
// Notifies Martin/Cowork via email with all details
// Returns job ID + "submitted" status

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  // ── Admin: mark job as delivered ─────────────────────────
  if (req.method === 'GET' && req.query.action === 'deliver') {
    const { jobId, contractorEmail, contractorName } = req.query;
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey && contractorEmail) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'e-Falconry <hello@efalconry.com>',
          to: contractorEmail,
          subject: 'Your quote and mockups are ready ✓',
          html: `<div style="font-family:sans-serif;max-width:600px">
            <h2 style="color:#F07A20">Your deliverables are ready!</h2>
            <p>Hi ${contractorName || 'there'} — your quote, project renders, and social media content for job <strong>${jobId}</strong> are attached and on their way.</p>
            <p>Check your email for the full package. If you have any questions or want changes, just reply to this email.</p>
            <p>— Team e-Falconry</p>
          </div>`
        })
      }).catch(console.error);
    }
    return res.status(200).json({ success: true, jobId, status: 'delivered' });
  }

  // ── Submit new job ────────────────────────────────────────
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    jobId,
    contractorName,
    contractorBiz,
    contractorEmail,
    contractorPhone,
    clientName,
    clientPhone,
    clientEmail,
    projectType,
    area,
    thickness,
    budget,
    notes,
    photos,       // array of base64 strings
    hasVoice,
    voiceTranscript,
    submitted,
  } = req.body || {};

  if (!projectType && !notes) {
    return res.status(400).json({ error: 'Project type or notes required' });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL || 'hello@efalconry.com';

  // Build photo HTML for email
  const photoSection = photos?.length
    ? `<h3>Site Photos (${photos.length})</h3>
       <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
         ${photos.slice(0, 6).map((p, i) =>
           `<img src="${p.startsWith('data:') ? p : 'data:image/jpeg;base64,' + p}"
                style="width:100%;border-radius:8px;border:1px solid #eee"
                alt="Site photo ${i+1}">`
         ).join('')}
       </div>`
    : '<p style="color:#888">No photos submitted</p>';

  const emailHtml = `
    <div style="font-family:sans-serif;max-width:700px">
      <div style="background:#07090C;padding:16px 20px;border-radius:8px 8px 0 0">
        <span style="font-family:sans-serif;font-size:18px;font-weight:900;color:#F07A20">e-</span>
        <span style="font-family:sans-serif;font-size:18px;font-weight:900;color:#EDE8DC">Falconry</span>
        <span style="margin-left:12px;font-size:12px;color:#8892A8">New Job Submission</span>
      </div>
      <div style="background:#fff;padding:24px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px">

        <h2 style="margin-bottom:4px;color:#1a1a1a">📋 New Job — ${projectType || 'Unspecified'}</h2>
        <p style="color:#888;font-size:13px;margin-bottom:20px">Submitted ${new Date(submitted || Date.now()).toLocaleString()} · Job ID: ${jobId}</p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px">
          <div style="background:#f8f8f8;border-radius:8px;padding:14px">
            <div style="font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#999;margin-bottom:6px">Contractor</div>
            <div style="font-weight:700;font-size:15px">${contractorBiz || contractorName || '—'}</div>
            ${contractorName ? `<div style="font-size:13px;color:#555">${contractorName}</div>` : ''}
            ${contractorEmail ? `<div style="font-size:13px;color:#555">${contractorEmail}</div>` : ''}
            ${contractorPhone ? `<div style="font-size:13px;color:#555">${contractorPhone}</div>` : ''}
          </div>
          <div style="background:#f8f8f8;border-radius:8px;padding:14px">
            <div style="font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#999;margin-bottom:6px">Client</div>
            <div style="font-weight:700;font-size:15px">${clientName || '—'}</div>
            ${clientPhone ? `<div style="font-size:13px;color:#555">${clientPhone}</div>` : ''}
            ${clientEmail ? `<div style="font-size:13px;color:#555">${clientEmail}</div>` : ''}
          </div>
        </div>

        <h3 style="margin-bottom:10px">Project Details</h3>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;font-size:14px">
          <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#888;width:40%">Project type</td><td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-weight:600">${projectType || '—'}</td></tr>
          ${area ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#888">Area</td><td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-weight:600">${area} sq ft</td></tr>` : ''}
          ${thickness ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#888">Thickness</td><td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-weight:600">${thickness} inches</td></tr>` : ''}
          ${budget ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#888">Budget</td><td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-weight:600">~$${parseFloat(budget).toLocaleString()}k</td></tr>` : ''}
          <tr><td style="padding:8px 0;color:#888">Photos</td><td style="padding:8px 0;font-weight:600">${photos?.length || 0} submitted</td></tr>
        </table>

        ${notes ? `<h3>Notes</h3><div style="background:#f8f8f8;border-radius:8px;padding:14px;font-size:14px;color:#333;line-height:1.7;margin-bottom:20px;white-space:pre-line">${notes}</div>` : ''}
        ${voiceTranscript ? `<h3>Voice Transcript</h3><div style="background:#fff8f0;border-left:3px solid #F07A20;border-radius:4px;padding:14px;font-size:14px;color:#333;line-height:1.7;margin-bottom:20px">${voiceTranscript}</div>` : ''}

        ${photoSection}

        <div style="margin-top:24px;padding:16px;background:#fff8f0;border-radius:8px;border:1px solid rgba(240,122,32,.2)">
          <strong style="color:#F07A20">Action needed:</strong>
          Generate quote + mockups + social content for ${contractorBiz || contractorName}, then deliver to
          ${contractorEmail ? `<a href="mailto:${contractorEmail}">${contractorEmail}</a>` : 'contractor'}.
          <br><br>
          When done, mark as delivered:
          <a href="https://efalconry.com/api/intake?action=deliver&jobId=${jobId}&contractorEmail=${encodeURIComponent(contractorEmail||'')}&contractorName=${encodeURIComponent(contractorName||'')}"
             style="display:inline-block;margin-top:8px;background:#F07A20;color:#fff;padding:8px 18px;border-radius:6px;text-decoration:none;font-weight:700">
            Mark as Delivered →
          </a>
        </div>
      </div>
    </div>
  `;

  if (resendKey) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'e-Falconry App <hello@efalconry.com>',
        to: notifyEmail,
        subject: `📋 New Job: ${projectType} — ${contractorBiz || contractorName || 'Contractor'}`,
        html: emailHtml,
      })
    }).catch(e => console.error('Notify email failed:', e.message));
  } else {
    console.log('RESEND_API_KEY not set — job received but no email sent:', { jobId, projectType, contractorName });
  }

  return res.status(200).json({
    success: true,
    jobId,
    status: 'submitted',
    message: 'Received! We\'ll have your quote and mockups ready within 2 hours.',
    estimatedDelivery: '~2 hours during business hours',
  });
}
