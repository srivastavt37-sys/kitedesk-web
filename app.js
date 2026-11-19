/* KiteDesk Studio — Interactive Application Engine (Founder Security & Utility Overhaul) */

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
window.escapeHtml = escapeHtml;

/* === Indian Rupee Amount-in-Words Formatter (Lakhs / Crores System) === */
function numberToIndianWords(amount, currencySymbol) {
  const num = Number(amount);
  if (!isFinite(num) || num <= 0) {
    const unitZero = currencySymbol === '$' ? 'Dollars' : (currencySymbol === '€' ? 'Euros' : 'Rupees');
    return unitZero + ' Zero Only';
  }
  const ones = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
    'Seventeen', 'Eighteen', 'Nineteen'
  ];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  function twoDigits(n) {
    if (n === 0) return '';
    if (n < 20) return ones[n];
    const t = Math.floor(n / 10);
    const o = n % 10;
    return tens[t] + (o ? ' ' + ones[o] : '');
  }

  function threeDigits(n) {
    if (n === 0) return '';
    const h = Math.floor(n / 100);
    const rem = n % 100;
    const hPart = h ? ones[h] + ' Hundred' : '';
    const rPart = twoDigits(rem);
    return hPart && rPart ? hPart + ' ' + rPart : (hPart || rPart);
  }

  function convertIndianInt(n) {
    if (n === 0) return 'Zero';
    const parts = [];
    const crore = Math.floor(n / 10000000);
    n %= 10000000;
    const lakh = Math.floor(n / 100000);
    n %= 100000;
    const thousand = Math.floor(n / 1000);
    n %= 1000;
    const rest = n;

    if (crore > 0) parts.push(threeDigits(crore) + ' Crore');
    if (lakh > 0) parts.push(twoDigits(lakh) + ' Lakh');
    if (thousand > 0) parts.push(twoDigits(thousand) + ' Thousand');
    if (rest > 0) parts.push(threeDigits(rest));
    return parts.join(' ').trim();
  }

  const whole = Math.floor(num + 1e-9);
  const paise = Math.round((num - whole) * 100);
  const mainLabel = currencySymbol === '$' ? 'Dollars' : (currencySymbol === '€' ? 'Euros' : 'Rupees');
  const subLabel = currencySymbol === '$' ? 'Cents' : (currencySymbol === '€' ? 'Cents' : 'Paise');

  let out = mainLabel + ' ' + convertIndianInt(whole);
  if (paise > 0 && paise < 100) {
    out += ' and ' + twoDigits(paise) + ' ' + subLabel;
  }
  return out + ' Only';
}
window.numberToIndianWords = numberToIndianWords;

/* === KiteDesk Self-Hosted AI Video Walkthrough Engine === */
window.KITEDESK_AI_VIDEOS = {
  "kitedesk-studio": {
    title: "KiteDesk Studio — 4 Zero-Cost Browser Tools for Indian Operators",
    audioSrc: "audio/kitedesk-studio.mp3",
    poster: "images/kitedesk-hero.jpg",
    durationLabel: "0:22",
    steps: [
      {
        tStart: 0, tEnd: 7.5,
        stepBadge: "STEP 1 / 3 • ARCHITECTURE",
        kicker: "Zero-Signup Browser Suite",
        headline: "Four specialized micro-brands running 100% in your local browser",
        metrics: ["₹0 Monthly SaaS Fees", "Zero Login Walls", "Instant Client-Side Math"],
        caption: "Welcome to KiteDesk Studio — four focused browser tools built for Indian D2C brands, freelancers, and local businesses."
      },
      {
        tStart: 7.5, tEnd: 15.0,
        stepBadge: "STEP 2 / 3 • BILLING & WHATSAPP",
        kicker: "BillFold + TapPing",
        headline: "Generate GST invoices with UPI QR codes & pre-filled wa.me order links",
        metrics: ["CGST / SGST / IGST Split", "Dynamic UPI QR String", "300px Print-Ready PNG"],
        caption: "Use BillFold to generate GST invoices with dynamic UPI QR codes, and TapPing to build direct WhatsApp order links."
      },
      {
        tStart: 15.0, tEnd: 30.0,
        stepBadge: "STEP 3 / 3 • MARGINS & COPY",
        kicker: "MarginMint + CopyCraft",
        headline: "Stress-test COD RTO unit economics & format clean storefront copy",
        metrics: ["Real COD RTO Penalty Math", "Pixel-Accurate Google SERP", "Anti-Slop Bio Formatter"],
        caption: "Run MarginMint to protect net profit after COD RTO losses, and CopyCraft to ship high-converting storefront bios and SERP snippets."
      }
    ]
  },
  "billfold-demo": {
    title: "BillFold Walkthrough — GST Split Math & Dynamic UPI QR Invoices",
    audioSrc: "audio/billfold-demo.mp3",
    poster: "images/billfold-preview.jpg",
    durationLabel: "0:24",
    steps: [
      {
        tStart: 0, tEnd: 8.0,
        stepBadge: "STEP 1 / 3 • STATE ROUTING",
        kicker: "Intra-State vs Inter-State GST",
        headline: "Select supplier & client states to auto-split CGST + SGST or IGST",
        metrics: ["Same State → 9% CGST + 9% SGST", "Cross State → 18% IGST", "Amount in Words (Lakhs/Thousands)"],
        caption: "In BillFold, select your supplier and client states first so the engine automatically routes CGST + SGST or IGST."
      },
      {
        tStart: 8.0, tEnd: 16.0,
        stepBadge: "STEP 2 / 3 • DYNAMIC UPI QR",
        kicker: "Zero-Reconciliation Collection",
        headline: "Embed your UPI VPA so the exact grand total is locked into the QR code",
        metrics: ["upi://pay?pa=merchant@upi", "Exact Grand Total Locked", "Works with GPay / PhonePe / Paytm"],
        caption: "Enter your UPI ID so BillFold encodes the exact invoice grand total and invoice number directly inside the payment QR."
      },
      {
        tStart: 16.0, tEnd: 30.0,
        stepBadge: "STEP 3 / 3 • A4 PDF EXPORT",
        kicker: "Instant Client Delivery",
        headline: "Export a clean A4 tax invoice PDF in 30 seconds with zero watermarks",
        metrics: ["Print-Ready A4 Layout", "Saved Locally in Browser", "₹0 Per Invoice"],
        caption: "Click Print or Save PDF to send a clean A4 GST invoice on WhatsApp or email without paying monthly billing software fees."
      }
    ]
  },
  "tapping-demo": {
    title: "TapPing Walkthrough — Pre-Filled wa.me Links & Packaging QR Funnels",
    audioSrc: "audio/tapping-demo.mp3",
    poster: "images/tapping-preview.jpg",
    durationLabel: "0:20",
    steps: [
      {
        tStart: 0, tEnd: 6.5,
        stepBadge: "STEP 1 / 3 • PHONE NORMALIZATION",
        kicker: "Direct wa.me Routing",
        headline: "Strip spaces and dashes into a clean country-code WhatsApp endpoint",
        metrics: ["Auto-Formats +91 Numbers", "Zero Redirect Hop Latency", "No ₹2,500/mo BSP API Fee"],
        caption: "TapPing normalizes your business phone number and builds an official wa.me deep link that opens WhatsApp in one tap."
      },
      {
        tStart: 6.5, tEnd: 13.5,
        stepBadge: "STEP 2 / 3 • INTENT PAYLOAD",
        kicker: "Kill the 'Hi' Dead-End",
        headline: "Pre-fill SKU, quantity, and delivery PIN code inside the buyer's chat box",
        metrics: ["3x Faster Order Qualification", "URL-Encoded Utterance", "One-Click Presets"],
        caption: "Add a pre-filled buyer message with item name and city PIN code so leads never stall after sending a blank 'Hi'."
      },
      {
        tStart: 13.5, tEnd: 30.0,
        stepBadge: "STEP 3 / 3 • 300PX QR EXPORT",
        kicker: "Offline-to-WhatsApp Funnel",
        headline: "Download the 300px PNG QR code for box inserts, counter stands & flyers",
        metrics: ["High-Contrast 300px PNG", "Instant Smartphone Scan", "100% Free Forever"],
        caption: "Download the high-contrast QR PNG and print it on packaging inserts or shop counters to turn offline buyers into repeat WhatsApp chats."
      }
    ]
  },
  "marginmint-demo": {
    title: "MarginMint Walkthrough — Indian D2C COD RTO & Net Margin Simulator",
    audioSrc: "audio/marginmint-demo.mp3",
    poster: "images/marginmint-preview.jpg",
    durationLabel: "0:21",
    steps: [
      {
        tStart: 0, tEnd: 7.0,
        stepBadge: "STEP 1 / 3 • TRUE LANDED COST",
        kicker: "Selling Price vs Tax & COGS",
        headline: "Strip inclusive GST out of MRP before calculating gross product margin",
        metrics: ["Tax-Exclusive Realization", "Volumetric Weight L×W×H/5000", "Forward Courier Slab"],
        caption: "MarginMint starts by backing out inclusive GST from your MRP and deducting landed manufacturing and packaging costs."
      },
      {
        tStart: 7.0, tEnd: 14.0,
        stepBadge: "STEP 2 / 3 • COD RTO PENALTY",
        kicker: "The Hidden Profit Killer",
        headline: "Simulate 20%–35% COD RTO rates where failed orders burn 2x shipping",
        metrics: ["Forward + Reverse Freight Burn", "Delivered Order Absorption", "CPA / ROAS Stress Test"],
        caption: "Dial in your realistic COD Return-to-Origin percentage so you see exactly how failed deliveries tax every successful order."
      },
      {
        tStart: 14.0, tEnd: 30.0,
        stepBadge: "STEP 3 / 3 • BREAK-EVEN ROAS",
        kicker: "Scale Ads Safely",
        headline: "Read your exact net profit per dispatched order before raising ad spend",
        metrics: ["Exact Net Margin %", "Safe Max CPA Limit", "Prepaid Incentive Math"],
        caption: "Check your net rupee profit per dispatched unit and break-even ROAS before scaling Meta or Google campaigns."
      }
    ]
  },
  "copycraft-demo": {
    title: "CopyCraft Walkthrough — Anti-Slop Storefront Bios & Pixel SERP Simulator",
    audioSrc: "audio/copycraft-demo.mp3",
    poster: "images/copycraft-preview.jpg",
    durationLabel: "0:21",
    steps: [
      {
        tStart: 0, tEnd: 7.0,
        stepBadge: "STEP 1 / 3 • ANTI-SLOP BIO STRUCTURE",
        kicker: "150-Character Conversion Formula",
        headline: "What you sell + who it is for + hard proof + direct action trigger",
        metrics: ["Native Line-Break Preservation", "Live 150-Char Counter", "Zero AI Buzzwords"],
        caption: "CopyCraft formats your Instagram, WhatsApp Business, and LinkedIn bios using a crisp 4-line conversion formula."
      },
      {
        tStart: 7.0, tEnd: 14.0,
        stepBadge: "STEP 2 / 3 • PIXEL SERP CHECK",
        kicker: "Prevent Google Truncation",
        headline: "Test your title tag against Google's 580px / 60-char cutoff in real time",
        metrics: ["Live Desktop & Mobile Preview", "155-Char Meta Description", "Higher Organic CTR"],
        caption: "Switch to the SERP simulator to verify your page title and meta description never get cut off with ellipses on Google."
      },
      {
        tStart: 14.0, tEnd: 30.0,
        stepBadge: "STEP 3 / 3 • ONE-CLICK DEPLOY",
        kicker: "Clean Unicode & HTML Meta",
        headline: "Copy formatted storefront bios or ready-to-paste SEO meta tags instantly",
        metrics: ["Preserves Clean Spacing", "Instant Clipboard Copy", "Built for Local & D2C Brands"],
        caption: "Copy your finished bio or HTML meta snippet in one click and paste it straight into your storefront or website header."
      }
    ]
  }
};

