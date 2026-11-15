/* KiteDesk Studio — Interactive Application Engine (Argon Overhaul) */
function toggleNav() {
  const nav = document.getElementById('siteNav');
  if (nav) nav.classList.toggle('open');
}

function renderPostCard(post) {
  return `
    <article class="card post-card">
      <div>
        <span class="card-tag">${post.category}</span>
        <h3><a href="post.html?slug=${encodeURIComponent(post.slug)}">${post.title}</a></h3>
        <p class="muted">${post.excerpt}</p>
      </div>
      <div class="post-meta">${post.date} &bull; ${post.readTime}</div>
    </article>
  `;
}

const homeGrid = document.getElementById('homePostsGrid');
if (homeGrid && window.KITEDESK_POSTS) {
  homeGrid.innerHTML = window.KITEDESK_POSTS.slice(0, 3).map(renderPostCard).join('');
}

let activeCategory = 'All';
function filterPosts(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('#journalFilters .pill').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderJournalPage();
}

function renderJournalPage() {
  const grid = document.getElementById('journalGrid');
  if (!grid || !window.KITEDESK_POSTS) return;
  const q = (document.getElementById('journalSearch')?.value || '').toLowerCase();
  const filtered = window.KITEDESK_POSTS.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchQ = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  grid.innerHTML = filtered.length
    ? filtered.map(renderPostCard).join('')
    : '<p class="muted">No matching articles found.</p>';
}
renderJournalPage();

const articleBody = document.getElementById('articleBody');
if (articleBody && window.KITEDESK_POSTS) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const post = window.KITEDESK_POSTS.find(p => p.slug === slug) || window.KITEDESK_POSTS[0];
  document.title = `${post.title} — KiteDesk Studio`;
  articleBody.innerHTML = `
    <span class="card-tag">${post.category}</span>
    <h1>${post.title}</h1>
    <div class="post-meta" style="margin-bottom:20px;">${post.date} &bull; ${post.readTime}</div>
    ${post.content.map(p => `<p>${p}</p>`).join('')}
    <div style="margin-top:28px;padding-top:18px;border-top:1px solid var(--border);display:flex;gap:10px;flex-wrap:wrap;">
      <a href="billfold.html" class="btn btn-sm btn-outline">Open BillFold Invoicing</a>
      <a href="tapping.html" class="btn btn-sm btn-outline">Open TapPing WhatsApp QR</a>
      <a href="marginmint.html" class="btn btn-sm btn-outline">Open MarginMint Calculator</a>
    </div>
  `;
}

/* 1. BILLFOLD — GST INVOICE & UPI QR ENGINE */
let invoiceItems = [
  { desc: 'Handcrafted Jooti Pair — Festive Edition', qty: 2, rate: 1450 },
  { desc: 'Express Courier & Gift Packaging', qty: 1, rate: 150 }
];
try {
  const savedInv = localStorage.getItem('bf_items');
  if (savedInv) invoiceItems = JSON.parse(savedInv);
} catch (e) {}

function renderInvoiceInputs() {
  const list = document.getElementById('invoiceItemsList');
  if (!list) return;
  list.innerHTML = invoiceItems.map((item, idx) => `
    <div class="item-row">
      <input type="text" value="${item.desc}" oninput="invoiceItems[${idx}].desc=this.value;renderInvoice()" placeholder="Item or service description" />
      <input type="number" class="mono-input" value="${item.qty}" min="1" oninput="invoiceItems[${idx}].qty=Number(this.value)||0;renderInvoice()" />
      <input type="number" class="mono-input" value="${item.rate}" min="0" oninput="invoiceItems[${idx}].rate=Number(this.value)||0;renderInvoice()" />
      <button type="button" class="btn btn-sm btn-secondary" onclick="removeInvoiceItem(${idx})" title="Remove item">&times;</button>
    </div>
  `).join('');
}

function addInvoiceItem() {
  invoiceItems.push({ desc: 'New Line Item', qty: 1, rate: 500 });
  renderInvoiceInputs();
  renderInvoice();
}

function removeInvoiceItem(idx) {
  if (invoiceItems.length <= 1) return;
  invoiceItems.splice(idx, 1);
  renderInvoiceInputs();
  renderInvoice();
}

