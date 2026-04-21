// api/test-email.js
// Smoke test for Resend integration.
// Call: https://efalconry.com/api/test-email?key=efalconry-test-2026
// Returns 200 + sends a test email if RESEND_API_KEY is set correctly.

export default async function handler(req, res) {
    const providedKey = req.query.key || req.headers['x-test-key'];
    if (providedKey !== 'efalconry-test-2026') {
          return res.status(401).json({ error: 'Unauthorized' });
    }

  const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
          return res.status(500).json({ error: 'RESEND_API_KEY not set in Vercel env vars' });
    }

  try {
        const r = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                          'Authorization': `Bearer ${resendKey}`,
                          'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                          from: 'e-Falconry <hello@efalconry.com>',
                          to: 'laargencia@gmail.com',
                          subject: 'Resend smoke test — eFalconry',
                          html: `<div style="font-family:system-ui,sans-serif;max-width:600px;padding:32px 20px">
                                    <h1 style="color:#E85D2F">Resend is working</h1>
                                              <p>Your <strong>RESEND_API_KEY</strong> is correctly configured on Vercel, and <strong>efalconry.com</strong> is verified as a sending domain.</p>
                                                        <p style="color:#666;font-size:13px">Sent at ${new Date().toISOString()}</p>
                                                                </div>`,
                }),
        });

      const data = await r.json();
        if (!r.ok) {
                return res.status(500).json({ error: 'Resend rejected the send', details: data });
        }
        return res.status(200).json({ ok: true, message: 'Test email sent — check laargencia@gmail.com', resendId: data.id });
  } catch (err) {
        return res.status(500).json({ error: 'Exception', details: err.message });
  }
}