window.renderAiVideoPlayer = function(videoKey, customTitle) {
  const safeKey = (videoKey && window.KITEDESK_AI_VIDEOS[videoKey]) ? videoKey : "kitedesk-studio";
  const cfg = window.KITEDESK_AI_VIDEOS[safeKey];
  const s0 = cfg.steps[0];
  const titleText = customTitle || cfg.title;
  const metricsHtml = s0.metrics.map(m => `<span class="ai-vp-metric-chip">${escapeHtml(m)}</span>`).join("");
  return `
    <div class="ai-video-player" data-ai-video="${escapeHtml(safeKey)}">
      <audio class="ai-vp-audio" src="${escapeHtml(cfg.audioSrc)}" preload="metadata"></audio>
      <div class="ai-vp-stage" title="Click to Play / Pause AI Walkthrough">
        <img class="ai-vp-backdrop" src="${escapeHtml(cfg.poster)}" alt="${escapeHtml(titleText)}" loading="lazy" />
        <div class="ai-vp-gradient"></div>
        <div class="ai-vp-topbar">
          <span class="ai-vp-tag"><span class="ai-vp-dot"></span> KITEDESK AI WALKTHROUGH</span>
          <span class="ai-vp-step-pill">${escapeHtml(s0.stepBadge)}</span>
        </div>
        <div class="ai-vp-center">
          <div class="ai-vp-kicker">${escapeHtml(s0.kicker)}</div>
          <h4 class="ai-vp-headline">${escapeHtml(s0.headline)}</h4>
          <div class="ai-vp-metrics">${metricsHtml}</div>
        </div>
        <button type="button" class="ai-vp-bigplay" aria-label="Play AI Video">▶</button>
        <div class="ai-vp-caption-bar">${escapeHtml(s0.caption)}</div>
      </div>
      <div class="ai-vp-controls">
        <button type="button" class="ai-vp-btn">▶ Play AI Video</button>
        <div class="ai-vp-timeline" title="Seek walkthrough">
          <div class="ai-vp-progress"></div>
        </div>
        <div class="ai-vp-steps-nav">
          <button type="button" class="ai-vp-step-btn active" data-step-idx="0">01</button>
          <button type="button" class="ai-vp-step-btn" data-step-idx="1">02</button>
          <button type="button" class="ai-vp-step-btn" data-step-idx="2">03</button>
        </div>
        <span class="ai-vp-time">0:00 / ${escapeHtml(cfg.durationLabel)}</span>
      </div>
    </div>
  `;
};

window.initAiVideoPlayers = function(rootEl) {
  const scope = rootEl || document;
  const players = scope.querySelectorAll(".ai-video-player:not([data-bound='1'])");
  players.forEach(player => {
    player.setAttribute("data-bound", "1");
    const key = player.getAttribute("data-ai-video") || "kitedesk-studio";
    const cfg = window.KITEDESK_AI_VIDEOS[key] || window.KITEDESK_AI_VIDEOS["kitedesk-studio"];
    const audio = player.querySelector(".ai-vp-audio");
    const stage = player.querySelector(".ai-vp-stage");
    const playBtn = player.querySelector(".ai-vp-btn");
    const progressEl = player.querySelector(".ai-vp-progress");
    const timelineEl = player.querySelector(".ai-vp-timeline");
    const timeEl = player.querySelector(".ai-vp-time");
    const stepPill = player.querySelector(".ai-vp-step-pill");
    const kickerEl = player.querySelector(".ai-vp-kicker");
    const headlineEl = player.querySelector(".ai-vp-headline");
    const metricsEl = player.querySelector(".ai-vp-metrics");
    const captionEl = player.querySelector(".ai-vp-caption-bar");
    const stepBtns = player.querySelectorAll(".ai-vp-step-btn");
    let pendingSeekTime = null;

    function fmtTime(sec) {
      const s = Math.max(0, Math.floor(sec || 0));
      const m = Math.floor(s / 60);
      const r = s % 60;
      return m + ":" + (r < 10 ? "0" + r : r);
    }

    function applyStep(idx) {
      const st = cfg.steps[idx] || cfg.steps[0];
      if (stepPill) stepPill.textContent = st.stepBadge;
      if (kickerEl) kickerEl.textContent = st.kicker;
      if (headlineEl) headlineEl.textContent = st.headline;
      if (metricsEl) metricsEl.innerHTML = st.metrics.map(m => `<span class="ai-vp-metric-chip">${escapeHtml(m)}</span>`).join("");
      if (captionEl) captionEl.textContent = st.caption;
      stepBtns.forEach((b, i) => b.classList.toggle("active", i === idx));
    }

    function togglePlay() {
      if (!audio) return;
      if (audio.paused) {
        document.querySelectorAll(".ai-vp-audio").forEach(other => {
          if (other !== audio && !other.paused) other.pause();
        });
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    }

    if (stage) stage.addEventListener("click", togglePlay);
    if (playBtn) playBtn.addEventListener("click", togglePlay);

    if (audio) {
      audio.addEventListener("loadedmetadata", () => {
        if (pendingSeekTime !== null && !isNaN(audio.duration)) {
          try { audio.currentTime = pendingSeekTime; } catch (e) {}
          pendingSeekTime = null;
        }
      });
      audio.addEventListener("play", () => {
        player.classList.add("is-playing");
        if (playBtn) playBtn.textContent = "❚❚ Pause";
      });
      audio.addEventListener("pause", () => {
        player.classList.remove("is-playing");
        if (playBtn) playBtn.textContent = "▶ Play AI Video";
      });
      audio.addEventListener("ended", () => {
        player.classList.remove("is-playing");
        if (playBtn) playBtn.textContent = "↻ Replay AI Video";
        if (progressEl) progressEl.style.width = "100%";
      });
      audio.addEventListener("timeupdate", () => {
        if (pendingSeekTime !== null) {
          if (!isNaN(audio.duration)) {
            try { audio.currentTime = pendingSeekTime; } catch (e) {}
            pendingSeekTime = null;
          } else {
            return;
          }
        }
        const dur = (!isNaN(audio.duration) && audio.duration > 0) ? audio.duration : 22;
        const cur = audio.currentTime || 0;
        if (progressEl) progressEl.style.width = Math.min(100, (cur / dur) * 100).toFixed(1) + "%";
        if (timeEl) timeEl.textContent = fmtTime(cur) + " / " + fmtTime(dur);
        let activeIdx = 0;
        for (let i = 0; i < cfg.steps.length; i++) {
          if (cur >= cfg.steps[i].tStart) activeIdx = i;
        }
        applyStep(activeIdx);
      });
    }

    if (timelineEl) {
      timelineEl.addEventListener("click", (e) => {
        const rect = timelineEl.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const dur = (audio && !isNaN(audio.duration) && audio.duration > 0) ? audio.duration : 22;
        const targetTime = pct * dur;
        if (progressEl) progressEl.style.width = Math.min(100, pct * 100).toFixed(1) + "%";
        if (timeEl) timeEl.textContent = fmtTime(targetTime) + " / " + fmtTime(dur);
        if (audio && !isNaN(audio.duration)) {
          try { audio.currentTime = targetTime; } catch (err) {}
          if (audio.paused) togglePlay();
        } else {
          pendingSeekTime = targetTime;
        }
      });
    }

    stepBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute("data-step-idx"), 10) || 0;
        applyStep(idx);
        if (cfg.steps[idx]) {
          const targetTime = cfg.steps[idx].tStart;
          const dur = (audio && !isNaN(audio.duration) && audio.duration > 0) ? audio.duration : 22;
          if (progressEl) progressEl.style.width = Math.min(100, (targetTime / dur) * 100).toFixed(1) + "%";
          if (timeEl) timeEl.textContent = fmtTime(targetTime) + " / " + fmtTime(dur);
          if (audio && !isNaN(audio.duration)) {
            try { audio.currentTime = targetTime; } catch (err) {}
            if (audio.paused) togglePlay();
          } else {
            pendingSeekTime = targetTime;
          }
        }
      });
    });
  });
};