function renderInvoice() {
  if (!document.getElementById('invoicePreview')) return;
  const cur = document.getElementById('invCurrency')?.value || '₹';
  const taxRate = Number(document.getElementById('invTax')?.value) || 0;
  const taxMode = document.getElementById('invTaxMode')?.value || 'cgst_sgst';
  const discount = Number(document.getElementById('invDiscount')?.value) || 0;
  const fromName = document.getElementById('invFrom')?.value || 'Your Business';
  const fromGstin = document.getElementById('invFromGstin')?.value || '';
  const toName = document.getElementById('invTo')?.value || 'Customer';
  const toGstin = document.getElementById('invToGstin')?.value || '';
  const upiId = (document.getElementById('invUpi')?.value || '').trim();

  document.getElementById('prevFrom').textContent = fromName;
  document.getElementById('prevFromGstin').textContent = fromGstin ? `GSTIN: ${fromGstin}` : '';
  document.getElementById('prevTo').textContent = toName;
  document.getElementById('prevToGstin').textContent = toGstin ? `GSTIN: ${toGstin}` : '';
  document.getElementById('prevNum').textContent = document.getElementById('invNum')?.value || 'INV-2026-001';
  document.getElementById('prevDate').textContent = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  document.getElementById('prevNotes').textContent = document.getElementById('invNotes')?.value || '';

  let sub = 0;
  document.getElementById('prevItemsBody').innerHTML = invoiceItems.map(i => {
    const amt = i.qty * i.rate;
    sub += amt;
    return `<tr><td>${i.desc}</td><td class="mono-val">${i.qty}</td><td class="mono-val">${cur}${i.rate.toFixed(2)}</td><td>${cur}${amt.toFixed(2)}</td></tr>`;
  }).join('');

  const taxable = Math.max(0, sub - discount);
  const taxAmt = taxable * (taxRate / 100);
  const total = taxable + taxAmt;

  document.getElementById('prevSub').textContent = `${cur}${sub.toFixed(2)}`;
  const discRow = document.getElementById('prevDiscRow');
  if (discRow) {
    discRow.style.display = discount > 0 ? 'flex' : 'none';
    document.getElementById('prevDisc').textContent = `-${cur}${discount.toFixed(2)}`;
  }

  const taxBox = document.getElementById('prevTaxBreakdown');
  if (taxBox) {
    if (taxRate === 0 || taxMode === 'none') {
      taxBox.innerHTML = `<div><span>Tax (0%)</span><strong>${cur}0.00</strong></div>`;
    } else if (taxMode === 'cgst_sgst') {
      const halfRate = (taxRate / 2).toFixed(1).replace('.0', '');
      const halfAmt = (taxAmt / 2).toFixed(2);
      taxBox.innerHTML = `
        <div><span>CGST (${halfRate}%)</span><strong>${cur}${halfAmt}</strong></div>
        <div><span>SGST (${halfRate}%)</span><strong>${cur}${halfAmt}</strong></div>
      `;
    } else {
      taxBox.innerHTML = `<div><span>IGST (${taxRate}%)</span><strong>${cur}${taxAmt.toFixed(2)}</strong></div>`;
    }
  }

  document.getElementById('prevTotal').textContent = `${cur}${total.toFixed(2)}`;

  const upiWrap = document.getElementById('prevUpiWrap');
  if (upiWrap) {
    if (upiId && cur === '₹') {
      upiWrap.style.display = 'block';
      const upiUri = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(fromName)}&am=${total.toFixed(2)}&cu=INR`;
      document.getElementById('prevUpiQr').src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(upiUri)}`;
      document.getElementById('prevUpiId').textContent = upiId;
    } else {
      upiWrap.style.display = 'none';
    }
  }

  try { localStorage.setItem('bf_items', JSON.stringify(invoiceItems)); } catch (e) {}
}

function resetInvoice() {
  invoiceItems = [{ desc: 'Consulting / Product Order', qty: 1, rate: 1500 }];
  renderInvoiceInputs();
  renderInvoice();
}

if (document.getElementById('invoiceItemsList')) {
  renderInvoiceInputs();
  renderInvoice();
}

/* 2. TAPPING — WHATSAPP LINK & QR GENERATOR */
function setWaTemplate(text) {
  const el = document.getElementById('waMsg');
  if (el) {
    el.value = text;
    buildWhatsApp();
  }
}

