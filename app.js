
function toggleNav() {
  const nav = document.getElementById('siteNav');
  if (nav) nav.classList.toggle('open');
}
function renderPostCard(post) {
  return `
    <article class="card post-card">
      <img src="${post.image}" alt="${post.title}" loading="lazy" />
      <div class="post-card-body">
        <span class="card-tag">${post.category}</span>
        <h3><a href="post.html?slug=${encodeURIComponent(post.slug)}">${post.title}</a></h3>
        <p class="muted">${post.excerpt}</p>
        <div class="post-meta">${post.date} &bull; ${post.readTime}</div>
      </div>
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
  document.title = `${post.title} - KiteDesk`;
  articleBody.innerHTML = `
    <span class="card-tag">${post.category}</span>
    <h1>${post.title}</h1>
    <div class="post-meta">${post.date} &bull; ${post.readTime}</div>
    <img src="${post.image}" alt="${post.title}" />
    ${post.content.map(p => `<p>${p}</p>`).join('')}
  `;
}
function switchTool(name, btn) {
  document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById(`tool-${name}`);
  if (panel) panel.classList.add('active');
  if (btn) btn.classList.add('active');
}
if (window.location.hash) {
  const target = window.location.hash.replace('#', '');
  const btn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick')?.includes(target));
  if (btn) switchTool(target, btn);
}
let invoiceItems = [
  { desc: 'Website Design & Setup', qty: 1, rate: 4500 },
  { desc: 'Logo & Brand Kit', qty: 1, rate: 1500 }
];
function renderInvoiceInputs() {
  const list = document.getElementById('invoiceItemsList');
  if (!list) return;
  list.innerHTML = invoiceItems.map((item, idx) => `
    <div class="item-row">
      <input type="text" value="${item.desc}" oninput="invoiceItems[${idx}].desc=this.value;renderInvoice()" placeholder="Description" />
      <input type="number" value="${item.qty}" min="1" oninput="invoiceItems[${idx}].qty=Number(this.value)||0;renderInvoice()" />
      <input type="number" value="${item.rate}" min="0" oninput="invoiceItems[${idx}].rate=Number(this.value)||0;renderInvoice()" />
      <button type="button" class="btn btn-sm btn-secondary" onclick="removeInvoiceItem(${idx})">&times;</button>
    </div>
  `).join('');
}
function addInvoiceItem() {
  invoiceItems.push({ desc: 'New Service', qty: 1, rate: 500 });
  renderInvoiceInputs();
  renderInvoice();
}
function removeInvoiceItem(idx) {
  invoiceItems.splice(idx, 1);
  renderInvoiceInputs();
  renderInvoice();
}
function renderInvoice() {
  if (!document.getElementById('invoicePreview')) return;
  const cur = document.getElementById('invCurrency').value;
  const taxRate = Number(document.getElementById('invTax').value) || 0;
  document.getElementById('prevFrom').textContent = document.getElementById('invFrom').value || 'Your Business';
  document.getElementById('prevTo').textContent = document.getElementById('invTo').value || 'Client';
  document.getElementById('prevNum').textContent = document.getElementById('invNum').value;
  document.getElementById('prevDate').textContent = new Date().toLocaleDateString();
  document.getElementById('prevTaxRate').textContent = taxRate;
  document.getElementById('prevNotes').textContent = document.getElementById('invNotes').value;
  let sub = 0;
  document.getElementById('prevItemsBody').innerHTML = invoiceItems.map(i => {
    const amt = i.qty * i.rate;
    sub += amt;
    return `<tr><td>${i.desc}</td><td>${i.qty}</td><td>${cur}${i.rate.toFixed(2)}</td><td>${cur}${amt.toFixed(2)}</td></tr>`;
  }).join('');
  const taxAmt = sub * (taxRate / 100);
  const total = sub + taxAmt;
  document.getElementById('prevSub').textContent = `${cur}${sub.toFixed(2)}`;
  document.getElementById('prevTaxAmt').textContent = `${cur}${taxAmt.toFixed(2)}`;
  document.getElementById('prevTotal').textContent = `${cur}${total.toFixed(2)}`;
}
function resetInvoice() {
  invoiceItems = [{ desc: 'Consulting Service', qty: 1, rate: 1000 }];
  renderInvoiceInputs();
  renderInvoice();
}
if (document.getElementById('invoiceItemsList')) {
  renderInvoiceInputs();
  renderInvoice();
}
function buildWhatsApp() {
  const phoneEl = document.getElementById('waPhone');
  if (!phoneEl) return;
  const phone = phoneEl.value.replace(/\D/g, '');
  const msg = encodeURIComponent(document.getElementById('waMsg').value || '');
  const url = `https://wa.me/${phone}${msg ? `?text=${msg}` : ''}`;
  document.getElementById('waOutput').value = url;
  document.getElementById('waTestLink').href = url;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(url)}`;
  document.getElementById('waQrImg').src = qrUrl;
  document.getElementById('waQrDownload').href = qrUrl;
}
buildWhatsApp();
function updateFormatter() {
  const el = document.getElementById('fmtInput');
  if (!el) return;
  const text = el.value;
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  document.getElementById('cntChars').textContent = chars;
  document.getElementById('cntWords').textContent = words;
  document.getElementById('cntIg').textContent = chars <= 150 ? 'Fits' : `${chars - 150} over`;
  document.getElementById('cntSeo').textContent = chars <= 160 ? 'Fits' : `${chars - 160} over`;
}
function formatAs(mode) {
  const el = document.getElementById('fmtInput');
  if (!el) return;
  let t = el.value;
  if (mode === 'bullets') {
    t = t.split('\n').map(l => l.trim()).filter(Boolean).map(l => l.startsWith('•') ? l : `• ${l}`).join('\n');
  } else if (mode === 'clean') {
    t = t.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
  } else if (mode === 'title') {
    t = t.replace(/\b\w/g, c => c.toUpperCase());
  }
  el.value = t;
  updateFormatter();
}
updateFormatter();
function copyText(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.value);
  const orig = btn.textContent;
  btn.textContent = 'Copied!';
  setTimeout(() => btn.textContent = orig, 1400);
}
function handleContact(e) {
  e.preventDefault();
  const st = document.getElementById('contactStatus');
  if (st) st.textContent = 'Message saved! Connect Formspree or Netlify Forms to receive submissions in your inbox.';
}


function calcMargin() {
  const sell = Number(document.getElementById('mmSell')?.value) || 0;
  const cogs = Number(document.getElementById('mmCogs')?.value) || 0;
  const ship = Number(document.getElementById('mmShip')?.value) || 0;
  const pack = Number(document.getElementById('mmPack')?.value) || 0;
  const feePct = Number(document.getElementById('mmFee')?.value) || 0;
  const gstPct = Number(document.getElementById('mmGst')?.value) || 0;
  const cur = document.getElementById('mmCur')?.value || '₹';
  if (!document.getElementById('mmNet')) return;
  const feeAmt = sell * (feePct / 100);
  const gstAmt = sell - (sell / (1 + gstPct / 100));
  const totalCost = cogs + ship + pack + feeAmt + gstAmt;
  const net = sell - totalCost;
  const marginPct = sell > 0 ? (net / sell) * 100 : 0;
  const markupPct = cogs > 0 ? (net / cogs) * 100 : 0;
  document.getElementById('mmNet').textContent = `${cur}${net.toFixed(2)}`;
  document.getElementById('mmMarginPct').textContent = `${marginPct.toFixed(1)}%`;
  document.getElementById('mmMarkupPct').textContent = `${markupPct.toFixed(1)}%`;
  document.getElementById('mmCostTotal').textContent = `${cur}${totalCost.toFixed(2)}`;
  document.getElementById('mmFeeAmt').textContent = `${cur}${feeAmt.toFixed(2)}`;
  document.getElementById('mmGstAmt').textContent = `${cur}${gstAmt.toFixed(2)}`;
}
calcMargin();