window.initAiVideoPlayers(document);
document.addEventListener("DOMContentLoaded", () => {
  window.initAiVideoPlayers(document);
  if (document.getElementById("waPhone") || document.getElementById("waQrImg")) {
    function updateStandeeBrand() {
  const brandInput = document.getElementById('waBrand');
  const previewEl = document.getElementById('standeeBrandPreview');
  if (previewEl) {
    const val = brandInput && brandInput.value ? brandInput.value.trim() : '';
    previewEl.textContent = val || 'Your Shop Name';
  }
  const ctaInput = document.getElementById('waStandeeCta');
  const ctaPreviewEl = document.getElementById('standeeCtaPreview');
  if (ctaPreviewEl) {
    const ctaVal = ctaInput && ctaInput.value ? ctaInput.value.trim() : '';
    ctaPreviewEl.textContent = ctaVal || 'Scan to Order on WhatsApp';
  }
}
function printCounterStandee() {
  updateStandeeBrand();
  window.print();
}
buildWhatsApp();
updateStandeeBrand();
  }
  if (document.getElementById("fmtInput")) {
    updateFormatter();
  }
  if (document.getElementById("gbpDescInput")) {
    updateGbpProfile();
  }
  if (document.getElementById("mmSell")) {
    calcMargin();
  }
});

function toggleNav() {
  const nav = document.getElementById('siteNav');
  if (nav) nav.classList.toggle('open');
}

function getPostWordCount(post) {
  if (!post) return 0;
  if (post.wordCount) return post.wordCount;
  const raw = post.bodyHtml || (Array.isArray(post.content) ? post.content.join(' ') : (post.content || post.body || ''));
  const text = String(raw).replace(/<[^>]+>/g, ' ').trim();
  return text ? text.split(/\s+/).length : 0;
}

function getPostBodyHtml(post) {
  if (!post) return '';
  if (post.bodyHtml) return post.bodyHtml;
  const raw = post.content || post.body || '';
  if (Array.isArray(raw)) {
    return raw.map(p => `<p>${escapeHtml(p)}</p>`).join('');
  }
  return String(raw);
}

function renderPostCard(post) {
  const wc = getPostWordCount(post);
  const safeSlug = encodeURIComponent(post.slug || '');
  const safeImg = post.image ? escapeHtml(post.image) : '';
  const safeTitle = escapeHtml(post.title || '');
  const safeCat = escapeHtml(post.category || '');
  const safeExcerpt = escapeHtml(post.excerpt || '');
  const safeDate = escapeHtml(post.date || '');
  const safeRead = escapeHtml(post.readTime || '');
  return `
    <article class="card post-card">
      <div>
        ${safeImg ? `<a href="post.html?slug=${safeSlug}"><img src="${safeImg}" alt="${safeTitle}" class="post-card-thumb" loading="lazy" /></a>` : ''}
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;">
          <span class="card-tag" style="margin:0;">${safeCat}</span>
          ${(post.aiVideoKey) ? `<span class="mini-badge">▶ AI Video + Guide</span>` : ''}
        </div>
        <h3><a href="post.html?slug=${safeSlug}">${safeTitle}</a></h3>
        <p class="muted">${safeExcerpt}</p>
      </div>
      <div class="post-meta">${safeDate} &bull; ${safeRead} ${wc ? `&bull; ${escapeHtml(wc)} words` : ''}</div>
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

function applyJournalKeyword(kw) {
  const input = document.getElementById('journalSearch');
  if (!input) return;
  input.value = (input.value.trim().toLowerCase() === kw.toLowerCase()) ? '' : kw;
  renderJournalPage();
}

function resetJournalFilters() {
  const input = document.getElementById('journalSearch');
  if (input) input.value = '';
  const allBtn = document.querySelector('#journalFilters .pill');
  filterPosts('All', allBtn);
}

function renderJournalPage() {
  const grid = document.getElementById('journalGrid');
  if (!grid || !window.KITEDESK_POSTS) return;
  const total = window.KITEDESK_POSTS.length;
  const rawQuery = (document.getElementById('journalSearch')?.value || '').trim();
  const q = rawQuery.toLowerCase();
  const filtered = window.KITEDESK_POSTS.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    if (!q) return matchCat;
    const bodyPlain = (typeof getPostBodyHtml === 'function' ? getPostBodyHtml(p) : (p.content || '')).replace(/<[^>]+>/g, ' ').toLowerCase();
    const matchQ = p.title.toLowerCase().includes(q) ||
      (p.excerpt || '').toLowerCase().includes(q) ||
      (p.category || '').toLowerCase().includes(q) ||
      bodyPlain.includes(q);
    return matchCat && matchQ;
  });
  const counterEl = document.getElementById('playbookCounter');
  if (counterEl) {
    counterEl.textContent = `Showing ${filtered.length} of ${total} Playbooks`;
  }
  grid.innerHTML = filtered.length
    ? filtered.map(renderPostCard).join('')
    : `<div class="muted" style="grid-column:1/-1;padding:24px;border:1px dashed var(--border-strong);border-radius:12px;">No matching playbooks found${rawQuery ? ` for "${escapeHtml(rawQuery)}"` : ''}. <button type="button" class="pill" style="margin-left:8px;" onclick="resetJournalFilters()">Reset Filters</button></div>`;
}
renderJournalPage();

const renderJournal = renderJournalPage;

function openArticleModal(slugOrIndex) {
  if (!window.KITEDESK_POSTS || !window.KITEDESK_POSTS.length) return;
  let matched = null;
  let notFoundSlug = '';
  if (typeof slugOrIndex === 'number') {
    matched = window.KITEDESK_POSTS[slugOrIndex];
  } else if (slugOrIndex) {
    matched = window.KITEDESK_POSTS.find(p => p.slug === slugOrIndex);
    if (!matched) notFoundSlug = String(slugOrIndex);
  }
  const post = matched || window.KITEDESK_POSTS[0];
  if (!post) return;
  const articleBodyEl = document.getElementById('articleBody');
  if (!articleBodyEl) {
    window.location.href = `post.html?slug=${encodeURIComponent(post.slug)}`;
    return;
  }
  const wc = getPostWordCount(post);
  document.title = `${post.title} — KiteDesk Studio`;
  const missingBanner = notFoundSlug
    ? `<div class="article-callout" style="margin-top:0;margin-bottom:18px;">Requested playbook <code>${escapeHtml(notFoundSlug)}</code> was not found. Showing our latest featured playbook below.</div>`
    : '';
  articleBodyEl.innerHTML = `
    ${missingBanner}
    <span class="card-tag">${escapeHtml(post.category)}</span>
    <h1>${escapeHtml(post.title)}</h1>
    <div class="post-meta" style="margin-bottom:16px;">${escapeHtml(post.date)} &bull; ${escapeHtml(post.readTime)} ${wc ? `&bull; ${escapeHtml(wc)} words` : ''} &bull; Plain-English Playbook</div>
    ${post.image ? `<img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}" class="article-hero-img" />` : ''}
    ${(post.aiVideoKey && typeof window.renderAiVideoPlayer === 'function') ? `
          <div style="margin: 0 0 28px 0;">
            <span class="inv-badge" style="margin-bottom:8px;">WATCH OUR ORIGINAL AI-NARRATED WALKTHROUGH</span>
            ${window.renderAiVideoPlayer(post.aiVideoKey || "kitedesk-studio", post.videoCaption || post.title)}
          </div>` : ''}
    ${getPostBodyHtml(post)}
    <div style="margin-top:32px;padding-top:20px;border-top:2px solid var(--border);display:flex;gap:10px;flex-wrap:wrap;align-items:center;justify-content:space-between;">
      <strong>Use the free KiteDesk tools mentioned in this guide:</strong>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <a href="billfold.html" class="btn btn-sm btn-primary">BillFold Invoicing</a>
        <a href="tapping.html" class="btn btn-sm btn-outline">TapPing WhatsApp QR</a>
        <a href="marginmint.html" class="btn btn-sm btn-outline">MarginMint Profit Lab</a>
        <a href="copycraft.html" class="btn btn-sm btn-outline">CopyCraft Bio &amp; SERP</a>
      </div>
    </div>
  `;
  if (typeof window.initAiVideoPlayers === 'function') {
    window.initAiVideoPlayers(articleBodyEl);
  }
}

const articleBody = document.getElementById('articleBody');
if (articleBody && window.KITEDESK_POSTS) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  openArticleModal(slug);
}

/* 1. BILLFOLD — GST INVOICE, AMOUNT IN WORDS, SAVED HISTORY & UPI QR ENGINE */
let invoiceItems = [
  { desc: 'Handcrafted Jooti Pair — Festive Edition', qty: 2, rate: 1450 },
  { desc: 'Express Courier & Gift Packaging', qty: 1, rate: 150 }
];
try {
  const savedInv = localStorage.getItem('bf_items');
  if (savedInv) {
    const parsed = JSON.parse(savedInv);
    if (Array.isArray(parsed) && parsed.length) invoiceItems = parsed;
  }
} catch (e) {}

const DEFAULT_SAVED_INVOICES = [
  {
    num: 'INV-2026-104',
    from: 'KiteDesk Crafts',
    fromGstin: '09AABCK7741P1Z2',
    to: 'Aarav Retail Pvt Ltd',
    toGstin: '09XYZAB5678G1Z2',
    currency: '₹',
    discount: 0,
    taxMode: 'cgst_sgst',
    tax: 12,
    upi: 'merchant@upi',
    notes: 'Scan the UPI QR code to pay instantly, or remit via NEFT within 7 days.',
    items: [
      { desc: 'Handcrafted Jooti Pair — Festive Edition', qty: 2, rate: 1450 },
      { desc: 'Express Courier & Gift Packaging', qty: 1, rate: 150 }
    ],
    total: 3416
  },
  {
    num: 'B2B-2026-041',
    from: 'KiteDesk Digital Labs LLP',
    fromGstin: '09AABCK7741P1Z2',
    to: 'Vanguard D2C Foods Pvt Ltd',
    toGstin: '27AAACV5519R1Z6',
    currency: '₹',
    discount: 0,
    taxMode: 'igst',
    tax: 18,
    upi: 'kitedesklabs@hdfcbank',
    notes: 'Inter-State B2B supply (18% IGST). Eligible for full GSTR-2B Input Tax Credit.',
    items: [
      { desc: 'Performance Ads & Local SEO Retainer (SAC 998361)', qty: 1, rate: 35000 }
    ],
    total: 41300
  }
];

function getSavedInvoicesList() {
  try {
    const raw = localStorage.getItem('bf_saved_invoices');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
    localStorage.setItem('bf_saved_invoices', JSON.stringify(DEFAULT_SAVED_INVOICES));
    return DEFAULT_SAVED_INVOICES.slice();
  } catch (e) {
    return DEFAULT_SAVED_INVOICES.slice();
  }
}

function renderSavedInvoicesBar() {
  const container = document.getElementById('bfSavedList');
  if (!container) return;
  const list = getSavedInvoicesList();
  if (!list.length) {
    container.innerHTML = '<span class="muted" style="font-size:0.76rem;">No saved bills yet. Click "Save Current Bill" to store up to 8 invoices locally.</span>';
    return;
  }
  container.innerHTML = list.map((inv, idx) => {
    const safeNum = escapeHtml(inv.num || 'INV');
    const safeTo = escapeHtml((inv.to || 'Client').slice(0, 20));
    const safeCur = escapeHtml(inv.currency || '₹');
    const safeTot = Number(inv.total || 0).toLocaleString('en-IN', { maximumFractionDigits: 0 });
    return `
      <span class="bf-saved-chip" onclick="loadSavedInvoice(${idx})" title="Click to load ${safeNum}">
        <span>${safeNum} &bull; ${safeTo} (${safeCur}${escapeHtml(safeTot)})</span>
        <button type="button" class="bf-saved-del" onclick="deleteSavedInvoice(${idx}, event)" aria-label="Delete saved invoice ${safeNum}" title="Remove saved invoice">&times;</button>
      </span>
    `;
  }).join('');
}

function saveInvoiceToHistory() {
  if (!document.getElementById('invoicePreview')) return;
  const cur = document.getElementById('invCurrency')?.value || '₹';
  const taxRate = Number(document.getElementById('invTax')?.value) || 0;
  const taxMode = document.getElementById('invTaxMode')?.value || 'cgst_sgst';
  const discount = Number(document.getElementById('invDiscount')?.value) || 0;
  const sub = invoiceItems.reduce((acc, i) => acc + (Number(i.qty) || 0) * (Number(i.rate) || 0), 0);
  const taxable = Math.max(0, sub - discount);
  const taxAmt = (taxMode === 'none' || taxRate === 0) ? 0 : taxable * (taxRate / 100);
  const total = taxable + taxAmt;

  const entry = {
    docType: document.getElementById('invDocType')?.value || 'TAX INVOICE',
    num: (document.getElementById('invNum')?.value || 'INV-2026-001').trim(),
    from: document.getElementById('invFrom')?.value || 'Your Business',
    fromGstin: document.getElementById('invFromGstin')?.value || '',
    to: document.getElementById('invTo')?.value || 'Customer',
    toGstin: document.getElementById('invToGstin')?.value || '',
    currency: cur,
    discount: discount,
    taxMode: taxMode,
    tax: taxRate,
    upi: (document.getElementById('invUpi')?.value || '').trim(),
    notes: document.getElementById('invNotes')?.value || '',
    items: invoiceItems.map(i => ({ desc: String(i.desc || ''), qty: Number(i.qty) || 0, rate: Number(i.rate) || 0 })),
    total: total
  };

  const list = getSavedInvoicesList().filter(item => item.num !== entry.num);
  list.unshift(entry);
  const trimmed = list.slice(0, 8);
  try {
    localStorage.setItem('bf_saved_invoices', JSON.stringify(trimmed));
  } catch (e) {}
  renderSavedInvoicesBar();
}

function loadSavedInvoice(idx) {
  const list = getSavedInvoicesList();
  const p = list[idx];
  if (!p) return;
  if (document.getElementById('invDocType')) document.getElementById('invDocType').value = p.docType || 'TAX INVOICE';
  if (document.getElementById('invFrom')) document.getElementById('invFrom').value = p.from || '';
  if (document.getElementById('invFromGstin')) document.getElementById('invFromGstin').value = p.fromGstin || '';
  if (document.getElementById('invTo')) document.getElementById('invTo').value = p.to || '';
  if (document.getElementById('invToGstin')) document.getElementById('invToGstin').value = p.toGstin || '';
  if (document.getElementById('invNum')) document.getElementById('invNum').value = p.num || '';
  if (document.getElementById('invCurrency')) document.getElementById('invCurrency').value = p.currency || '₹';
  if (document.getElementById('invDiscount')) document.getElementById('invDiscount').value = p.discount || 0;
  if (document.getElementById('invTaxMode')) document.getElementById('invTaxMode').value = p.taxMode || 'cgst_sgst';
  if (document.getElementById('invTax')) document.getElementById('invTax').value = p.tax ?? 12;
  if (document.getElementById('invUpi')) document.getElementById('invUpi').value = p.upi || '';
  if (document.getElementById('invNotes')) document.getElementById('invNotes').value = p.notes || '';
  if (Array.isArray(p.items) && p.items.length) {
    invoiceItems = p.items.map(i => ({ desc: String(i.desc || ''), qty: Number(i.qty) || 0, rate: Number(i.rate) || 0 }));
  }
  renderInvoiceInputs();
  renderInvoice();
}

function deleteSavedInvoice(idx, ev) {
  if (ev && typeof ev.stopPropagation === 'function') ev.stopPropagation();
  const list = getSavedInvoicesList();
  list.splice(idx, 1);
  try {
    localStorage.setItem('bf_saved_invoices', JSON.stringify(list));
  } catch (e) {}
  renderSavedInvoicesBar();
}

function setBackupStatus(msg, isError) {
  const el = document.getElementById('bfBackupStatus');
  if (!el) return;
  el.textContent = msg;
  el.style.display = 'block';
  el.style.color = isError ? '#b91c1c' : '#0f766e';
}

function exportSavedInvoicesJson() {
  const list = getSavedInvoicesList();
  if (!list.length) {
    setBackupStatus('No saved invoices to export yet.', true);
    return;
  }
  const blob = new Blob([JSON.stringify(list, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `billfold-invoices-backup-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  setBackupStatus(`Exported ${list.length} saved invoice(s) to JSON backup.`, false);
}

