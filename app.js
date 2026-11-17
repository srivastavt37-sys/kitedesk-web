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
          <span class="ai-vp-tag"><span class="ai-vp-dot"></span> KITEDESK AI WALKTHROUGH • ORIGINAL AI VOICEOVER</span>
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

    function fmtTime(sec) {
      const s = Math.max(0, Math.floor(sec || 0));
      const m = Math.floor(s / 60);
      const r = s % 60;
      return m + ":" + (r < 10 ? "0" + r : r);
    }

    function applyStep(idx) {
      const st = cfg.steps[idx] || cfg.steps[0];
      stepPill.textContent = st.stepBadge;
      kickerEl.textContent = st.kicker;
      headlineEl.textContent = st.headline;
      metricsEl.innerHTML = st.metrics.map(m => `<span class="ai-vp-metric-chip">${escapeHtml(m)}</span>`).join("");
      captionEl.textContent = st.caption;
      stepBtns.forEach((b, i) => b.classList.toggle("active", i === idx));
    }

    function togglePlay() {
      if (audio.paused) {
        document.querySelectorAll(".ai-vp-audio").forEach(other => {
          if (other !== audio && !other.paused) other.pause();
        });
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    }

    stage.addEventListener("click", togglePlay);
    playBtn.addEventListener("click", togglePlay);

    audio.addEventListener("play", () => {
      player.classList.add("is-playing");
      playBtn.textContent = "❚❚ Pause";
    });
    audio.addEventListener("pause", () => {
      player.classList.remove("is-playing");
      playBtn.textContent = "▶ Play AI Video";
    });
    audio.addEventListener("ended", () => {
      player.classList.remove("is-playing");
      playBtn.textContent = "↻ Replay AI Video";
      progressEl.style.width = "100%";
    });
    audio.addEventListener("timeupdate", () => {
      const dur = audio.duration || 22;
      const cur = audio.currentTime || 0;
      progressEl.style.width = Math.min(100, (cur / dur) * 100).toFixed(1) + "%";
      timeEl.textContent = fmtTime(cur) + " / " + fmtTime(dur);
      let activeIdx = 0;
      for (let i = 0; i < cfg.steps.length; i++) {
        if (cur >= cfg.steps[i].tStart) activeIdx = i;
      }
      applyStep(activeIdx);
    });

    timelineEl.addEventListener("click", (e) => {
      const rect = timelineEl.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const dur = audio.duration || 22;
      audio.currentTime = pct * dur;
      if (audio.paused) togglePlay();
    });

    stepBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-step-idx"), 10) || 0;
        applyStep(idx);
        if (cfg.steps[idx]) {
          audio.currentTime = cfg.steps[idx].tStart;
          if (audio.paused) togglePlay();
        }
      });
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  window.initAiVideoPlayers(document);
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

function removeInvoiceItem(idx) {
  if (invoiceItems.length <= 1) return;
  invoiceItems.splice(idx, 1);
  renderInvoiceInputs();
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
  const htmlCode = `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#059669;color:#fff;padding:10px 18px;border-radius:8px;font-weight:600;text-decoration:none;">Chat on WhatsApp</a>`;
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
