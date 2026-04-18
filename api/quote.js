// e-Falconry AI Quote Generator
// Generates professional PDF proposals for contractors
// Input: measurements, materials, photos, client info
// Output: branded PDF with scope of work, itemized costs, diagrams

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    // Contractor info
    contractorName,
    contractorLogo,   // base64 logo image
    contractorPhone,
    contractorEmail,
    contractorAddress,
    contractorLicense,
    // Client info
    clientName,
    clientAddress,
    clientPhone,
    clientEmail,
    // Project info
    projectType,      // patio, deck, landscaping, remodel, etc.
    projectDescription,
    measurements,     // array of {label, value, unit}
    materials,        // array of {item, quantity, unit, unitCost}
    laborItems,       // array of {description, hours, rate}
    photos,           // array of base64 images
    siteSketch,       // optional base64 diagram/sketch
    validDays,        // quote valid for X days (default 30)
    notes,            // additional notes/terms
    taxRate,          // e.g. 0.095 for 9.5%
    depositPercent,   // e.g. 0.5 for 50% deposit
  } = req.body || {};

  if (!contractorName) return res.status(400).json({ error: 'contractorName required' });
  if (!clientName) return res.status(400).json({ error: 'clientName required' });
  if (!projectType) return res.status(400).json({ error: 'projectType required' });

  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL || 'hello@efalconry.com';

  // ── Step 1: Calculate totals ──────────────────────────────
  const materialTotal = (materials || []).reduce((sum, m) =>
    sum + (parseFloat(m.quantity || 0) * parseFloat(m.unitCost || 0)), 0);

  const laborTotal = (laborItems || []).reduce((sum, l) =>
    sum + (parseFloat(l.hours || 0) * parseFloat(l.rate || 0)), 0);

  const subtotal = materialTotal + laborTotal;
  const tax = subtotal * (parseFloat(taxRate) || 0);
  const total = subtotal + tax;
  const depositAmount = total * (parseFloat(depositPercent) || 0.5);

  // ── Step 2: Claude writes the professional scope of work ──
  let scopeOfWork = '';
  let termsAndConditions = '';
  let projectTitle = '';

  if (anthropicKey) {
    try {
      const context = [
        `Contractor: ${contractorName}`,
        `Project type: ${projectType}`,
        `Client: ${clientName} at ${clientAddress || 'provided address'}`,
        projectDescription ? `Description: ${projectDescription}` : '',
        measurements?.length ? `Measurements:\n${measurements.map(m => `  ${m.label}: ${m.value} ${m.unit}`).join('\n')}` : '',
        materials?.length ? `Materials:\n${materials.map(m => `  ${m.item}: ${m.quantity} ${m.unit}`).join('\n')}` : '',
        laborItems?.length ? `Labor:\n${laborItems.map(l => `  ${l.description}: ${l.hours} hours`).join('\n')}` : '',
      ].filter(Boolean).join('\n\n');

      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': anthropicKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 1200,
          messages: [{
            role: 'user',
            content: `You are writing a professional contractor quote document.

PROJECT DATA:
${context}

Write the following in professional contractor language:

1. A short project title (5-8 words, e.g. "Stamped Concrete Patio Installation — Johnson Residence")
2. A scope of work section (3-5 paragraphs covering: what will be done, how it will be done, materials to be used, site preparation and cleanup, timeline expectations). Be specific using the measurements and materials provided. Professional but readable.
3. Standard contractor terms and conditions (5-7 bullet points covering: payment schedule, change orders, warranty, damage/liability, project timeline, permit responsibility)

Return ONLY valid JSON:
{
  "projectTitle": "...",
  "scopeOfWork": "Full scope text here with paragraph breaks using \\n\\n",
  "termsAndConditions": ["Term 1", "Term 2", "Term 3", "Term 4", "Term 5"]
}`
          }]
        })
      });

      const data = await resp.json();
      const raw = data.content?.[0]?.text || '{}';
      const parsed = JSON.parse(raw.replace(/```json|```/g, '').trim());
      scopeOfWork = parsed.scopeOfWork || '';
      termsAndConditions = parsed.termsAndConditions || [];
      projectTitle = parsed.projectTitle || `${projectType} — ${clientName}`;
    } catch(e) {
      console.error('Claude scope error:', e.message);
      projectTitle = `${projectType} — ${clientName}`;
      scopeOfWork = projectDescription || 'Scope of work as described and agreed upon.';
      termsAndConditions = [
        '50% deposit required to begin work. Remaining balance due upon completion.',
        'Any changes to scope require written change order and may affect price and timeline.',
        'All materials warranted per manufacturer. Labor warranted for 1 year.',
        'Contractor not responsible for pre-existing conditions or underground utilities.',
        'Quote valid for 30 days from issue date.',
      ];
    }
  }

  // ── Step 3: Generate HTML quote document ──────────────────
  const quoteNumber = `Q-${Date.now().toString().slice(-6)}`;
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const validUntil = new Date(Date.now() + (parseInt(validDays || 30) * 86400000))
    .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const fmt = (n) => '$' + parseFloat(n || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${projectTitle} — Quote ${quoteNumber}</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Inter',sans-serif;color:#1a1a1a;background:#fff;font-size:14px;line-height:1.6;}
.page{max-width:900px;margin:0 auto;padding:48px;}
/* Header */
.header{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:32px;border-bottom:3px solid #1a1a1a;margin-bottom:32px;}
.logo-area{display:flex;align-items:center;gap:16px;}
.logo-img{max-width:120px;max-height:60px;object-fit:contain;}
.logo-placeholder{width:60px;height:60px;background:#1a1a1a;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:20px;}
.contractor-name{font-size:22px;font-weight:800;color:#1a1a1a;margin-bottom:2px;}
.contractor-sub{font-size:12px;color:#666;}
.quote-info{text-align:right;}
.quote-title{font-size:28px;font-weight:800;color:#1a1a1a;letter-spacing:-.5px;}
.quote-meta{font-size:12px;color:#666;margin-top:4px;}
.quote-num{font-size:14px;font-weight:700;color:#1a1a1a;margin-top:6px;}
/* Parties */
.parties{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:32px;}
.party{background:#f8f8f8;border-radius:10px;padding:20px;}
.party-label{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#999;margin-bottom:8px;}
.party-name{font-size:16px;font-weight:700;color:#1a1a1a;margin-bottom:4px;}
.party-detail{font-size:13px;color:#555;line-height:1.7;}
/* Project title */
.project-title-block{background:#1a1a1a;color:#fff;border-radius:10px;padding:20px 24px;margin-bottom:28px;}
.project-label{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#888;margin-bottom:4px;}
.project-name{font-size:18px;font-weight:700;}
/* Measurements */
.section{margin-bottom:28px;}
.section-title{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#999;margin-bottom:12px;display:flex;align-items:center;gap:8px;}
.section-title::after{content:'';flex:1;height:1px;background:#e5e5e5;}
.measurements{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
.meas{background:#f0f7ff;border:1px solid #dbeafe;border-radius:8px;padding:12px;text-align:center;}
.meas-val{font-size:20px;font-weight:800;color:#1d4ed8;}
.meas-unit{font-size:11px;color:#3b82f6;font-weight:600;}
.meas-label{font-size:11px;color:#666;margin-top:2px;}
/* Scope */
.scope-text{font-size:14px;color:#333;line-height:1.8;white-space:pre-line;}
/* Items table */
table{width:100%;border-collapse:collapse;margin-top:8px;}
thead tr{background:#1a1a1a;color:#fff;}
th{padding:11px 14px;text-align:left;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;}
th:last-child{text-align:right;}
tbody tr{border-bottom:1px solid #f0f0f0;}
tbody tr:nth-child(even){background:#fafafa;}
td{padding:11px 14px;font-size:13px;color:#333;}
td:last-child{text-align:right;font-weight:600;}
tfoot tr{border-top:2px solid #1a1a1a;}
.subtotal td{font-weight:600;background:#f8f8f8;}
.tax-row td{color:#666;font-size:13px;}
.total-row td{font-size:16px;font-weight:800;background:#1a1a1a;color:#fff;padding:14px;}
.deposit-row td{font-size:14px;font-weight:700;background:#f0f7ff;color:#1d4ed8;}
/* Photos */
.photo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:8px;}
.photo-grid img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:8px;border:1px solid #e5e5e5;}
/* Diagram */
.diagram-wrap{border:1px solid #e5e5e5;border-radius:10px;overflow:hidden;margin-top:8px;}
.diagram-wrap img{width:100%;max-height:300px;object-fit:contain;}
/* Terms */
.terms-list{list-style:none;display:flex;flex-direction:column;gap:8px;}
.terms-list li{font-size:13px;color:#555;display:flex;gap:8px;align-items:flex-start;line-height:1.6;}
.terms-list li::before{content:'';width:6px;height:6px;border-radius:50%;background:#1a1a1a;flex-shrink:0;margin-top:7px;}
/* Signature */
.signature-section{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:40px;padding-top:32px;border-top:2px solid #e5e5e5;}
.sig-block{}
.sig-label{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#999;margin-bottom:16px;}
.sig-line{border-bottom:1px solid #1a1a1a;margin-bottom:8px;height:40px;}
.sig-name{font-size:12px;color:#666;}
/* Footer */
.footer{margin-top:40px;padding-top:20px;border-top:1px solid #e5e5e5;text-align:center;font-size:11px;color:#aaa;}
.accent{color:#F07A20;}
/* Print */
@media print{.page{padding:24px;max-width:100%;}.no-print{display:none;}}
</style>
</head>
<body>
<div class="page">

  <!-- Header -->
  <div class="header">
    <div class="logo-area">
      ${contractorLogo
        ? `<img src="${contractorLogo.startsWith('data:') ? contractorLogo : 'data:image/png;base64,' + contractorLogo}" class="logo-img" alt="${contractorName} logo">`
        : `<div class="logo-placeholder">${contractorName[0]}</div>`}
      <div>
        <div class="contractor-name">${contractorName}</div>
        <div class="contractor-sub">${contractorPhone || ''} ${contractorPhone && contractorEmail ? '·' : ''} ${contractorEmail || ''}</div>
        ${contractorAddress ? `<div class="contractor-sub">${contractorAddress}</div>` : ''}
        ${contractorLicense ? `<div class="contractor-sub">License #${contractorLicense}</div>` : ''}
      </div>
    </div>
    <div class="quote-info">
      <div class="quote-title">QUOTE</div>
      <div class="quote-num">${quoteNumber}</div>
      <div class="quote-meta">Issued: ${today}</div>
      <div class="quote-meta">Valid until: ${validUntil}</div>
    </div>
  </div>

  <!-- Parties -->
  <div class="parties">
    <div class="party">
      <div class="party-label">Prepared By</div>
      <div class="party-name">${contractorName}</div>
      <div class="party-detail">
        ${contractorPhone ? contractorPhone + '<br>' : ''}
        ${contractorEmail ? contractorEmail + '<br>' : ''}
        ${contractorAddress || ''}
      </div>
    </div>
    <div class="party">
      <div class="party-label">Prepared For</div>
      <div class="party-name">${clientName}</div>
      <div class="party-detail">
        ${clientAddress ? clientAddress + '<br>' : ''}
        ${clientPhone ? clientPhone + '<br>' : ''}
        ${clientEmail || ''}
      </div>
    </div>
  </div>

  <!-- Project title -->
  <div class="project-title-block">
    <div class="project-label">Project</div>
    <div class="project-name">${projectTitle}</div>
  </div>

  <!-- Measurements -->
  ${measurements?.length ? `
  <div class="section">
    <div class="section-title">Project Measurements</div>
    <div class="measurements">
      ${measurements.map(m => `
        <div class="meas">
          <div class="meas-val">${m.value}</div>
          <div class="meas-unit">${m.unit}</div>
          <div class="meas-label">${m.label}</div>
        </div>
      `).join('')}
    </div>
  </div>` : ''}

  <!-- Site sketch/diagram -->
  ${siteSketch ? `
  <div class="section">
    <div class="section-title">Site Diagram</div>
    <div class="diagram-wrap">
      <img src="${siteSketch.startsWith('data:') ? siteSketch : 'data:image/png;base64,' + siteSketch}" alt="Site diagram">
    </div>
  </div>` : ''}

  <!-- Site photos -->
  ${photos?.length ? `
  <div class="section">
    <div class="section-title">Project Site Photos</div>
    <div class="photo-grid">
      ${photos.slice(0, 6).map(p =>
        `<img src="${p.startsWith('data:') ? p : 'data:image/jpeg;base64,' + p}" alt="Site photo">`
      ).join('')}
    </div>
  </div>` : ''}

  <!-- Scope of work -->
  ${scopeOfWork ? `
  <div class="section">
    <div class="section-title">Scope of Work</div>
    <div class="scope-text">${scopeOfWork}</div>
  </div>` : ''}

  <!-- Materials -->
  ${materials?.length ? `
  <div class="section">
    <div class="section-title">Materials</div>
    <table>
      <thead><tr>
        <th>Item</th><th>Qty</th><th>Unit</th><th>Unit Cost</th><th>Total</th>
      </tr></thead>
      <tbody>
        ${materials.map(m => {
          const lineTotal = parseFloat(m.quantity || 0) * parseFloat(m.unitCost || 0);
          return `<tr>
            <td>${m.item}</td>
            <td>${m.quantity}</td>
            <td>${m.unit}</td>
            <td>${fmt(m.unitCost)}</td>
            <td>${fmt(lineTotal)}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>` : ''}

  <!-- Labor -->
  ${laborItems?.length ? `
  <div class="section">
    <div class="section-title">Labor</div>
    <table>
      <thead><tr>
        <th>Description</th><th>Hours</th><th>Rate/hr</th><th>Total</th>
      </tr></thead>
      <tbody>
        ${laborItems.map(l => {
          const lineTotal = parseFloat(l.hours || 0) * parseFloat(l.rate || 0);
          return `<tr>
            <td>${l.description}</td>
            <td>${l.hours}</td>
            <td>${fmt(l.rate)}</td>
            <td>${fmt(lineTotal)}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>` : ''}

  <!-- Totals -->
  <div class="section">
    <div class="section-title">Project Total</div>
    <table>
      <tfoot>
        <tr class="subtotal"><td colspan="4">Subtotal</td><td>${fmt(subtotal)}</td></tr>
        ${tax > 0 ? `<tr class="tax-row"><td colspan="4">Tax (${(parseFloat(taxRate) * 100).toFixed(1)}%)</td><td>${fmt(tax)}</td></tr>` : ''}
        <tr class="total-row"><td colspan="4"><strong>TOTAL</strong></td><td><strong>${fmt(total)}</strong></td></tr>
        ${depositAmount > 0 ? `<tr class="deposit-row"><td colspan="4">Deposit Required (${Math.round(parseFloat(depositPercent || 0.5) * 100)}%)</td><td>${fmt(depositAmount)}</td></tr>` : ''}
      </tfoot>
    </table>
  </div>

  <!-- Terms -->
  ${termsAndConditions?.length ? `
  <div class="section">
    <div class="section-title">Terms & Conditions</div>
    <ul class="terms-list">
      ${(Array.isArray(termsAndConditions) ? termsAndConditions : [termsAndConditions])
        .map(t => `<li>${t}</li>`).join('')}
    </ul>
  </div>` : ''}

  ${notes ? `
  <div class="section">
    <div class="section-title">Additional Notes</div>
    <p style="font-size:13px;color:#555;line-height:1.8">${notes}</p>
  </div>` : ''}

  <!-- Signatures -->
  <div class="signature-section">
    <div class="sig-block">
      <div class="sig-label">Contractor Signature</div>
      <div class="sig-line"></div>
      <div class="sig-name">${contractorName} · Date: ___________</div>
    </div>
    <div class="sig-block">
      <div class="sig-label">Client Approval</div>
      <div class="sig-line"></div>
      <div class="sig-name">${clientName} · Date: ___________</div>
    </div>
  </div>

  <!-- Footer -->
  <div class="footer">
    Quote ${quoteNumber} · Generated for ${contractorName} · Valid until ${validUntil}<br>
    <span class="accent">Powered by e-Falconry</span> · efalconry.com
  </div>

</div>
</body>
</html>`;

  // Return the HTML quote
  // In production, convert to PDF using puppeteer or a PDF service
  // For now, return HTML that can be printed to PDF
  const resendKey = process.env.RESEND_API_KEY;

  // Email to owner
  if (resendKey) {
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'e-Falconry <hello@efalconry.com>',
        to: notifyEmail,
        subject: `📋 New Quote Generated: ${contractorName} → ${clientName}`,
        html: `<p>Quote ${quoteNumber} generated for ${contractorName} (client: ${clientName}).</p>
               <p><strong>Total: ${fmt(total)}</strong></p>
               <p>Project: ${projectTitle}</p>`,
      })
    }).catch(console.error);
  }

  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json({
    success: true,
    quoteNumber,
    total: total.toFixed(2),
    depositAmount: depositAmount.toFixed(2),
    html, // The full HTML quote document
    projectTitle,
  });
}