function importSavedInvoicesJson(ev) {
  const file = ev?.target?.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const parsed = JSON.parse(String(e.target?.result || ''));
      if (!Array.isArray(parsed)) throw new Error('Backup must be a JSON array.');
      const valid = parsed
        .filter(item => item && typeof item === 'object' && Array.isArray(item.items))
        .map(item => ({
          num: String(item.num || 'INV-2026-001').slice(0, 60),
          from: String(item.from || 'Your Business').slice(0, 120),
          fromGstin: String(item.fromGstin || '').slice(0, 20),
          to: String(item.to || 'Customer').slice(0, 120),
          toGstin: String(item.toGstin || '').slice(0, 20),
          currency: ['₹', '$', '€', '£'].includes(item.currency) ? item.currency : '₹',
          discount: Math.max(0, Number(item.discount) || 0),
          taxMode: ['cgst_sgst', 'igst', 'none'].includes(item.taxMode) ? item.taxMode : 'cgst_sgst',
          tax: Math.min(28, Math.max(0, Number(item.tax) || 0)),
          upi: String(item.upi || '').slice(0, 100),
          notes: String(item.notes || '').slice(0, 500),
          items: item.items.slice(0, 50).map(i => ({
            desc: String(i?.desc || 'Item').slice(0, 200),
            qty: Math.max(1, Number(i?.qty) || 1),
            rate: Math.max(0, Number(i?.rate) || 0)
          })),
          total: Math.max(0, Number(item.total) || 0)
        }));
      if (!valid.length) throw new Error('No valid invoices found in JSON.');
      const existing = getSavedInvoicesList();
      const merged = [...valid];
      existing.forEach(oldInv => {
        if (!merged.some(m => m.num === oldInv.num)) merged.push(oldInv);
      });
      const finalList = merged.slice(0, 12);
      localStorage.setItem('bf_saved_invoices', JSON.stringify(finalList));
      renderSavedInvoicesBar();
      setBackupStatus(`Imported ${valid.length} invoice(s). ${finalList.length} total saved locally.`, false);
    } catch (err) {
      setBackupStatus('Invalid backup file. Please select a valid BillFold JSON export.', true);
    } finally {
      if (ev?.target) ev.target.value = '';
    }
  };
  reader.readAsText(file);
}

function applyHsnQuickFill(selectEl) {
  const val = selectEl?.value || '';
  if (!val) return;
  const parts = val.split('|');
  if (parts.length < 4) return;
  const label = parts[1];
  const gstRate = Number(parts[2]) || 18;
  const defaultRate = Number(parts[3]) || 500;

  const taxInput = document.getElementById('invTax');
  const taxModeSel = document.getElementById('invTaxMode');
  if (taxInput) taxInput.value = gstRate;
  if (taxModeSel && taxModeSel.value === 'none') {
    taxModeSel.value = 'cgst_sgst';
  }

  const placeholderIdx = invoiceItems.findIndex(i => i.desc === 'New Line Item');
  if (placeholderIdx !== -1) {
    invoiceItems[placeholderIdx] = { desc: label, qty: 1, rate: defaultRate };
  } else {
    invoiceItems.push({ desc: label, qty: 1, rate: defaultRate });
  }

  selectEl.value = '';
  renderInvoiceInputs();
  renderInvoice();
}

function renderInvoiceInputs() {
  const list = document.getElementById('invoiceItemsList');
  if (!list) return;
  list.innerHTML = invoiceItems.map((item, idx) => `
    <div class="item-row">
      <input type="text" value="${escapeHtml(item.desc)}" oninput="invoiceItems[${idx}].desc=this.value;renderInvoice()" placeholder="Item or service description" />
      <input type="number" class="mono-input" value="${escapeHtml(item.qty)}" min="1" oninput="invoiceItems[${idx}].qty=Number(this.value)||0;renderInvoice()" />
      <input type="number" class="mono-input" value="${escapeHtml(item.rate)}" min="0" oninput="invoiceItems[${idx}].rate=Number(this.value)||0;renderInvoice()" />
      <button type="button" class="btn btn-sm btn-secondary" onclick="removeInvoiceItem(${idx})" title="Remove item">&times;</button>
    </div>
  `).join('');
}

function addInvoiceItem() {
  invoiceItems.push({ desc: 'New Line Item', qty: 1, rate: 500 });
  renderInvoiceInputs();
  renderInvoice();
}

