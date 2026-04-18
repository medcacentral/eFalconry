// Mockup submission form page — /mockup
// Contractors upload photos + description, we generate AI renders

export default function handler(req, res) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>AI Project Mockups — e-Falconry</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@700;800&family=DM+Sans:wght@300;400&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{background:#07090C;color:#EDE8DC;font-family:'DM Sans',sans-serif;min-height:100vh;padding:0 0 80px;}
.header{background:rgba(7,9,12,.97);border-bottom:1px solid rgba(240,122,32,.2);padding:0 5%;height:64px;display:flex;align-items:center;justify-content:space-between;}
.brand{font-family:'Bebas Neue',cursive;font-size:20px;letter-spacing:.08em;}
.brand a{color:#EDE8DC;text-decoration:none;}
.brand span{color:#F07A20;}
.wrap{max-width:720px;margin:0 auto;padding:60px 5%;}
.eye{font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:.16em;color:#F07A20;text-transform:uppercase;margin-bottom:10px;display:flex;align-items:center;gap:8px;}
.eye::before{content:'';width:24px;height:2px;background:#F07A20;border-radius:2px;}
h1{font-family:'Bebas Neue',cursive;font-size:clamp(48px,9vw,80px);line-height:.95;margin-bottom:16px;}
h1 span{color:#F07A20;}
.sub{font-size:16px;color:#C4CBDA;line-height:1.75;margin-bottom:40px;font-weight:300;}
.how{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:48px;}
.how-step{background:#0F1219;border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:18px;text-align:center;}
.how-num{font-family:'Bebas Neue',cursive;font-size:32px;color:#F07A20;line-height:1;margin-bottom:6px;}
.how-label{font-size:12px;color:#8892A8;line-height:1.5;}
.form-card{background:#0F1219;border:1px solid rgba(255,255,255,.07);border-radius:20px;padding:40px;}
.field{margin-bottom:24px;}
label{display:block;font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:.1em;color:#8892A8;text-transform:uppercase;margin-bottom:8px;}
input,textarea,select{width:100%;background:#07090C;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:13px 16px;color:#EDE8DC;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;transition:border-color .15s;}
input:focus,textarea:focus,select:focus{border-color:rgba(240,122,32,.5);}
textarea{resize:vertical;min-height:120px;}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.upload-zone{border:2px dashed rgba(240,122,32,.3);border-radius:12px;padding:40px;text-align:center;cursor:pointer;transition:all .2s;background:rgba(240,122,32,.03);}
.upload-zone:hover{border-color:rgba(240,122,32,.6);background:rgba(240,122,32,.06);}
.upload-zone input{display:none;}
.upload-icon{font-size:40px;margin-bottom:12px;}
.upload-text{font-size:14px;color:#C4CBDA;margin-bottom:4px;}
.upload-hint{font-size:12px;color:#8892A8;}
.previews{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:16px;}
.preview-img{aspect-ratio:1;border-radius:8px;object-fit:cover;border:1px solid rgba(255,255,255,.1);}
.submit-btn{width:100%;background:linear-gradient(90deg,#F07A20,#FFAA55);color:#fff;font-family:'Syne',sans-serif;font-weight:800;font-size:16px;padding:18px;border-radius:12px;border:none;cursor:pointer;margin-top:8px;transition:transform .15s;box-shadow:0 8px 32px rgba(240,122,32,.3);}
.submit-btn:hover{transform:translateY(-2px);}
.submit-btn:disabled{opacity:.6;cursor:not-allowed;transform:none;}
.price-callout{background:rgba(240,122,32,.08);border:1px solid rgba(240,122,32,.2);border-radius:12px;padding:20px 24px;display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;flex-wrap:wrap;gap:12px;}
.price-left h3{font-family:'Syne',sans-serif;font-size:16px;font-weight:800;margin-bottom:4px;}
.price-left p{font-size:13px;color:#8892A8;}
.price-right{font-family:'Bebas Neue',cursive;font-size:48px;color:#F07A20;line-height:1;}
.price-note{font-size:11px;color:#8892A8;text-align:right;}
#status{display:none;text-align:center;padding:32px;background:#0F1219;border-radius:16px;border:1px solid rgba(240,122,32,.3);}
#status h3{font-family:'Bebas Neue',cursive;font-size:36px;color:#F07A20;margin-bottom:8px;}
#status p{color:#C4CBDA;font-size:15px;line-height:1.7;}
.renders{display:flex;flex-direction:column;gap:24px;margin-top:24px;}
.render-item img{width:100%;border-radius:12px;border:1px solid rgba(255,255,255,.1);}
.render-label{font-family:'Syne',sans-serif;font-size:12px;font-weight:700;color:#F07A20;margin-bottom:8px;letter-spacing:.08em;text-transform:uppercase;}
@media(max-width:640px){.how{grid-template-columns:repeat(2,1fr);}.two-col{grid-template-columns:1fr;}.previews{grid-template-columns:repeat(3,1fr);}}
</style>
</head>
<body>

<div class="header">
  <div class="brand"><a href="/"><span>e-</span>Falconry</a></div>
  <a href="/#pricing" style="font-family:'Syne',sans-serif;font-size:12px;font-weight:700;color:#8892A8">See All Services →</a>
</div>

<div class="wrap">
  <div class="eye">New Service</div>
  <h1>AI Project <span>Mockups</span></h1>
  <p class="sub">Upload photos of the current space and describe the finished project — we generate 3 photorealistic renders your customer can see before the work begins. Close jobs faster. Eliminate hesitation.</p>

  <div class="how">
    <div class="how-step"><div class="how-num">1</div><div class="how-label">Upload photos of the space</div></div>
    <div class="how-step"><div class="how-num">2</div><div class="how-label">Describe the finished project</div></div>
    <div class="how-step"><div class="how-num">3</div><div class="how-label">We generate 3 AI renders</div></div>
    <div class="how-step"><div class="how-num">4</div><div class="how-label">Show customer & close the job</div></div>
  </div>

  <div class="form-card">
    <div class="price-callout">
      <div class="price-left">
        <h3>3 Photorealistic Renders</h3>
        <p>48-hour turnaround · Delivered by email · Unlimited revisions</p>
      </div>
      <div>
        <div class="price-right">$149</div>
        <div class="price-note">per project</div>
      </div>
    </div>

    <div id="form-wrap">
      <div class="two-col">
        <div class="field">
          <label>Your Business Name</label>
          <input id="f-biz" type="text" placeholder="Bob's Landscaping LLC">
        </div>
        <div class="field">
          <label>Project Type</label>
          <select id="f-cat">
            <option value="">Select type...</option>
            <option value="landscaping">Landscaping / Lawn</option>
            <option value="deck">Deck / Patio / Hardscape</option>
            <option value="kitchen">Kitchen Remodel</option>
            <option value="bathroom">Bathroom Renovation</option>
            <option value="addition">Room Addition / Exterior</option>
            <option value="roofing">Roofing / Siding</option>
            <option value="fencing">Fencing / Gates</option>
            <option value="pool">Pool / Outdoor Living</option>
            <option value="commercial">Commercial Space</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div class="two-col">
        <div class="field">
          <label>Your Email</label>
          <input id="f-email" type="email" placeholder="you@yourbusiness.com">
        </div>
        <div class="field">
          <label>Your Phone (optional)</label>
          <input id="f-phone" type="tel" placeholder="(206) 555-0192">
        </div>
      </div>

      <div class="field">
        <label>Project Description — be as detailed as possible</label>
        <textarea id="f-desc" placeholder="Example: Transform the existing backyard (approx 40x60ft) into a modern outdoor living space. Install a 20x20 ft composite deck with built-in seating and a pergola with string lights. Add a 10x10 ft fire pit area with flagstone pavers and Adirondack chairs. Plant mature ornamental grasses and boxwood hedges along the back fence. Install low-voltage landscape lighting throughout. The overall style should be clean, modern, and warm — similar to a Pottery Barn outdoor catalog."></textarea>
      </div>

      <div class="field">
        <label>Upload Photos of the Current Space (up to 5)</label>
        <div class="upload-zone" onclick="document.getElementById('file-input').click()">
          <input type="file" id="file-input" accept="image/*" multiple onchange="handleFiles(this.files)">
          <div class="upload-icon">📸</div>
          <div class="upload-text">Click to upload photos</div>
          <div class="upload-hint">JPG, PNG, HEIC · Max 5 photos · 10MB each</div>
        </div>
        <div class="previews" id="preview-grid"></div>
      </div>

      <button class="submit-btn" id="submit-btn" onclick="submitMockup()">
        Generate My Mockups — $149 →
      </button>
      <p style="text-align:center;font-size:12px;color:#8892A8;margin-top:12px">You'll receive renders by email within 48 hours · We'll reach out if we have questions</p>
    </div>

    <div id="status"></div>
  </div>
</div>

<script>
let uploadedImages = [];

function handleFiles(files) {
  const grid = document.getElementById('preview-grid');
  Array.from(files).slice(0, 5).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      uploadedImages.push(e.target.result);
      const img = document.createElement('img');
      img.src = e.target.result;
      img.className = 'preview-img';
      grid.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}

// Allow drag & drop
const zone = document.querySelector('.upload-zone');
zone.addEventListener('dragover', e => { e.preventDefault(); zone.style.borderColor = 'rgba(240,122,32,.8)'; });
zone.addEventListener('dragleave', () => { zone.style.borderColor = 'rgba(240,122,32,.3)'; });
zone.addEventListener('drop', e => {
  e.preventDefault();
  zone.style.borderColor = 'rgba(240,122,32,.3)';
  handleFiles(e.dataTransfer.files);
});

async function submitMockup() {
  const biz = document.getElementById('f-biz').value.trim();
  const cat = document.getElementById('f-cat').value;
  const email = document.getElementById('f-email').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const desc = document.getElementById('f-desc').value.trim();

  if (!biz) return alert('Please enter your business name.');
  if (!desc || desc.length < 50) return alert('Please provide a detailed project description (at least 50 characters).');
  if (!email) return alert('Please enter your email address.');

  const btn = document.getElementById('submit-btn');
  btn.disabled = true;
  btn.textContent = 'Generating renders... this takes ~60 seconds';

  const statusEl = document.getElementById('status');
  statusEl.style.display = 'block';
  statusEl.innerHTML = '<h3>⚡ Generating Your Renders</h3><p>Our AI is creating 3 photorealistic mockups of your project. This takes about 60 seconds. Do not close this page.</p>';

  try {
    const resp = await fetch('/api/mockup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        bizName: biz,
        category: cat,
        description: desc,
        images: uploadedImages.slice(0, 3).map(img => img.split(',')[1]),
        contactEmail: email,
        contactPhone: phone,
      })
    });

    const data = await resp.json();

    if (data.success && data.renders?.length) {
      document.getElementById('form-wrap').style.display = 'none';
      statusEl.innerHTML = \`
        <h3>🎨 Your Mockups Are Ready!</h3>
        <p>3 renders generated for <strong>\${biz}</strong>. We've also sent them to \${email}.</p>
        \${data.projectSummary ? \`<p style="margin-top:8px;color:#8892A8;font-size:14px">\${data.projectSummary}</p>\` : ''}
        <div class="renders">
          \${data.renders.map(r => \`
            <div class="render-item">
              <div class="render-label">\${r.label}</div>
              <img src="data:\${r.mimeType};base64,\${r.imageBase64}" alt="\${r.label}">
            </div>
          \`).join('')}
        </div>
        <p style="margin-top:24px;font-size:13px;color:#8892A8">Save these images and share them with your customer. Questions? Email us at hello@efalconry.com</p>
      \`;
    } else {
      statusEl.innerHTML = '<h3>Request Received!</h3><p>We received your project details and photos. Our team will generate your renders and send them to ' + email + ' within 48 hours.</p>';
      document.getElementById('form-wrap').style.display = 'none';
    }
  } catch(e) {
    statusEl.innerHTML = '<h3>Request Received!</h3><p>We have your project details. Your renders will be emailed to ' + document.getElementById('f-email').value + ' within 48 hours.</p>';
    document.getElementById('form-wrap').style.display = 'none';
  }
}
</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.status(200).send(html);
}