function buildWhatsApp() {
  const phoneEl = document.getElementById('waPhone');
  if (!phoneEl) return;
  const phone = phoneEl.value.replace(/\D/g, '');
  const rawMsg = document.getElementById('waMsg')?.value || '';
  const msg = encodeURIComponent(rawMsg);
  const url = `https://wa.me/${phone}${msg ? `?text=${msg}` : ''}`;
  document.getElementById('waOutput').value = url;
  document.getElementById('waTestLink').href = url;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=10&data=${encodeURIComponent(url)}`;
  document.getElementById('waQrImg').src = qrUrl;
  document.getElementById('waQrDownload').href = qrUrl;
  const htmlCode = `<a href="${url}" target="_blank" rel="noopener" style="display:inline-block;background:#059669;color:#fff;padding:10px 18px;border-radius:8px;font-weight:600;text-decoration:none;">Chat on WhatsApp</a>`;
  const embedEl = document.getElementById('waEmbedCode');
  if (embedEl) embedEl.value = htmlCode;
}
buildWhatsApp();

/* 3. COPYCRAFT — BIO, LISTING & SERP FORMATTER */
function updateFormatter() {
  const el = document.getElementById('fmtInput');
  if (!el) return;
  const text = el.value;
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  document.getElementById('cntChars').textContent = chars;
  document.getElementById('cntWords').textContent = words;
  document.getElementById('cntIg').textContent = chars <= 150 ? `${150 - chars} left` : `${chars - 150} over`;
  document.getElementById('cntSeo').textContent = chars <= 160 ? `${160 - chars} left` : `${chars - 160} over`;

  const serpTitle = document.getElementById('serpTitleInput')?.value || 'Your Brand — Official Store & Custom Orders';
  const serpUrl = document.getElementById('serpUrlInput')?.value || 'https://yourstore.in';
  const prevTitle = document.getElementById('serpPrevTitle');
  const prevUrl = document.getElementById('serpPrevUrl');
  const prevDesc = document.getElementById('serpPrevDesc');
  if (prevTitle) prevTitle.textContent = serpTitle.slice(0, 65);
  if (prevUrl) prevUrl.textContent = serpUrl;
  if (prevDesc) prevDesc.textContent = text.replace(/\n+/g, ' ').slice(0, 160) || 'Write your description above to preview how your page appears on Google Search.';
}

function formatAs(mode) {
  const el = document.getElementById('fmtInput');
  if (!el) return;
  let t = el.value;
  if (mode === 'bullets') {
    t = t.split('\n').map(l => l.trim()).filter(Boolean).map(l => l.replace(/^[•\-\*]\s*/, '')).map(l => `• ${l}`).join('\n');
  } else if (mode === 'checks') {
    t = t.split('\n').map(l => l.trim()).filter(Boolean).map(l => l.replace(/^[✓•\-\*]\s*/, '')).map(l => `✓ ${l}`).join('\n');
  } else if (mode === 'clean') {
    t = t.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
  } else if (mode === 'title') {
    t = t.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  } else if (mode === 'slug') {
    t = t.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  el.value = t;
  updateFormatter();
}
updateFormatter();

/* 4. MARGINMINT — D2C UNIT ECONOMICS, COD RTO & ROAS CALCULATOR */
function calcMargin() {
  const sell = Number(document.getElementById('mmSell')?.value) || 0;
  const cogs = Number(document.getElementById('mmCogs')?.value) || 0;
  const ship = Number(document.getElementById('mmShip')?.value) || 0;
  const pack = Number(document.getElementById('mmPack')?.value) || 0;
  const feePct = Number(document.getElementById('mmFee')?.value) || 0;
  const gstPct = Number(document.getElementById('mmGst')?.value) || 0;
  const rtoPct = Number(document.getElementById('mmRto')?.value) || 0;
  const cur = document.getElementById('mmCur')?.value || '₹';
  if (!document.getElementById('mmNet')) return;

  const feeAmt = sell * (feePct / 100);
  const gstAmt = sell - (sell / (1 + gstPct / 100));
  const rtoLossPerDelivered = rtoPct > 0 && rtoPct < 100
    ? ((rtoPct / 100) / (1 - rtoPct / 100)) * (ship * 1.8 + pack)
    : 0;

  const opsTotal = ship + pack + feeAmt + rtoLossPerDelivered;
  const totalCost = cogs + opsTotal + gstAmt;
  const net = sell - totalCost;
  const marginPct = sell > 0 ? (net / sell) * 100 : 0;
  const breakevenRoas = net > 0 ? (sell / net) : 0;

  document.getElementById('mmNet').textContent = `${cur}${net.toFixed(2)}`;
  document.getElementById('mmNet').style.color = net >= 0 ? 'var(--brand)' : 'var(--danger)';
  document.getElementById('mmMarginPct').textContent = `${marginPct.toFixed(1)}%`;
  document.getElementById('mmRoas').textContent = breakevenRoas > 0 ? `${breakevenRoas.toFixed(2)}x` : 'N/A';
  document.getElementById('mmCostTotal').textContent = `${cur}${totalCost.toFixed(2)}`;
  document.getElementById('mmFeeAmt').textContent = `${cur}${feeAmt.toFixed(2)}`;
  document.getElementById('mmGstAmt').textContent = `${cur}${gstAmt.toFixed(2)}`;
  const rtoEl = document.getElementById('mmRtoAmt');
  if (rtoEl) rtoEl.textContent = `${cur}${rtoLossPerDelivered.toFixed(2)}`;

  if (sell > 0) {
    const pCogs = Math.min(100, Math.max(0, (cogs / sell) * 100));
    const pOps = Math.min(100, Math.max(0, (opsTotal / sell) * 100));
    const pTax = Math.min(100, Math.max(0, (gstAmt / sell) * 100));
    const pProf = Math.max(0, 100 - pCogs - pOps - pTax);
    document.getElementById('barCogs').style.width = `${pCogs}%`;
    document.getElementById('barOps').style.width = `${pOps}%`;
    document.getElementById('barTax').style.width = `${pTax}%`;
    document.getElementById('barProfit').style.width = `${pProf}%`;
  }
}
calcMargin();

function copyText(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.value);
  const orig = btn.textContent;
  btn.textContent = 'Copied ✓';
  setTimeout(() => btn.textContent = orig, 1400);
}

function handleContact(e) {
  e.preventDefault();
  const st = document.getElementById('contactStatus');
  if (st) st.textContent = 'Message recorded locally. Connect Netlify Forms or Formspree to route to your email.';
}