function extractMrpBase() {
  const mrpInput = document.getElementById('bfMrpInclusive');
  const statusEl = document.getElementById('bfMrpStatus');
  const mrpVal = Number(mrpInput?.value) || 0;
  if (mrpVal <= 0) {
    if (statusEl) statusEl.textContent = 'Enter MRP > 0';
    return;
  }
  const taxMode = document.getElementById('invTaxMode')?.value || 'cgst_sgst';
  const rawRate = Number(document.getElementById('invTax')?.value) || 0;
  const taxRate = taxMode === 'none' ? 0 : rawRate;
  const baseRate = Number((mrpVal / (1 + (taxRate / 100))).toFixed(2));

  if (invoiceItems.length === 0) {
    invoiceItems.push({ desc: 'Line Item', qty: 1, rate: baseRate });
  } else {
    invoiceItems[invoiceItems.length - 1].rate = baseRate;
  }

  const cur = document.getElementById('invCurrency')?.value || '₹';
  if (statusEl) statusEl.textContent = `Base: ${cur}${baseRate.toFixed(2)} (${taxRate}% GST)`;
  renderInvoiceInputs();
  renderInvoice();
}

function removeInvoiceItem(idx) {
  if (invoiceItems.length <= 1) return;
  invoiceItems.splice(idx, 1);
  renderInvoiceInputs();
  renderInvoice();
}

const GSTIN_REGEX = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

function updateGstinStatus(rawVal, statusId) {
  const el = document.getElementById(statusId);
  if (!el) return;
  const val = (rawVal || '').trim().toUpperCase();
  if (!val) {
    el.textContent = '';
    el.className = 'gstin-status';
    return;
  }
  if (GSTIN_REGEX.test(val)) {
    el.textContent = 'Valid 15-char GSTIN ✓';
    el.className = 'gstin-status is-valid';
  } else {
    el.textContent = 'Check GSTIN format (15 chars, e.g. 27AABCU9603R1ZM)';
    el.className = 'gstin-status is-invalid';
  }
}

function incrementInvoiceNumber() {
  const input = document.getElementById('invNum');
  if (!input) return;
  const raw = (input.value || '').trim();
  const match = raw.match(/^(.*?)(\d+)$/);
  if (match) {
    const prefix = match[1];
    const numStr = match[2];
    const nextNum = String(parseInt(numStr, 10) + 1).padStart(numStr.length, '0');
    input.value = prefix + nextNum;
  } else {
    input.value = raw ? `${raw}-001` : 'INV-2026-105';
  }
  renderInvoice();
}

function renderInvoice() {
  if (!document.getElementById('invoicePreview')) return;
  const cur = document.getElementById('invCurrency')?.value || '₹';
  const safeCur = escapeHtml(cur);
  const taxRate = Number(document.getElementById('invTax')?.value) || 0;
  const taxMode = document.getElementById('invTaxMode')?.value || 'cgst_sgst';
  const discount = Number(document.getElementById('invDiscount')?.value) || 0;
  const fromName = document.getElementById('invFrom')?.value || 'Your Business';
  const fromGstin = document.getElementById('invFromGstin')?.value || '';
  const toName = document.getElementById('invTo')?.value || 'Customer';
  const toGstin = document.getElementById('invToGstin')?.value || '';
  updateGstinStatus(fromGstin, 'invFromGstinStatus');
  updateGstinStatus(toGstin, 'invToGstinStatus');
  const upiId = (document.getElementById('invUpi')?.value || '').trim();

  const docType = document.getElementById('invDocType')?.value || 'TAX INVOICE';
  const prevDocTypeEl = document.getElementById('prevDocType');
  if (prevDocTypeEl) prevDocTypeEl.textContent = docType;
  document.getElementById('prevFrom').textContent = fromName;
  document.getElementById('prevFromGstin').textContent = fromGstin ? `GSTIN: ${fromGstin}` : '';
  document.getElementById('prevTo').textContent = toName;
  document.getElementById('prevToGstin').textContent = toGstin ? `GSTIN: ${toGstin}` : '';
  const invNumVal = (document.getElementById('invNum')?.value || 'INV-2026-001').trim() || 'INV-2026-001';
  document.getElementById('prevNum').textContent = invNumVal;
  const invDateEl = document.getElementById('invDate');
  let baseDate = new Date();
  if (invDateEl && /^\d{4}-\d{2}-\d{2}$/.test(invDateEl.value)) {
    const [y, m, d] = invDateEl.value.split('-').map(Number);
    baseDate = new Date(y, m - 1, d);
  }
  document.getElementById('prevDate').textContent = baseDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const prevDueDateEl = document.getElementById('prevDueDate');
  if (prevDueDateEl) {
    const dueDate = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() + 15);
    prevDueDateEl.textContent = `Due: ${dueDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}`;
  }
  document.getElementById('prevNotes').textContent = document.getElementById('invNotes')?.value || '';

  let sub = 0;
  document.getElementById('prevItemsBody').innerHTML = invoiceItems.map(i => {
    const qty = Number(i.qty) || 0;
    const rate = Number(i.rate) || 0;
    const amt = qty * rate;
    sub += amt;
    return `<tr><td>${escapeHtml(i.desc)}</td><td class="mono-val">${escapeHtml(qty)}</td><td class="mono-val">${safeCur}${escapeHtml(rate.toFixed(2))}</td><td>${safeCur}${escapeHtml(amt.toFixed(2))}</td></tr>`;
  }).join('');

  const taxable = Math.max(0, sub - discount);
  const taxAmt = (taxMode === 'none' || taxRate === 0) ? 0 : taxable * (taxRate / 100);
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
      taxBox.innerHTML = `<div><span>Tax (0%)</span><strong>${safeCur}0.00</strong></div>`;
    } else if (taxMode === 'cgst_sgst') {
      const halfRate = (taxRate / 2).toFixed(1).replace('.0', '');
      const halfAmt = (taxAmt / 2).toFixed(2);
      taxBox.innerHTML = `
        <div><span>CGST (${escapeHtml(halfRate)}%)</span><strong>${safeCur}${escapeHtml(halfAmt)}</strong></div>
        <div><span>SGST (${escapeHtml(halfRate)}%)</span><strong>${safeCur}${escapeHtml(halfAmt)}</strong></div>
      `;
    } else {
      taxBox.innerHTML = `<div><span>IGST (${escapeHtml(taxRate)}%)</span><strong>${safeCur}${escapeHtml(taxAmt.toFixed(2))}</strong></div>`;
    }
  }

  document.getElementById('prevTotal').textContent = `${cur}${total.toFixed(2)}`;

  const wordsEl = document.getElementById('prevAmountWords');
  if (wordsEl) {
    wordsEl.textContent = numberToIndianWords(total, cur);
  }

  const upiWrap = document.getElementById('prevUpiWrap');
  if (upiWrap) {
    if (upiId && cur === '₹') {
      upiWrap.style.display = 'block';
      const upiUri = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(fromName)}&am=${total.toFixed(2)}&cu=INR&tr=${encodeURIComponent(invNumVal)}&tn=${encodeURIComponent('Invoice ' + invNumVal)}`;
      window._currentBillfoldUpiUri = upiUri;
      document.getElementById('prevUpiQr').src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(upiUri)}`;
      document.getElementById('prevUpiId').textContent = upiId;
    } else {
      window._currentBillfoldUpiUri = '';
      upiWrap.style.display = 'none';
    }
  }

  try { localStorage.setItem('bf_items', JSON.stringify(invoiceItems)); } catch (e) {}
}


function copyBillfoldUpiLink(btn) {
  const uri = window._currentBillfoldUpiUri || '';
  if (!uri) return;
  const finish = () => {
    if (!btn) return;
    const orig = btn.textContent;
    btn.textContent = 'Copied upi://pay Link!';
    setTimeout(() => { btn.textContent = orig; }, 1600);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(uri).then(finish).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = uri;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      finish();
    });
  } else {
    const ta = document.createElement('textarea');
    ta.value = uri;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    finish();
  }
}


function copyBillfoldWaMsg(btn) {
  const uri = window._currentBillfoldUpiUri || '';
  if (!uri) return;
  const toName = (document.getElementById('invTo')?.value || 'there').trim() || 'there';
  const fromName = (document.getElementById('invFrom')?.value || 'Our Store').trim() || 'Our Store';
  const invNum = (document.getElementById('invNum')?.value || 'Invoice').trim() || 'Invoice';
  const totalText = (document.getElementById('prevTotal')?.textContent || '₹0.00').trim();
  const msg = `Hi ${toName},\n\nSharing your invoice ${invNum} from ${fromName} for ${totalText}.\n\nYou can pay directly via UPI using this link:\n${uri}\n\nThank you!`;
  const finish = () => {
    if (!btn) return;
    const orig = btn.textContent;
    btn.textContent = 'Copied WhatsApp Message!';
    setTimeout(() => { btn.textContent = orig; }, 1600);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(msg).then(finish).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = msg;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      finish();
    });
  } else {
    const ta = document.createElement('textarea');
    ta.value = msg;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    finish();
  }
}

function resetInvoice() {
  if (document.getElementById('invDocType')) document.getElementById('invDocType').value = 'TAX INVOICE';
  invoiceItems = [{ desc: 'Consulting / Product Order', qty: 1, rate: 1500 }];
  renderInvoiceInputs();
  renderInvoice();
}

if (document.getElementById('invoiceItemsList')) {
  const initInvDateEl = document.getElementById('invDate');
  if (initInvDateEl && !initInvDateEl.value) {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    initInvDateEl.value = `${yyyy}-${mm}-${dd}`;
  }
  renderInvoiceInputs();
  renderInvoice();
  renderSavedInvoicesBar();
}

/* 2. TAPPING — WHATSAPP LINK & QR GENERATOR */
function setWaTemplate(text) {
  const el = document.getElementById('waMsg');
  if (el) {
    el.value = text;
    buildWhatsApp();
  }
}

/* Minimal Pure-JS QR Code SVG Generator (Byte mode, ECC Level L, Versions 1-10) */
const buildQrSvgDataUri = (() => {
  const EXP = new Uint8Array(512);
  const LOG = new Uint8Array(256);
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP[i] = x;
    LOG[x] = i;
    x <<= 1;
    if (x & 256) x ^= 285;
  }
  for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];

  function gfMul(a, b) {
    return a && b ? EXP[LOG[a] + LOG[b]] : 0;
  }
  function rsGenPoly(deg) {
    let p = [1];
    for (let i = 0; i < deg; i++) {
      const next = new Array(p.length + 1).fill(0);
      for (let j = 0; j < p.length; j++) {
        next[j] ^= p[j];
        next[j + 1] ^= gfMul(p[j], EXP[i]);
      }
      p = next;
    }
    return p;
  }
  function rsEncode(data, ecLen) {
    const gen = rsGenPoly(ecLen);
    const res = new Array(data.length + ecLen).fill(0);
    for (let i = 0; i < data.length; i++) res[i] = data[i];
    for (let i = 0; i < data.length; i++) {
      const c = res[i];
      if (!c) continue;
      for (let j = 0; j < gen.length; j++) res[i + j] ^= gfMul(gen[j], c);
    }
    return res.slice(data.length);
  }

  const SPECS = [
    null,
    [26, 7, 1, 19, 0, 0, []],
    [44, 10, 1, 34, 0, 0, [6, 18]],
    [70, 15, 1, 55, 0, 0, [6, 22]],
    [100, 20, 1, 80, 0, 0, [6, 26]],
    [134, 26, 1, 108, 0, 0, [6, 30]],
    [172, 18, 2, 68, 0, 0, [6, 34]],
    [196, 20, 2, 78, 0, 0, [6, 22, 38]],
    [242, 24, 2, 97, 0, 0, [6, 24, 42]],
    [292, 30, 2, 116, 0, 0, [6, 26, 46]],
    [346, 18, 2, 68, 2, 69, [6, 28, 50]]
  ];

  function encodeMatrix(text) {
    const bytes = new TextEncoder().encode(text);
    let ver = 1;
    while (ver <= 10) {
      const s = SPECS[ver];
      const cap = s[2] * s[3] + s[4] * s[5];
      const lenBits = ver <= 9 ? 8 : 16;
      if (4 + lenBits + bytes.length * 8 <= cap * 8) break;
      ver++;
    }
    if (ver > 10) return null;

    const s = SPECS[ver];
    const dataCap = s[2] * s[3] + s[4] * s[5];
    const bits = [];
    const pushBits = (val, n) => {
      for (let i = n - 1; i >= 0; i--) bits.push((val >> i) & 1);
    };
    pushBits(0b0100, 4);
    pushBits(bytes.length, ver <= 9 ? 8 : 16);
    for (const b of bytes) pushBits(b, 8);
    const maxBits = dataCap * 8;
    for (let i = 0; i < 4 && bits.length < maxBits; i++) bits.push(0);
    while (bits.length % 8 !== 0) bits.push(0);
    const padBytes = [0xec, 0x11];
    let pi = 0;
    while (bits.length < maxBits) {
      pushBits(padBytes[pi++ % 2], 8);
    }

    const dataBytes = [];
    for (let i = 0; i < bits.length; i += 8) {
      let b = 0;
      for (let j = 0; j < 8; j++) b = (b << 1) | bits[i + j];
      dataBytes.push(b);
    }

    const blocks = [];
    const ecBlocks = [];
    let off = 0;
    for (let i = 0; i < s[2]; i++) {
      const blk = dataBytes.slice(off, off + s[3]);
      off += s[3];
      blocks.push(blk);
      ecBlocks.push(rsEncode(blk, s[1]));
    }
    for (let i = 0; i < s[4]; i++) {
      const blk = dataBytes.slice(off, off + s[5]);
      off += s[5];
      blocks.push(blk);
      ecBlocks.push(rsEncode(blk, s[1]));
    }

    const codewords = [];
    const maxDataLen = Math.max(s[3], s[5]);
    for (let i = 0; i < maxDataLen; i++) {
      for (let b = 0; b < blocks.length; b++) {
        if (i < blocks[b].length) codewords.push(blocks[b][i]);
      }
    }
    for (let i = 0; i < s[1]; i++) {
      for (let b = 0; b < ecBlocks.length; b++) codewords.push(ecBlocks[b][i]);
    }

    const size = ver * 4 + 17;
    const grid = Array.from({ length: size }, () => new Int8Array(size).fill(-1));
    const isFunc = Array.from({ length: size }, () => new Uint8Array(size));

    const setMod = (r, c, v) => {
      if (r >= 0 && r < size && c >= 0 && c < size) {
        grid[r][c] = v ? 1 : 0;
        isFunc[r][c] = 1;
      }
    };
    const drawFinder = (r, c) => {
      for (let dr = -1; dr <= 7; dr++) {
        for (let dc = -1; dc <= 7; dc++) {
          const rr = r + dr, cc = c + dc;
          if (rr < 0 || rr >= size || cc < 0 || cc >= size) continue;
          const inBox = dr >= 0 && dr <= 6 && dc >= 0 && dc <= 6;
          const dark = inBox && (dr === 0 || dr === 6 || dc === 0 || dc === 6 || (dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4));
          setMod(rr, cc, dark ? 1 : 0);
        }
      }
    };
    drawFinder(0, 0);
    drawFinder(0, size - 7);
    drawFinder(size - 7, 0);

    for (let i = 8; i < size - 8; i++) {
      setMod(6, i, i % 2 === 0 ? 1 : 0);
      setMod(i, 6, i % 2 === 0 ? 1 : 0);
    }
    setMod(size - 8, 8, 1);

    const coords = s[6];
    for (let i = 0; i < coords.length; i++) {
      for (let j = 0; j < coords.length; j++) {
        const r = coords[i], c = coords[j];
        if ((r === 6 && c === 6) || (r === 6 && c === coords[coords.length - 1]) || (r === coords[coords.length - 1] && c === 6)) continue;
        if (isFunc[r][c]) continue;
        for (let dr = -2; dr <= 2; dr++) {
          for (let dc = -2; dc <= 2; dc++) {
            const dark = Math.abs(dr) === 2 || Math.abs(dc) === 2 || (dr === 0 && dc === 0);
            setMod(r + dr, c + dc, dark ? 1 : 0);
          }
        }
      }
    }

    for (let i = 0; i < 9; i++) {
      if (!isFunc[8][i]) { grid[8][i] = 0; isFunc[8][i] = 1; }
      if (!isFunc[i][8]) { grid[i][8] = 0; isFunc[i][8] = 1; }
    }
    for (let i = 0; i < 8; i++) {
      if (!isFunc[8][size - 1 - i]) { grid[8][size - 1 - i] = 0; isFunc[8][size - 1 - i] = 1; }
      if (!isFunc[size - 1 - i][8]) { grid[size - 1 - i][8] = 0; isFunc[size - 1 - i][8] = 1; }
    }

    const allBits = [];
    for (const cw of codewords) {
      for (let i = 7; i >= 0; i--) allBits.push((cw >> i) & 1);
    }
    let bi = 0;
    let up = true;
    for (let col = size - 1; col >= 1; col -= 2) {
      if (col === 6) col--;
      for (let step = 0; step < size; step++) {
        const r = up ? size - 1 - step : step;
        for (let dc = 0; dc < 2; dc++) {
          const c = col - dc;
          if (!isFunc[r][c]) {
            const bit = bi < allBits.length ? allBits[bi++] : 0;
            grid[r][c] = bit ^ (((r + c) % 2 === 0) ? 1 : 0);
          }
        }
      }
      up = !up;
    }

    const fmtBits = 0x77c4;
    for (let i = 0; i < 15; i++) {
      const bit = (fmtBits >> i) & 1;
      if (i < 6) grid[8][i] = bit;
      else if (i < 8) grid[8][i + 1] = bit;
      else grid[8][size - 15 + i] = bit;
      if (i < 8) grid[size - 1 - i][8] = bit;
      else if (i < 9) grid[15 - i][8] = bit;
      else grid[14 - i][8] = bit;
    }

    return grid;
  }

  return function (text) {
    const grid = encodeMatrix(text);
    if (!grid) return '';
    const n = grid.length;
    const quiet = 2;
    const total = n + quiet * 2;
    let d = '';
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (grid[r][c] === 1) d += `M${c + quiet},${r + quiet}h1v1h-1z`;
      }
    }
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${total} ${total}" shape-rendering="crispEdges"><rect width="${total}" height="${total}" fill="#ffffff"/><path d="${d}" fill="#0f172a"/></svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  };
})();

function buildWhatsApp() {
  const phoneEl = document.getElementById('waPhone');
  const qrImgEl = document.getElementById('waQrImg');
  if (!phoneEl && !qrImgEl) return;
  const rawPhone = phoneEl ? phoneEl.value : '919876543210';
  const phone = rawPhone.replace(/\D/g, '') || '919876543210';
  const rawMsg = (document.getElementById('waMsg')?.value || '').trim();
  const sourceTag = (document.getElementById('waSourceTag')?.value || '').trim();
  const taggedMsg = sourceTag
    ? (rawMsg ? `${rawMsg} [Ref: ${sourceTag}]` : `[Ref: ${sourceTag}]`)
    : rawMsg;
  const msg = encodeURIComponent(taggedMsg);
  const url = `https://wa.me/${phone}${msg ? `?text=${msg}` : ''}`;
  const outEl = document.getElementById('waOutput');
  if (outEl) outEl.value = url;
  const lenEl = document.getElementById('waLinkLen');
  if (lenEl) {
    const len = url.length;
    const status = len <= 160 ? 'Instagram/SMS-ready' : 'Long';
    lenEl.textContent = `${len} chars · ${status}`;
    lenEl.style.color = len <= 160 ? '#059669' : '#c2410c';
  }
  const testEl = document.getElementById('waTestLink');
  if (testEl) testEl.href = url;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=10&data=${encodeURIComponent(url)}`;
  const svgQr = buildQrSvgDataUri(url);
  if (qrImgEl) {
    qrImgEl.onerror = function () {
      if (this.dataset.fallbackApplied) return;
      this.dataset.fallbackApplied = '1';
      if (svgQr) this.src = svgQr;
    };
    qrImgEl.dataset.fallbackApplied = '';
    qrImgEl.src = svgQr || qrUrl;
  }
  const qrDlEl = document.getElementById('waQrDownload');
  if (qrDlEl) qrDlEl.href = qrUrl;
  const htmlCode = `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#059669;color:#fff;padding:10px 18px;border-radius:8px;font-weight:600;text-decoration:none;">Chat on WhatsApp</a>`;
  const embedEl = document.getElementById('waEmbedCode');
  if (embedEl) embedEl.value = htmlCode;
}
buildWhatsApp();

/* 3. COPYCRAFT — BIO, LISTING & SERP FORMATTER */
let _serpCanvasCtx = null;
const SERP_CHAR_WIDTHS = {
  'i': 4.4, 'l': 4.4, 'I': 5.6, 'j': 4.6, 't': 5.6, 'f': 5.6, 'r': 6.7,
  '.': 5.6, ',': 5.6, ':': 5.6, ';': 5.6, '!': 5.6, '|': 5.2, "'": 4.2,
  ' ': 5.6, '-': 6.7, '/': 5.6, '(': 6.7, ')': 6.7, '[': 5.6, ']': 5.6,
  'W': 18.9, 'M': 16.7, 'm': 16.7, 'w': 14.4, 'G': 15.6, 'O': 15.6, 'Q': 15.6,
  'D': 14.4, 'H': 14.4, 'N': 14.4, 'U': 14.4, 'C': 14.4, 'R': 14.4, 'B': 13.3,
  'A': 13.3, 'K': 13.3, 'V': 13.3, 'X': 13.3, 'Y': 13.3, 'P': 13.3, 'S': 13.3,
  'E': 13.3, 'T': 12.2, 'F': 12.2, 'Z': 12.2, 'L': 11.1, 'J': 10.0,
  '—': 20.0, '–': 11.1, '&': 13.3, '₹': 11.1, '%': 17.8, '@': 20.3
};

function measureSerpTitlePx(str) {
  if (!str) return 0;
  try {
    if (!_serpCanvasCtx && typeof document !== 'undefined') {
      const c = document.createElement('canvas');
      _serpCanvasCtx = c.getContext('2d');
    }
    if (_serpCanvasCtx) {
      _serpCanvasCtx.font = '20px Arial, sans-serif';
      return Math.round(_serpCanvasCtx.measureText(str).width);
    }
  } catch (e) {}
  let total = 0;
  for (const ch of str) {
    if (SERP_CHAR_WIDTHS[ch] !== undefined) total += SERP_CHAR_WIDTHS[ch];
    else if (/[A-Z]/.test(ch)) total += 13.5;
    else if (/[0-9]/.test(ch)) total += 11.1;
    else total += 10.5;
  }
  return Math.round(total);
}

function truncateSerpTitleByPx(str, maxPx) {
  if (measureSerpTitlePx(str) <= maxPx) return str;
  let end = str.length;
  while (end > 0 && measureSerpTitlePx(str.slice(0, end).trimEnd() + '...') > maxPx) {
    end -= 1;
  }
  return str.slice(0, end).trimEnd() + '...';
}

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

  const titleChars = serpTitle.length;
  const titlePx = measureSerpTitlePx(serpTitle);
  const charsEl = document.getElementById('serpTitleChars');
  const pxEl = document.getElementById('serpTitlePx');
  const statusEl = document.getElementById('serpTitleStatus');
  if (charsEl) charsEl.textContent = `${titleChars} / 60 chars`;
  if (pxEl) {
    pxEl.textContent = `~${titlePx} / 580 px`;
    pxEl.style.color = titlePx > 580 ? '#c2410c' : 'var(--ink)';
  }
  if (statusEl) {
    if (titlePx > 580) {
      statusEl.textContent = `+${titlePx - 580} px over (truncates)`;
      statusEl.style.color = '#c2410c';
    } else if (titlePx >= 520) {
      statusEl.textContent = `${580 - titlePx} px buffer left`;
      statusEl.style.color = '#0f4c5c';
    } else {
      statusEl.textContent = 'Fits desktop SERP';
      statusEl.style.color = '#059669';
    }
  }

  if (prevTitle) prevTitle.textContent = truncateSerpTitleByPx(serpTitle, 580);
  if (prevUrl) prevUrl.textContent = serpUrl;
  if (prevDesc) prevDesc.textContent = text.replace(/\n+/g, ' ').slice(0, 160) || 'Write your description above to preview how your page appears on Google Search.';
}

function autoCleanSerpSlug() {
  const titleEl = document.getElementById('serpTitleInput');
  const urlEl = document.getElementById('serpUrlInput');
  if (!urlEl) return;

  const rawTitle = (titleEl?.value || '').trim();
  const stopWords = new Set([
    'a', 'an', 'the', 'and', 'or', 'but', 'for', 'of', 'in', 'on', 'at',
    'to', 'from', 'by', 'with', 'as', 'is', 'are', 'was', 'were', 'be',
    'into', 'onto', 'per', 'via'
  ]);

  const tokens = rawTitle
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' ')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/[\s-]+/)
    .filter(w => w && !stopWords.has(w));

  let slug = tokens.join('-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  if (slug.length > 60) {
    slug = slug.slice(0, 60).replace(/-[^-]*$/, '') || slug.slice(0, 60);
  }
  if (!slug) slug = 'product-page';

  const currentUrl = (urlEl.value || '').trim() || 'https://kitedesk.in';
  let prefix = 'https://kitedesk.in';
  const protoMatch = currentUrl.match(/^(https?:\/\/[^\/?#]+)/i);
  if (protoMatch) {
    prefix = protoMatch[1];
  } else {
    const bareHost = currentUrl.split(/[\/?#]/)[0];
    if (bareHost) prefix = 'https://' + bareHost;
  }

  urlEl.value = `${prefix.replace(/\/+$/, '')}/${slug}`;
  updateFormatter();
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
  } else if (mode === 'wacard') {
    const rawLines = t.split('\n').map(l => l.trim()).filter(Boolean)
      .map(l => l.replace(/^[✓•\-]\s*/, '').trim());
    const cleanField = (line, labelRe) => line.replace(labelRe, '').replace(/^\*+|\*+$/g, '').trim();
    const serpTitle = (document.getElementById('serpTitleInput')?.value || '').trim();

    let productName = '';
    let priceVal = '';
    let etaVal = '';
    let upiVal = '';

    for (const line of rawLines) {
      if (/^\*?price:?\*?/i.test(line)) {
        priceVal = cleanField(line, /^\*?price:?\*?\s*/i);
      } else if (/^\*?dispatch(?:\s*eta)?:?\*?/i.test(line)) {
        etaVal = cleanField(line, /^\*?dispatch(?:\s*eta)?:?\*?\s*/i);
      } else if (/^\*?upi\s*offer:?\*?/i.test(line)) {
        upiVal = cleanField(line, /^\*?upi\s*offer:?\*?\s*/i);
      } else if (!productName) {
        productName = line.replace(/^\*+|\*+$/g, '').trim();
      } else if (!priceVal && /(?:₹|rs\.?\s*|inr\s*)\d/i.test(line)) {
        priceVal = line.replace(/^\*+|\*+$/g, '').trim();
      } else if (!etaVal && /(dispatch|ship|deliver|eta|hrs?|hours?|days?)/i.test(line)) {
        etaVal = line.replace(/^\*+|\*+$/g, '').trim();
      } else if (!upiVal && /(upi|prepaid|offer|discount|cashback|\boff\b)/i.test(line)) {
        upiVal = line.replace(/^\*+|\*+$/g, '').trim();
      }
    }

    if (!productName) productName = serpTitle || 'Product Name';
    if (!priceVal) priceVal = '₹1,549 (Incl. GST)';
    if (!etaVal) etaVal = 'Dispatches in 24 hrs (Pan-India)';
    if (!upiVal) upiVal = 'Flat ₹100 OFF on Prepaid UPI';

    t = [
      `*${productName}*`,
      `• *Price:* ${priceVal}`,
      `• *Dispatch ETA:* ${etaVal}`,
      `• *UPI Offer:* ${upiVal}`
    ].join('\n');
  }
  el.value = t;
  updateFormatter();
}

function updateGbpProfile() {
  const descEl = document.getElementById('gbpDescInput');
  if (!descEl) return;
  const text = descEl.value;
  const chars = text.length;
  const city = (document.getElementById('gbpCityInput')?.value || '').trim();
  const service = (document.getElementById('gbpServiceInput')?.value || '').trim();

  const cntEl = document.getElementById('gbpCntChars');
  const leftEl = document.getElementById('gbpCntLeft');
  const cityEl = document.getElementById('gbpCityStatus');
  const svcEl = document.getElementById('gbpServiceStatus');
  const prevEl = document.getElementById('gbpPrevSnippet');

  if (cntEl) cntEl.textContent = `${chars} / 750`;
  if (leftEl) {
    leftEl.textContent = chars <= 750 ? `${750 - chars} left` : `${chars - 750} over`;
    leftEl.style.color = chars <= 750 ? 'var(--brand)' : 'var(--danger)';
  }

  const lowerText = text.toLowerCase();
  if (cityEl) {
    if (!city) {
      cityEl.textContent = 'Enter city';
      cityEl.style.color = 'var(--muted)';
    } else {
      const hasCity = lowerText.includes(city.toLowerCase());
      cityEl.textContent = hasCity ? 'Found' : 'Missing';
      cityEl.style.color = hasCity ? 'var(--brand)' : 'var(--danger)';
    }
  }
  if (svcEl) {
    if (!service) {
      svcEl.textContent = 'Enter service';
      svcEl.style.color = 'var(--muted)';
    } else {
      const hasSvc = lowerText.includes(service.toLowerCase());
      svcEl.textContent = hasSvc ? 'Found' : 'Missing';
      svcEl.style.color = hasSvc ? 'var(--brand)' : 'var(--danger)';
    }
  }
  if (prevEl) {
    const clean = text.replace(/\s+/g, ' ').trim();
    prevEl.textContent = clean ? clean.slice(0, 750) : 'Write your Google Business Profile description to check length and local keyword coverage.';
  }
}

function formatGbpClean() {
  const descEl = document.getElementById('gbpDescInput');
  if (!descEl) return;
  const cleaned = descEl.value.replace(/[ \t]+/g, ' ').replace(/\n{2,}/g, ' ').trim().slice(0, 750);
  descEl.value = cleaned;
  updateGbpProfile();
}
updateGbpProfile();
updateFormatter();

/* 4. MARGINMINT — D2C UNIT ECONOMICS, VOLUMETRIC WEIGHT, COD RTO & ROAS CALCULATOR */
function calcVolumetricWeight(autoApply) {
  const lenEl = document.getElementById('mmLen');
  if (!lenEl) return;
  const deadWt = Math.max(0.05, Number(document.getElementById('mmDeadWt')?.value) || 0);
  const L = Math.max(1, Number(lenEl.value) || 0);
  const W = Math.max(1, Number(document.getElementById('mmWid')?.value) || 0);
  const H = Math.max(1, Number(document.getElementById('mmHgt')?.value) || 0);
  const slabRate = Math.max(1, Number(document.getElementById('mmSlabRate')?.value) || 42.5);
  const cur = document.getElementById('mmCur')?.value || '₹';

  const volWt = (L * W * H) / 5000;
  const chargeWt = Math.max(deadWt, volWt);
  const billedBy = volWt > deadWt ? 'Volumetric' : 'Dead Wt';
  const slabs = Math.max(1, Math.ceil(chargeWt / 0.5));
  const suggestedShip = Math.round(slabs * slabRate);

  const volEl = document.getElementById('mmVolWt');
  const chargeEl = document.getElementById('mmChargeWt');
  const sugEl = document.getElementById('mmSuggestedShip');

  if (volEl) volEl.textContent = `${volWt.toFixed(2)} kg`;
  if (chargeEl) chargeEl.textContent = `${chargeWt.toFixed(2)} kg (${billedBy} • ${slabs} × 0.5kg)`;
  if (sugEl) sugEl.textContent = `${cur}${suggestedShip}`;

  if (autoApply) {
    const shipEl = document.getElementById('mmShip');
    if (shipEl) {
      shipEl.value = suggestedShip;
      calcMargin();
    }
  }
  return suggestedShip;
}

function applyVolumetricShip() {
  const suggested = calcVolumetricWeight(true);
  if (typeof suggested === 'number') {
    calcMargin();
  }
}

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

  calcVolumetricWeight(false);

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

  const prepaidShareRaw = Number(document.getElementById('mmPrepaidShare')?.value);
  const prepaidShare = Number.isFinite(prepaidShareRaw) ? Math.min(100, Math.max(0, prepaidShareRaw)) : 35;
  const prepaidDiscRaw = Number(document.getElementById('mmPrepaidDisc')?.value);
  const prepaidDisc = Number.isFinite(prepaidDiscRaw) ? Math.max(0, prepaidDiscRaw) : 75;

  const rtoFrac = Math.min(0.99, Math.max(0, rtoPct / 100));
  const codNetPerPlaced = net * (1 - rtoFrac);
  const prepaidSell = Math.max(0, sell - prepaidDisc);
  const prepaidFee = prepaidSell * (feePct / 100);
  const prepaidGst = prepaidSell - (prepaidSell / (1 + gstPct / 100));
  const prepaidNetPerOrder = prepaidSell - cogs - ship - pack - prepaidFee - prepaidGst;

  const blended100 = (prepaidShare * prepaidNetPerOrder) + ((100 - prepaidShare) * codNetPerPlaced);
  const allCod100 = 100 * codNetPerPlaced;
  const codGain = blended100 - allCod100;

  const blendedEl = document.getElementById('mmBlended100');
  if (blendedEl) {
    blendedEl.textContent = `${cur}${Math.round(blended100).toLocaleString('en-IN')}`;
    blendedEl.style.color = blended100 >= 0 ? 'var(--brand)' : 'var(--danger)';
  }
  const gainEl = document.getElementById('mmCodGain');
  if (gainEl) {
    const sign = codGain >= 0 ? '+' : '-';
    gainEl.textContent = `${sign}${cur}${Math.round(Math.abs(codGain)).toLocaleString('en-IN')}`;
    gainEl.style.color = codGain >= 0 ? 'var(--brand)' : 'var(--danger)';
  }

  const targetNetProfit = sell * 0.15;
  const maxSafeCpa = Math.max(0, (net - targetNetProfit) * (1 - rtoFrac));
  const maxCpaEl = document.getElementById('mmMaxCpa');
  if (maxCpaEl) {
    maxCpaEl.textContent = `${cur}${maxSafeCpa.toFixed(2)}`;
    maxCpaEl.style.color = maxSafeCpa > 0 ? 'var(--brand)' : 'var(--danger)';
  }

  const cpa = Math.max(0, Number(document.getElementById('mmCpa')?.value) || 0);
  const cpaPerDelivered = cpa / (1 - rtoFrac);
  const fixedDeliveredCost = cogs + ship + pack + rtoLossPerDelivered + cpaPerDelivered;
  const targetMrpDenom = (1 / (1 + gstPct / 100)) - (feePct / 100) - 0.20;
  const targetMrp = targetMrpDenom > 0 ? fixedDeliveredCost / targetMrpDenom : 0;
  const targetMrpEl = document.getElementById('mmTargetMrp');
  if (targetMrpEl) {
    targetMrpEl.textContent = targetMrp > 0
      ? `${cur}${Math.ceil(targetMrp).toLocaleString('en-IN')}`
      : 'N/A';
    targetMrpEl.style.color = targetMrp > 0 ? 'var(--brand)' : 'var(--danger)';
  }

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

function copyMarginSummary(btn) {
  const sell = Number(document.getElementById('mmSell')?.value) || 0;
  const cogs = Number(document.getElementById('mmCogs')?.value) || 0;
  const ship = Number(document.getElementById('mmShip')?.value) || 0;
  const pack = Number(document.getElementById('mmPack')?.value) || 0;
  const feePct = Number(document.getElementById('mmFee')?.value) || 0;
  const gstPct = Number(document.getElementById('mmGst')?.value) || 0;
  const rtoPct = Number(document.getElementById('mmRto')?.value) || 0;
  const cur = document.getElementById('mmCur')?.value || '₹';

  const exGstRev = sell / (1 + gstPct / 100);
  const gstAmt = sell - exGstRev;
  const feeAmt = sell * (feePct / 100);
  const rtoDrag = rtoPct > 0 && rtoPct < 100
    ? ((rtoPct / 100) / (1 - rtoPct / 100)) * (ship * 1.8 + pack)
    : 0;
  const net = sell - (cogs + ship + pack + feeAmt + rtoDrag + gstAmt);
  const marginPct = sell > 0 ? (net / sell) * 100 : 0;
  const roasText = net > 0 ? `${(sell / net).toFixed(2)}x` : 'N/A';
  const rtoFrac = Math.min(0.99, Math.max(0, rtoPct / 100));
  const maxSafeCpa = Math.max(0, (net - sell * 0.15) * (1 - rtoFrac));
  const cpa = Math.max(0, Number(document.getElementById('mmCpa')?.value) || 0);
  const cpaPerDelivered = cpa / (1 - rtoFrac);
  const targetMrpDenom = (1 / (1 + gstPct / 100)) - (feePct / 100) - 0.20;
  const targetMrp = targetMrpDenom > 0 ? (cogs + ship + pack + rtoDrag + cpaPerDelivered) / targetMrpDenom : 0;
  const targetMrpText = targetMrp > 0 ? `${cur}${Math.ceil(targetMrp).toLocaleString('en-IN')}` : 'N/A';
  const blendedText = document.getElementById('mmBlended100')?.textContent || `${cur}0`;

  const lines = [
    'MarginMint Unit Economics Breakdown',
    `Selling Price: ${cur}${sell.toFixed(2)}`,
    `Ex-GST Revenue (${gstPct}% GST): ${cur}${exGstRev.toFixed(2)}`,
    `COGS: ${cur}${cogs.toFixed(2)}`,
    `Shipping: ${cur}${ship.toFixed(2)}`,
    `COD RTO Drag (${rtoPct}% RTO): ${cur}${rtoDrag.toFixed(2)}`,
    `Net Profit/Unit: ${cur}${net.toFixed(2)} (${marginPct.toFixed(1)}%)`,
    `Break-Even ROAS: ${roasText}`,
    `Max Safe Ad CPA (15% Net Margin): ${cur}${maxSafeCpa.toFixed(2)}`,
    `Suggested MRP (20% Net Margin): ${targetMrpText}`,
    `100-Order Blended Profit: ${blendedText}`
  ];
  const summaryText = lines.join('\n');

  const finish = () => {
    const statusEl = document.getElementById('mmCopyStatus');
    if (btn) {
      if (!btn.dataset.origText) btn.dataset.origText = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = btn.dataset.origText; }, 1800);
    }
    if (statusEl) {
      statusEl.textContent = 'Margin breakdown copied.';
      setTimeout(() => { statusEl.textContent = ''; }, 2400);
    }
  };

  const fallbackCopy = () => {
    const ta = document.createElement('textarea');
    ta.value = summaryText;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    finish();
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(summaryText).then(finish).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}

function copySerpMetaTags(btn) {
  const titleText = (document.getElementById('serpTitleInput')?.value || '').trim() || 'Your Brand — Official Store & Custom Orders';
  const descRaw = (document.getElementById('fmtInput')?.value || '').replace(/\s+/g, ' ').trim();
  const descText = descRaw || 'Shop quality products with fast pan-India dispatch and UPI support.';
  const metaHtml = `<title>${escapeHtml(titleText)}</title>\n<meta name="description" content="${escapeHtml(descText)}" />`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(metaHtml);
  } else {
    const tmp = document.createElement('textarea');
    tmp.value = metaHtml;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
  }
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = 'Copied <meta> Tags ✓';
    setTimeout(() => btn.textContent = orig, 1600);
  }
}

function copyWithFallback(text, btn) {
  const showDone = () => {
    if (!btn) return;
    if (!btn.dataset.origLabel) btn.dataset.origLabel = btn.textContent;
    const orig = btn.dataset.origLabel;
    btn.textContent = 'Copied ✓';
    clearTimeout(btn._copyTimer);
    btn._copyTimer = setTimeout(() => { btn.textContent = orig; }, 1400);
  };
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(text).then(showDone).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
      showDone();
    });
    return;
  }
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch (e) {}
  document.body.removeChild(ta);
  showDone();
}

function copyText(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  copyWithFallback(el.value, btn);
}

function copyWaMarkdown(btn) {
  const outEl = document.getElementById('waOutput');
  const url = outEl && outEl.value ? outEl.value.trim() : '';
  if (!url) return;
  copyWithFallback(`[Order on WhatsApp](${url})`, btn);
}

function handleContact(e) {
  e.preventDefault();
  const st = document.getElementById('contactStatus');
  if (st) st.textContent = 'Message recorded locally. Connect Netlify Forms or Formspree to route to your email.';
}
