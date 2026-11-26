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
document.addEventListener("DOMContentLoaded", () => {
  window.initAiVideoPlayers(document);
  if (document.getElementById("waPhone") || document.getElementById("waQrImg")) {
    
function downloadTapPingQrPng() {
  const outEl = document.getElementById('waOutput');
  const dlBtn = document.getElementById('waQrDownload') || document.getElementById('waDownloadQr');
  const url = (dlBtn && dlBtn.dataset.waUrl) || (outEl && outEl.value) || 'https://wa.me/919876543210';
  const svgUri = buildQrSvgDataUri(url);
  if (!svgUri) return;

  const size = 360;
  const pad = 24;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, size, size);

  const img = new Image();
  img.onload = function () {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, pad, pad, size - pad * 2, size - pad * 2);
    const triggerDownload = (href) => {
      const a = document.createElement('a');
      a.href = href;
      a.download = 'kitedesk-whatsapp-qr.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    if (typeof canvas.toBlob === 'function') {
      canvas.toBlob((blob) => {
        if (!blob) {
          triggerDownload(canvas.toDataURL('image/png'));
          return;
        }
        const objUrl = URL.createObjectURL(blob);
        triggerDownload(objUrl);
        setTimeout(() => URL.revokeObjectURL(objUrl), 2000);
      }, 'image/png');
    } else {
      triggerDownload(canvas.toDataURL('image/png'));
    }
  };
  img.src = svgUri;
}
window.downloadTapPingQrPng = downloadTapPingQrPng;

function downloadTapPingQrSvg() {
  const outEl = document.getElementById('waOutput');
  const dlBtn = document.getElementById('waQrDownloadSvg') || document.getElementById('waQrDownload') || document.getElementById('waDownloadQr');
  const url = (dlBtn && dlBtn.dataset.waUrl) || (outEl && outEl.value) || 'https://wa.me/919876543210';
  const svgUri = buildQrSvgDataUri(url);
  if (!svgUri) return;
  const commaIdx = svgUri.indexOf(',');
  const svgMarkup = commaIdx >= 0 ? decodeURIComponent(svgUri.slice(commaIdx + 1)) : '';
  if (!svgMarkup) return;

  const blob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
  const objUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = objUrl;
  a.download = 'kitedesk-whatsapp-qr.svg';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(objUrl), 2000);
}
window.downloadTapPingQrSvg = downloadTapPingQrSvg;


buildWhatsApp();
    updateStandeeBrand();
    renderSavedTapPingBar();
  }
  if (document.getElementById("fmtInput")) {
    updateFormatter();
    renderSavedCopyCraftBar();
  }
  if (document.getElementById("gbpDescInput")) {
    updateGbpProfile();
  }

  if (document.getElementById("mmSell")) {
    calcMargin();
    renderSavedMarginBar();
  }
  if (document.getElementById("cpOpeningBank")) {
    calcCashPulse();
    renderSavedCashPulseBar();
  }
});

/* === MarginMint Saved SKU Scenarios (localStorage, max 6) === */
const MM_SAVED_KEY = 'mm_saved_skus';
const MM_FIELD_IDS = [
  'mmCur', 'mmSell', 'mmCogs', 'mmShip', 'mmPack',
  'mmDeadWt', 'mmLen', 'mmWid', 'mmHgt', 'mmSlabRate',
  'mmFee', 'mmMktFee', 'mmGst', 'mmRto', 'mmRevShip', 'mmCpa',
  'mmPrepaidShare', 'mmPrepaidDisc', 'mmMonthlyOrders'
];

function getSavedMarginScenarios() {
  try {
    const raw = localStorage.getItem(MM_SAVED_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.slice(0, 6);
    }
  } catch (e) {}
  return [];
}

function renderSavedMarginBar() {
  const container = document.getElementById('mmSavedList');
  if (!container) return;
  const list = getSavedMarginScenarios();
  if (!list.length) {
    container.innerHTML = '<span class="muted" style="font-size:0.76rem;">No saved SKUs yet. Click "+ Save SKU" to store up to 6 SKU margin setups locally.</span>';
    return;
  }
  container.innerHTML = list.map((item, idx) => {
    const safeLabel = escapeHtml((item.label || 'Saved SKU').slice(0, 28));
    const cur = item.fields && item.fields.mmCur ? item.fields.mmCur : '₹';
    const sellVal = item.fields && item.fields.mmSell ? item.fields.mmSell : '0';
    const safeMeta = escapeHtml(`${cur}${sellVal}`);
    return `
      <span class="bf-saved-chip" onclick="loadSavedMarginScenario(${idx})" title="Click to reload ${safeLabel} (${safeMeta})">
        <span>${safeLabel} &bull; <span class="muted" style="font-weight:400;">${safeMeta}</span></span>
        <button type="button" class="bf-saved-del" onclick="deleteSavedMarginScenario(${idx}, event)" aria-label="Delete saved SKU ${safeLabel}" title="Remove saved SKU">&times;</button>
      </span>
    `;
  }).join('');
}

function saveMarginScenario() {
  const sellEl = document.getElementById('mmSell');
  if (!sellEl) return;
  const labelInput = document.getElementById('mmSaveLabel');
  const curVal = document.getElementById('mmCur')?.value || '₹';
  const sellNum = Number(sellEl.value) || 0;
  const rawLabel = (labelInput?.value || '').trim() || `SKU ${curVal}${sellNum}`;
  const fields = {};
  MM_FIELD_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (el) fields[id] = el.value;
  });
  const entry = {
    label: rawLabel.slice(0, 28),
    fields: fields,
    savedAt: Date.now()
  };
  const existing = getSavedMarginScenarios().filter(
    item => (item.label || '').toLowerCase() !== entry.label.toLowerCase()
  );
  const trimmed = [entry, ...existing].slice(0, 6);
  try {
    localStorage.setItem(MM_SAVED_KEY, JSON.stringify(trimmed));
  } catch (e) {}
  if (labelInput) labelInput.value = '';
  renderSavedMarginBar();
}


function exportMarginScenariosCsv() {
  let list = getSavedMarginScenarios();
  if (!list.length) {
    const fields = {};
    MM_FIELD_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) fields[id] = el.value;
    });
    const curVal = fields.mmCur || '₹';
    const sellNum = Number(fields.mmSell) || 0;
    const rawLabel = (document.getElementById('mmSaveLabel')?.value || '').trim() || `Live SKU ${curVal}${sellNum}`;
    list = [{ label: rawLabel.slice(0, 28), fields: fields }];
  }

  const headers = [
    'SKU', 'SellingPrice', 'GSTPct', 'COGS', 'Pack', 'Shipping',
    'FeePct', 'RTOPct', 'NetProfit', 'BreakEvenROAS', 'MaxSafeCPA'
  ];
  const lines = [headers.join(',')];

  list.forEach(item => {
    const f = item.fields || {};
    const sell = Number(f.mmSell) || 0;
    const gstPct = Number(f.mmGst) || 0;
    const cogs = Number(f.mmCogs) || 0;
    const pack = Number(f.mmPack) || 0;
    const ship = Number(f.mmShip) || 0;
    const feePct = Number(f.mmFee) || 0;
    const mktFeePct = Math.max(0, Number(f.mmMktFee) || 0);
    const rtoPct = Number(f.mmRto) || 0;

    const feeAmt = sell * (feePct / 100);
    const mktFeeAmt = sell * (mktFeePct / 100);
    const gstAmt = sell - (sell / (1 + gstPct / 100));
    const rtoLossPerDelivered = rtoPct > 0 && rtoPct < 100
      ? ((rtoPct / 100) / (1 - rtoPct / 100)) * (ship * 1.8 + pack)
      : 0;
    const opsTotal = ship + pack + feeAmt + mktFeeAmt + rtoLossPerDelivered;
    const totalCost = cogs + opsTotal + gstAmt;
    const net = sell - totalCost;
    const breakevenRoas = net > 0 ? (sell / net) : 0;
    const rtoFrac = Math.min(0.99, Math.max(0, rtoPct / 100));
    const targetNetProfit = sell * 0.15;
    const maxSafeCpa = Math.max(0, (net - targetNetProfit) * (1 - rtoFrac));

    const row = [
      item.label || 'Saved SKU',
      sell.toFixed(2),
      gstPct.toFixed(2),
      cogs.toFixed(2),
      pack.toFixed(2),
      ship.toFixed(2),
      feePct.toFixed(2),
      rtoPct.toFixed(2),
      net.toFixed(2),
      breakevenRoas > 0 ? breakevenRoas.toFixed(2) : 'N/A',
      maxSafeCpa.toFixed(2)
    ].map(escapeCsvCell);

    lines.push(row.join(','));
  });

  const csvContent = '\uFEFF' + lines.join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `marginmint-sku-scenarios-${stamp}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function loadSavedMarginScenario(idx) {
  const list = getSavedMarginScenarios();
  const item = list[idx];
  if (!item || !item.fields) return;
  MM_FIELD_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (el && item.fields[id] !== undefined) {
      el.value = item.fields[id];
    }
  });
  if (typeof calcVolumetricWeight === 'function') calcVolumetricWeight(false);
  calcMargin();
}

function deleteSavedMarginScenario(idx, evt) {
  if (evt && evt.stopPropagation) evt.stopPropagation();
  const list = getSavedMarginScenarios();
  list.splice(idx, 1);
  try {
    localStorage.setItem(MM_SAVED_KEY, JSON.stringify(list));
  } catch (e) {}
  renderSavedMarginBar();
}


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
  const safeSlug = encodeURIComponent(post.slug || '');
  const articleHref = `articles/${safeSlug}.html`;
  const safeImg = post.image ? escapeHtml(post.image) : '';
  const safeTitle = escapeHtml(post.title || '');
  const safeCat = escapeHtml(post.category || '');
  const safeExcerpt = escapeHtml(post.excerpt || '');
  const safeDate = escapeHtml(post.date || '');
  const safeRead = escapeHtml(post.readTime || '');
  return `
    <article class="card post-card">
      <div>
        ${safeImg ? `<a href="${articleHref}"><img src="${safeImg}" alt="${safeTitle}" class="post-card-thumb" loading="lazy" /></a>` : ''}
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;">
          <span class="card-tag" style="margin:0;">${safeCat}</span>
          ${(post.aiVideoKey) ? `<span class="mini-badge">&#9654; AI Video + Guide</span>` : ''}
        </div>
        <h3><a href="${articleHref}">${safeTitle}</a></h3>
        <p class="muted">${safeExcerpt}</p>
      </div>
      <div class="post-meta">
        <span>${safeDate} &bull; ${safeRead}</span>
        <a href="${articleHref}" class="read-link">Read Guide &rarr;</a>
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
  const postUrl = `https://srivastavt37-sys.github.io/kitedesk-web/articles/${encodeURIComponent(post.slug)}.html`;
  const descText = post.excerpt || `${post.title} — Plain-English playbook by KiteDesk Studio.`;
  const metaDescEl = document.getElementById('metaDescription');
  if (metaDescEl) metaDescEl.setAttribute('content', descText);
  const canonEl = document.getElementById('canonicalLink');
  if (canonEl) canonEl.setAttribute('href', postUrl);
  const schemaEl = document.getElementById('blogPostingSchema');
  if (schemaEl) {
    const parsedDate = Date.parse(post.date || '');
    const isoDate = !isNaN(parsedDate) ? new Date(parsedDate).toISOString().slice(0, 10) : '2026-11-21';
    schemaEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": descText,
      "datePublished": isoDate,
      "dateModified": isoDate,
      "author": { "@type": "Organization", "name": "KiteDesk Studio" },
      "publisher": {
        "@type": "Organization",
        "name": "KiteDesk Studio",
        "logo": { "@type": "ImageObject", "url": "https://srivastavt37-sys.github.io/kitedesk-web/images/logo.jpg" }
      },
      "image": post.image ? `https://srivastavt37-sys.github.io/kitedesk-web/${post.image}` : "https://srivastavt37-sys.github.io/kitedesk-web/images/kitedesk-hero.jpg",
      "mainEntityOfPage": { "@type": "WebPage", "@id": postUrl }
    });
  }
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
if (articleBody) {
  if (articleBody.dataset.staticArticle === 'true') {
    const videoSlot = articleBody.querySelector('.ai-video-slot');
    if (videoSlot && typeof window.renderAiVideoPlayer === 'function') {
      const vKey = videoSlot.getAttribute('data-video-key') || 'kitedesk-studio';
      const vTitle = videoSlot.getAttribute('data-video-title') || '';
      videoSlot.innerHTML = window.renderAiVideoPlayer(vKey, vTitle);
    }
    if (typeof window.initAiVideoPlayers === 'function') {
      window.initAiVideoPlayers(articleBody);
    }
  } else if (window.KITEDESK_POSTS) {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    openArticleModal(slug);
  }
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
  const discount = Math.max(0, Number(document.getElementById('invDiscount')?.value) || 0);
  const shipping = Math.max(0, Number(document.getElementById('invShipping')?.value) || 0);
  const sub = invoiceItems.reduce((acc, i) => acc + (Number(i.qty) || 0) * (Number(i.rate) || 0), 0);
  const taxable = Math.max(0, sub - discount) + shipping;
  const taxAmt = (taxMode === 'none' || taxRate === 0) ? 0 : taxable * (taxRate / 100);
  const rawTotal = Math.round((taxable + taxAmt) * 100) / 100;
  const roundOffEnabled = Boolean(document.getElementById('invRoundOff')?.checked);
  const total = roundOffEnabled ? Math.round(rawTotal) : rawTotal;
  const roundDiff = Math.round((total - rawTotal) * 100) / 100;

  const entry = {
    date: document.getElementById('invDate')?.value || new Date().toISOString().slice(0, 10),
    docType: document.getElementById('invDocType')?.value || 'TAX INVOICE',
    num: (document.getElementById('invNum')?.value || 'INV-2026-001').trim(),
    from: document.getElementById('invFrom')?.value || 'Your Business',
    fromGstin: document.getElementById('invFromGstin')?.value || '',
    to: document.getElementById('invTo')?.value || 'Customer',
    toGstin: document.getElementById('invToGstin')?.value || '',
    currency: cur,
    discount: discount,
    shipping: shipping,
    taxMode: taxMode,
    tax: taxRate,
    tdsRate: Number(document.getElementById('invTdsRate')?.value) || 0,
    roundOff: roundOffEnabled,
    advancePaid: Math.max(0, Number(document.getElementById('invAdvancePaid')?.value) || 0),
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
  if (p.date && document.getElementById('invDate')) document.getElementById('invDate').value = p.date;
  if (document.getElementById('invDocType')) document.getElementById('invDocType').value = p.docType || 'TAX INVOICE';
  if (document.getElementById('invRoundOff')) document.getElementById('invRoundOff').checked = p.roundOff !== undefined ? Boolean(p.roundOff) : true;
  if (document.getElementById('invFrom')) document.getElementById('invFrom').value = p.from || '';
  if (document.getElementById('invFromGstin')) document.getElementById('invFromGstin').value = p.fromGstin || '';
  if (document.getElementById('invTo')) document.getElementById('invTo').value = p.to || '';
  if (document.getElementById('invToGstin')) document.getElementById('invToGstin').value = p.toGstin || '';
  if (document.getElementById('invNum')) document.getElementById('invNum').value = p.num || '';
  if (document.getElementById('invCurrency')) document.getElementById('invCurrency').value = p.currency || '₹';
  if (document.getElementById('invDiscount')) document.getElementById('invDiscount').value = p.discount || 0;
  if (document.getElementById('invShipping')) document.getElementById('invShipping').value = p.shipping || 0;
  if (document.getElementById('invAdvancePaid')) document.getElementById('invAdvancePaid').value = p.advancePaid || 0;
  if (document.getElementById('invTaxMode')) document.getElementById('invTaxMode').value = p.taxMode || 'cgst_sgst';
  if (document.getElementById('invTax')) document.getElementById('invTax').value = p.tax ?? 12;
  if (document.getElementById('invTdsRate')) document.getElementById('invTdsRate').value = String(p.tdsRate ?? 0);
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

function escapeCsvCell(val) {
  let s = String(val === null || val === undefined ? '' : val).replace(/\r?\n/g, ' ');
  if (/^[=+\-@\t\r]/.test(s)) {
    s = "'" + s;
  }
  if (/[",]/.test(s)) {
    s = '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

function exportSavedInvoicesCsv() {
  let list = getSavedInvoicesList();
  if (!list.length) {
    const curTaxRate = Number(document.getElementById('invTax')?.value) || 0;
    const curTaxMode = document.getElementById('invTaxMode')?.value || 'cgst_sgst';
    const curDiscount = Number(document.getElementById('invDiscount')?.value) || 0;
    const curSub = (typeof invoiceItems !== 'undefined' && Array.isArray(invoiceItems))
      ? invoiceItems.reduce((acc, i) => acc + (Number(i.qty) || 0) * (Number(i.rate) || 0), 0)
      : 0;
    const curTaxable = Math.max(0, curSub - curDiscount);
    const curTaxAmt = (curTaxMode === 'none' || curTaxRate === 0) ? 0 : curTaxable * (curTaxRate / 100);
    list = [{
      date: document.getElementById('invDate')?.value || new Date().toISOString().slice(0, 10),
      docType: document.getElementById('invDocType')?.value || 'TAX INVOICE',
      num: (document.getElementById('invNum')?.value || 'INV-2026-001').trim(),
      to: document.getElementById('invTo')?.value || 'Customer',
      toGstin: document.getElementById('invToGstin')?.value || '',
      taxMode: curTaxMode,
      tax: curTaxRate,
      discount: curDiscount,
      tdsRate: Number(document.getElementById('invTdsRate')?.value) || 0,
      items: (typeof invoiceItems !== 'undefined' && Array.isArray(invoiceItems)) ? invoiceItems : [],
      total: curTaxable + curTaxAmt
    }];
  }

  const headers = ['Date', 'DocType', 'InvoiceNo', 'Client', 'ClientGSTIN', 'TaxMode', 'TaxableBase', 'GSTTotal', 'GrandTotal', 'TDSRate'];
  const lines = [headers.join(',')];

  list.forEach(inv => {
    const items = Array.isArray(inv.items) ? inv.items : [];
    const sub = items.reduce((acc, i) => acc + (Number(i.qty) || 0) * (Number(i.rate) || 0), 0);
    const discount = Math.max(0, Number(inv.discount) || 0);
    const taxableBase = Math.max(0, sub - discount);
    const taxMode = inv.taxMode || 'cgst_sgst';
    const taxRate = Number(inv.tax) || 0;
    const gstTotal = (taxMode === 'none' || taxRate === 0) ? 0 : taxableBase * (taxRate / 100);
    const grandTotal = items.length ? (taxableBase + gstTotal) : (Number(inv.total) || 0);
    const tdsRate = Number(inv.tdsRate) || 0;
    const invDate = inv.date || document.getElementById('invDate')?.value || new Date().toISOString().slice(0, 10);

    const row = [
      invDate,
      inv.docType || 'TAX INVOICE',
      inv.num || 'INV-2026-001',
      inv.to || 'Customer',
      inv.toGstin || '',
      taxMode,
      taxableBase.toFixed(2),
      gstTotal.toFixed(2),
      grandTotal.toFixed(2),
      tdsRate.toFixed(2)
    ].map(escapeCsvCell);

    lines.push(row.join(','));
  });

  const csvContent = '\uFEFF' + lines.join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `billfold-sales-register-${stamp}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  setBackupStatus(`Exported ${list.length} invoice(s) to GST Sales Register CSV.`, false);
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


function addMsmeNote() {
  const notesEl = document.getElementById('invNotes');
  if (!notesEl) return;
  const msmeClause = 'MSME Registered (Sec 43B(h)): Payable within 15 days of invoice date.';
  const current = notesEl.value.trim();
  if (!current.includes(msmeClause)) {
    notesEl.value = current ? `${current}\n${msmeClause}` : msmeClause;
  }
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

const GST_STATE_CODES = {
  '01': 'Jammu & Kashmir',
  '02': 'Himachal Pradesh',
  '03': 'Punjab',
  '04': 'Chandigarh',
  '05': 'Uttarakhand',
  '06': 'Haryana',
  '07': 'Delhi',
  '08': 'Rajasthan',
  '09': 'Uttar Pradesh',
  '10': 'Bihar',
  '11': 'Sikkim',
  '12': 'Arunachal Pradesh',
  '13': 'Nagaland',
  '14': 'Manipur',
  '15': 'Mizoram',
  '16': 'Tripura',
  '17': 'Meghalaya',
  '18': 'Assam',
  '19': 'West Bengal',
  '20': 'Jharkhand',
  '21': 'Odisha',
  '22': 'Chhattisgarh',
  '23': 'Madhya Pradesh',
  '24': 'Gujarat',
  '25': 'Daman & Diu',
  '26': 'Dadra & Nagar Haveli and Daman & Diu',
  '27': 'Maharashtra',
  '28': 'Andhra Pradesh (Pre-2014)',
  '29': 'Karnataka',
  '30': 'Goa',
  '31': 'Lakshadweep',
  '32': 'Kerala',
  '33': 'Tamil Nadu',
  '34': 'Puducherry',
  '35': 'Andaman & Nicobar Islands',
  '36': 'Telangana',
  '37': 'Andhra Pradesh',
  '38': 'Ladakh'
};

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
    const stateCode = val.slice(0, 2);
    const stateName = GST_STATE_CODES[stateCode];
    if (stateName) {
      el.textContent = `Valid 15-char GSTIN · ${stateName} (${stateCode}) ✓`;
      el.className = 'gstin-status is-valid';
    } else {
      el.textContent = `Check GSTIN state code (${stateCode} is outside 01–38)`;
      el.className = 'gstin-status is-invalid';
    }
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

function duplicateInvoiceAsNext() {
  const invDateEl = document.getElementById('invDate');
  if (invDateEl) {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    invDateEl.value = `${yyyy}-${mm}-${dd}`;
  }
  incrementInvoiceNumber();
}

const BF_SELLER_PROFILE_KEY = 'bf_seller_profile';

function saveSellerProfile() {
  if (!document.getElementById('invoicePreview')) return;
  const fromNameEl = document.getElementById('invFromName') || document.getElementById('invFrom');
  const fromGstinEl = document.getElementById('invFromGstin');
  const fromStateEl = document.getElementById('invFromState');
  const upiIdEl = document.getElementById('invUpiId') || document.getElementById('invUpi');
  const upiNameEl = document.getElementById('invUpiName');
  const profile = {
    fromName: fromNameEl ? fromNameEl.value : '',
    fromGstin: fromGstinEl ? fromGstinEl.value : '',
    fromState: fromStateEl ? fromStateEl.value : '',
    upiId: upiIdEl ? upiIdEl.value : '',
    upiName: upiNameEl ? upiNameEl.value : ''
  };
  try {
    localStorage.setItem(BF_SELLER_PROFILE_KEY, JSON.stringify(profile));
  } catch (e) {}
}

function restoreSellerProfile() {
  try {
    const raw = localStorage.getItem(BF_SELLER_PROFILE_KEY);
    if (!raw) return;
    const p = JSON.parse(raw);
    if (!p || typeof p !== 'object') return;
    if (p.fromName !== undefined) {
      if (document.getElementById('invFromName')) document.getElementById('invFromName').value = p.fromName;
      if (document.getElementById('invFrom')) document.getElementById('invFrom').value = p.fromName;
    }
    if (p.fromGstin !== undefined && document.getElementById('invFromGstin')) {
      document.getElementById('invFromGstin').value = p.fromGstin;
    }
    if (p.fromState !== undefined && document.getElementById('invFromState')) {
      document.getElementById('invFromState').value = p.fromState;
    }
    if (p.upiId !== undefined) {
      if (document.getElementById('invUpiId')) document.getElementById('invUpiId').value = p.upiId;
      if (document.getElementById('invUpi')) document.getElementById('invUpi').value = p.upiId;
    }
    if (p.upiName !== undefined && document.getElementById('invUpiName')) {
      document.getElementById('invUpiName').value = p.upiName;
    }
  } catch (e) {}
}

function renderInvoice() {
  if (!document.getElementById('invoicePreview')) return;
  const cur = document.getElementById('invCurrency')?.value || '₹';
  const safeCur = escapeHtml(cur);
  const taxRate = Number(document.getElementById('invTax')?.value) || 0;
  const taxMode = document.getElementById('invTaxMode')?.value || 'cgst_sgst';
  const discount = Math.max(0, Number(document.getElementById('invDiscount')?.value) || 0);
  const shipping = Math.max(0, Number(document.getElementById('invShipping')?.value) || 0);
  const fromName = document.getElementById('invFrom')?.value || 'Your Business';
  const fromGstin = document.getElementById('invFromGstin')?.value || '';
  const toName = document.getElementById('invTo')?.value || 'Customer';
  const toGstin = document.getElementById('invToGstin')?.value || '';
  updateGstinStatus(fromGstin, 'invFromGstinStatus');
  updateGstinStatus(toGstin, 'invToGstinStatus');
  const upiId = (document.getElementById('invUpi')?.value || '').trim();
  saveSellerProfile();

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

  const taxable = Math.max(0, sub - discount) + shipping;
  const taxAmt = (taxMode === 'none' || taxRate === 0) ? 0 : taxable * (taxRate / 100);
  const rawTotal = Math.round((taxable + taxAmt) * 100) / 100;
  const roundOffEnabled = Boolean(document.getElementById('invRoundOff')?.checked);
  const total = roundOffEnabled ? Math.round(rawTotal) : rawTotal;
  const roundDiff = Math.round((total - rawTotal) * 100) / 100;

  document.getElementById('prevSub').textContent = `${cur}${sub.toFixed(2)}`;
  const discRow = document.getElementById('prevDiscRow');
  if (discRow) {
    discRow.style.display = discount > 0 ? 'flex' : 'none';
    document.getElementById('prevDisc').textContent = `-${cur}${discount.toFixed(2)}`;
  }

  const shipRow = document.getElementById('prevShipRow');
  if (shipRow) {
    shipRow.style.display = shipping > 0 ? 'flex' : 'none';
    const shipEl = document.getElementById('prevShip');
    if (shipEl) shipEl.textContent = `${cur}${shipping.toFixed(2)}`;
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

  const roundRow = document.getElementById('prevRoundRow');
  const roundAmtEl = document.getElementById('prevRoundAmt');
  if (roundRow && roundAmtEl) {
    if (roundOffEnabled && Math.abs(roundDiff) >= 0.005) {
      roundRow.style.display = 'flex';
      const sign = roundDiff > 0 ? '+' : '-';
      roundAmtEl.textContent = `${sign}${cur}${Math.abs(roundDiff).toFixed(2)}`;
    } else {
      roundRow.style.display = 'none';
    }
  }

  document.getElementById('prevTotal').textContent = `${cur}${total.toFixed(2)}`;

  const advancePaid = Math.max(0, Number(document.getElementById('invAdvancePaid')?.value) || 0);
  const balancePayable = Math.max(0, Math.round((total - advancePaid) * 100) / 100);
  window._currentBillfoldAdvancePaid = advancePaid;
  window._currentBillfoldBalancePayable = balancePayable;
  window._currentBillfoldCurrency = cur;
  const advRow = document.getElementById('prevAdvanceRow');
  const balRow = document.getElementById('prevBalanceRow');
  if (advRow && balRow) {
    if (advancePaid > 0) {
      advRow.style.display = 'flex';
      balRow.style.display = 'flex';
      const advAmtEl = document.getElementById('prevAdvanceAmt');
      if (advAmtEl) advAmtEl.textContent = `-${cur}${advancePaid.toFixed(2)}`;
      const balTotEl = document.getElementById('prevBalanceTotal');
      if (balTotEl) balTotEl.textContent = `${cur}${balancePayable.toFixed(2)}`;
    } else {
      advRow.style.display = 'none';
      balRow.style.display = 'none';
    }
  }

  const tdsRate = Number(document.getElementById('invTdsRate')?.value) || 0;
  const tdsAmt = tdsRate > 0 ? taxable * (tdsRate / 100) : 0;
  const netReceivable = Math.max(0, total - tdsAmt);
  const tdsRow = document.getElementById('prevTdsRow');
  const netRow = document.getElementById('prevNetRow');
  if (tdsRow && netRow) {
    if (tdsRate > 0) {
      tdsRow.style.display = 'flex';
      netRow.style.display = 'flex';
      const tdsLabelEl = document.getElementById('prevTdsLabel');
      if (tdsLabelEl) tdsLabelEl.textContent = `TDS on Base (${tdsRate}%)`;
      const tdsAmtEl = document.getElementById('prevTdsAmt');
      if (tdsAmtEl) tdsAmtEl.textContent = `-${cur}${tdsAmt.toFixed(2)}`;
      const netTotEl = document.getElementById('prevNetTotal');
      if (netTotEl) netTotEl.textContent = `${cur}${netReceivable.toFixed(2)}`;
    } else {
      tdsRow.style.display = 'none';
      netRow.style.display = 'none';
    }
  }

  const wordsEl = document.getElementById('prevAmountWords');
  if (wordsEl) {
    wordsEl.textContent = numberToIndianWords(total, cur);
  }

  const gstr1El = document.getElementById('prevGstr1Bucket');
  if (gstr1El) {
    const cleanToGstin = (toGstin || '').trim().toUpperCase();
    const isValidBuyerGstin = GSTIN_REGEX.test(cleanToGstin) && Boolean(GST_STATE_CODES[cleanToGstin.slice(0, 2)]);
    let gstr1Label = 'B2CS · Table 7';
    let gstr1Title = 'GSTR-1 Table 7: Unregistered / Intra-state or Inter-state B2C supply <= ₹2,50,000';
    let gstr1Bg = '#f1f5f9';
    let gstr1Color = '#334155';
    if (isValidBuyerGstin) {
      gstr1Label = 'B2B · Table 4A';
      gstr1Title = 'GSTR-1 Table 4A: Taxable B2B supply to registered GSTIN';
      gstr1Bg = '#eff6ff';
      gstr1Color = '#1e3a8a';
    } else if (cur === '₹' && taxMode === 'igst' && total > 250000) {
      gstr1Label = 'B2CL · Table 5A';
      gstr1Title = 'GSTR-1 Table 5A: Inter-state B2C Large invoice > ₹2,50,000';
      gstr1Bg = '#fef3c7';
      gstr1Color = '#92400e';
    }
    gstr1El.textContent = gstr1Label;
    gstr1El.setAttribute('title', gstr1Title);
    gstr1El.style.background = gstr1Bg;
    gstr1El.style.color = gstr1Color;
  }

  const ewayAlertEl = document.getElementById('prevEwayAlert');
  if (ewayAlertEl) {
    if (cur === '₹' && total >= 50000) {
      const formattedTotal = total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      const modeNote = taxMode === 'igst' ? 'Inter-state dispatch (IGST): ' : '';
      ewayAlertEl.style.display = 'block';
      ewayAlertEl.innerHTML = `<strong>E-Way Bill Required (GST Rule 138):</strong> ${escapeHtml(modeNote)}Consignment value is ₹${escapeHtml(formattedTotal)} (≥ ₹50,000). Generate Part-A &amp; Part-B on ewaybillgst.gov.in before dispatch to avoid Section 129 transit penalties.`;
    } else {
      ewayAlertEl.style.display = 'none';
      ewayAlertEl.textContent = '';
    }
  }

  const upiWrap = document.getElementById('prevUpiWrap');
  if (upiWrap) {
    if (upiId && cur === '₹') {
      upiWrap.style.display = 'block';
      const upiAmount = balancePayable.toFixed(2);
      const upiNote = advancePaid > 0 ? `Balance for ${invNumVal}` : `Invoice ${invNumVal}`;
      const upiUri = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(fromName)}&am=${upiAmount}&cu=INR&tr=${encodeURIComponent(invNumVal)}&tn=${encodeURIComponent(upiNote)}`;
      window._currentBillfoldUpiUri = upiUri;
      const qrEl = document.getElementById('prevUpiQr');
      const localQr = buildQrSvgDataUri(upiUri, 120);
      if (qrEl) {
        if (localQr) {
          qrEl.src = localQr;
          qrEl.style.display = 'inline-block';
        } else {
          qrEl.removeAttribute('src');
          qrEl.style.display = 'none';
        }
      }
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
  const advPaid = Number(window._currentBillfoldAdvancePaid) || 0;
  const balPay = Number(window._currentBillfoldBalancePayable);
  const curSym = window._currentBillfoldCurrency || '₹';
  const msg = advPaid > 0
    ? `Hi ${toName},\n\nSharing your invoice ${invNum} from ${fromName}.\nInvoice Total: ${totalText}\nAdvance / Token Paid: ${curSym}${advPaid.toFixed(2)}\nBalance Payable: ${curSym}${balPay.toFixed(2)}\n\nPay the exact balance of ${curSym}${balPay.toFixed(2)} via UPI:\n${uri}\n\nThank you!`
    : `Hi ${toName},\n\nSharing your invoice ${invNum} from ${fromName} for ${totalText}.\n\nYou can pay directly via UPI using this link:\n${uri}\n\nThank you!`;
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
  if (document.getElementById('invTo')) document.getElementById('invTo').value = '';
  if (document.getElementById('invToGstin')) document.getElementById('invToGstin').value = '';
  if (document.getElementById('invDiscount')) document.getElementById('invDiscount').value = '0';
  if (document.getElementById('invShipping')) document.getElementById('invShipping').value = '0';
  if (document.getElementById('invAdvancePaid')) document.getElementById('invAdvancePaid').value = '0';
  if (document.getElementById('invNotes')) document.getElementById('invNotes').value = '';
  invoiceItems = [{ desc: 'Consulting / Product Order', qty: 1, rate: 1500 }];
  restoreSellerProfile();
  renderInvoiceInputs();
  renderInvoice();
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

  return function (text, size) {
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
    const dimAttr = size ? ` width="${size}" height="${size}"` : '';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg"${dimAttr} viewBox="0 0 ${total} ${total}" shape-rendering="crispEdges"><rect width="${total}" height="${total}" fill="#ffffff"/><path d="${d}" fill="#0f172a"/></svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  };
})();

if (document.getElementById('invoiceItemsList')) {
  const initInvDateEl = document.getElementById('invDate');
  if (initInvDateEl && !initInvDateEl.value) {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    initInvDateEl.value = `${yyyy}-${mm}-${dd}`;
  }
  restoreSellerProfile();
  renderInvoiceInputs();
  renderInvoice();
  renderSavedInvoicesBar();
}

/* 2. TAPPING — WHATSAPP LINK & QR GENERATOR */
function setWaTemplate(text, btn) {
  const el = document.getElementById('waMsg');
  if (el) {
    el.value = text;
    buildWhatsApp();
  }
  if (btn && btn.closest) {
    const bar = btn.closest('.preset-chips');
    if (bar) {
      bar.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    }
    btn.classList.add('active');
  }
}


function insertWaToken(token) {
  const el = document.getElementById('waMsg');
  if (!el || !token) return;
  const start = typeof el.selectionStart === 'number' ? el.selectionStart : el.value.length;
  const end = typeof el.selectionEnd === 'number' ? el.selectionEnd : el.value.length;
  const before = el.value.slice(0, start);
  const after = el.value.slice(end);
  const padLeft = before.length > 0 && !/\s$/.test(before) ? ' ' : '';
  const padRight = after.length > 0 && !/^\s/.test(after) ? ' ' : '';
  const inserted = `${padLeft}${token}${padRight}`;
  el.value = before + inserted + after;
  const cursor = start + padLeft.length + token.length;
  el.focus();
  if (typeof el.setSelectionRange === 'function') {
    el.setSelectionRange(cursor, cursor);
  }
  buildWhatsApp();
}
window.insertWaToken = insertWaToken;

function buildWhatsApp() {
  const phoneEl = document.getElementById('waPhone');
  const qrImgEl = document.getElementById('waQrImg');
  if (!phoneEl && !qrImgEl) return;
  const ccEl = document.getElementById('waCountryCode');
  const cc = ccEl ? ccEl.value.replace(/\D/g, '') : '';
  const rawPhone = phoneEl ? phoneEl.value : '9876543210';
  let digits = rawPhone.replace(/\D/g, '').replace(/^0+/, '');
  const minFullLen = { '91': 12, '971': 12, '1': 11, '44': 12, '65': 10 }[cc] || (cc.length + 8);
  let phone = '919876543210';
  if (digits) {
    if (cc && digits.startsWith(cc) && digits.length >= minFullLen) {
      phone = digits;
    } else if (cc) {
      phone = cc + digits;
    } else {
      phone = digits;
    }
  }
  const rawMsg = (document.getElementById('waMsg')?.value || '').trim();
  const sourceTag = (document.getElementById('waSourceTag')?.value || '').trim();
  const taggedMsg = sourceTag
    ? (rawMsg ? `${rawMsg} [Ref: ${sourceTag}]` : `[Ref: ${sourceTag}]`)
    : rawMsg;
  const msg = encodeURIComponent(taggedMsg);
  const url = `https://wa.me/${phone}${msg ? `?text=${msg}` : ''}`;
  const chatPreviewEl = document.getElementById('waChatPreview');
  if (chatPreviewEl) {
    chatPreviewEl.textContent = taggedMsg || 'No pre-filled message (opens blank chat)';
  }
  const msgStatsEl = document.getElementById('waMsgStats');
  if (msgStatsEl) {
    const msgLen = taggedMsg.length;
    let readability = 'Above mobile fold';
    let color = '#059669';
    if (msgLen === 0) {
      readability = 'Blank chat';
      color = '#64748b';
    } else if (msgLen > 4096) {
      readability = 'Exceeds 4,096 limit';
      color = '#dc2626';
    } else if (msgLen > 1024) {
      readability = 'Truncated on mobile fold';
      color = '#c2410c';
    } else if (msgLen > 240) {
      readability = 'Multi-scroll · Good';
      color = '#0f4c5c';
    }
    msgStatsEl.textContent = `${msgLen} / 1,024 fold · 4,096 max · ${readability}`;
    msgStatsEl.style.color = color;
  }
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
  const qrDlEl = document.getElementById('waQrDownload') || document.getElementById('waDownloadQr');
  if (qrDlEl) {
    qrDlEl.dataset.waUrl = url;
    if (qrDlEl.tagName === 'A') {
      qrDlEl.removeAttribute('href');
    }
  }
  const qrSvgDlEl = document.getElementById('waQrDownloadSvg');
  if (qrSvgDlEl) {
    qrSvgDlEl.dataset.waUrl = url;
  }
  const htmlCode = `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#059669;color:#fff;padding:10px 18px;border-radius:8px;font-weight:600;text-decoration:none;">Chat on WhatsApp</a>`;
  const embedEl = document.getElementById('waEmbedCode');
  if (embedEl) embedEl.value = htmlCode;
}
buildWhatsApp();

const DEFAULT_TAPPING_LINKS = [
  {
    label: 'Order Desk',
    cc: '91',
    phone: '9876543210',
    brand: 'Your Shop Name',
    cta: 'Scan to Order on WhatsApp',
    sourceTag: 'Instagram Reel',
    msg: 'Hi! I saw your catalog and want to place an order. Please share available sizes and payment link.'
  },
  {
    label: 'Cart Recovery',
    cc: '91',
    phone: '9876543210',
    brand: 'Your Shop Name',
    cta: 'Need Help Checking Out?',
    sourceTag: '',
    msg: 'Hi! I noticed your cart was still open. Pay via UPI in the next 2 hours to claim Rs 75 off and same-day dispatch.'
  },
  {
    label: 'Salon Slot',
    cc: '91',
    phone: '9820445566',
    brand: 'Studio Glow',
    cta: 'Scan to Book Appointment',
    sourceTag: 'Google Maps',
    msg: 'Hello! I want to book a Salon / Clinic appointment for [Service] on [Day] around [Time]. Please confirm available slots.'
  }
];

function getSavedTapPingLinks() {
  try {
    const raw = localStorage.getItem('tp_saved_links');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
    localStorage.setItem('tp_saved_links', JSON.stringify(DEFAULT_TAPPING_LINKS));
    return DEFAULT_TAPPING_LINKS.slice();
  } catch (e) {
    return DEFAULT_TAPPING_LINKS.slice();
  }
}

function formatTapPingUrlFromEntry(item) {
  const cc = String(item.cc || '91').replace(/\D/g, '');
  let digits = String(item.phone || '9876543210').replace(/\D/g, '').replace(/^0+/, '');
  const minFullLen = { '91': 12, '971': 12, '1': 11, '44': 12, '65': 10 }[cc] || (cc.length + 8);
  let phone = '919876543210';
  if (digits) {
    if (cc && digits.startsWith(cc) && digits.length >= minFullLen) phone = digits;
    else if (cc) phone = cc + digits;
    else phone = digits;
  }
  const rawMsg = String(item.msg || '').trim();
  const tag = String(item.sourceTag || '').trim();
  const tagged = tag ? (rawMsg ? `${rawMsg} [Ref: ${tag}]` : `[Ref: ${tag}]`) : rawMsg;
  const q = encodeURIComponent(tagged);
  return `https://wa.me/${phone}${q ? `?text=${q}` : ''}`;
}

function exportTapPingLinksCsv() {
  let list = getSavedTapPingLinks();
  if (!list.length) {
    const livePhone = document.getElementById('waPhone')?.value.trim() || '9876543210';
    const liveCc = document.getElementById('waCountryCode')?.value || '91';
    const liveSourceTag = (document.getElementById('waSourceTag')?.value || '').trim();
    const liveMsg = (document.getElementById('waMsg')?.value || '').trim();
    const liveLabel = (document.getElementById('tpSaveLabel')?.value || '').trim()
      || liveSourceTag
      || (document.getElementById('waBrand')?.value || '').trim()
      || 'Live Link';
    list = [{
      label: liveLabel.slice(0, 28),
      cc: liveCc,
      phone: livePhone,
      sourceTag: liveSourceTag,
      msg: liveMsg
    }];
  }

  const headers = ['Label', 'Phone', 'SourceTag', 'Message', 'WaMeURL'];
  const lines = [headers.map(escapeCsvCell).join(',')];

  list.forEach(item => {
    const cc = String(item.cc || '91').replace(/\D/g, '');
    const digits = String(item.phone || '').replace(/\D/g, '');
    const minFullLen = { '91': 12, '971': 12, '1': 11, '44': 12, '65': 10 }[cc] || (cc.length + 8);
    let fullPhone = '919876543210';
    if (digits) {
      if (cc && digits.startsWith(cc) && digits.length >= minFullLen) fullPhone = digits;
      else if (cc) fullPhone = cc + digits;
      else fullPhone = digits;
    }
    const row = [
      item.label || 'Saved Link',
      fullPhone,
      item.sourceTag || '',
      item.msg || '',
      buildSavedTapPingUrl(item)
    ].map(escapeCsvCell);
    lines.push(row.join(','));
  });

  const csvContent = '\uFEFF' + lines.join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `tapping-whatsapp-links-${stamp}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function renderSavedTapPingBar() {
  const container = document.getElementById('tpSavedList');
  if (!container) return;
  const list = getSavedTapPingLinks();
  if (!list.length) {
    container.innerHTML = '<span class="muted" style="font-size:0.76rem;">No saved links yet. Enter a label and click "+ Save Link" to store up to 8 links locally.</span>';
    return;
  }
  container.innerHTML = list.map((item, idx) => {
    const safeLabel = escapeHtml((item.label || 'Saved Link').slice(0, 28));
    const safePhone = escapeHtml(String(item.phone || '').slice(-10));
    return `
      <span class="bf-saved-chip" onclick="loadSavedTapPingLink(${idx})" title="Click to reload ${safeLabel} + QR code">
        <span>${safeLabel} &bull; ${safePhone}</span>
        <button type="button" class="bf-saved-del" style="font-size:0.68rem;padding:0 4px;" onclick="copySavedTapPingLink(${idx}, event)" aria-label="Copy ${safeLabel} wa.me link" title="Copy wa.me link">Copy</button>
        <button type="button" class="bf-saved-del" onclick="deleteSavedTapPingLink(${idx}, event)" aria-label="Delete saved link ${safeLabel}" title="Remove saved link">&times;</button>
      </span>
    `;
  }).join('');
}

function saveTapPingLink() {
  const phoneEl = document.getElementById('waPhone');
  if (!phoneEl) return;
  const labelInput = document.getElementById('tpSaveLabel');
  const rawLabel = (labelInput?.value || '').trim()
    || (document.getElementById('waSourceTag')?.value || '').trim()
    || (document.getElementById('waBrand')?.value || '').trim()
    || 'Saved Link';
  const entry = {
    label: rawLabel.slice(0, 28),
    cc: document.getElementById('waCountryCode')?.value || '91',
    phone: phoneEl.value.trim() || '9876543210',
    brand: document.getElementById('waBrand')?.value || 'Your Shop Name',
    cta: document.getElementById('waStandeeCta')?.value || 'Scan to Order on WhatsApp',
    sourceTag: document.getElementById('waSourceTag')?.value || '',
    msg: document.getElementById('waMsg')?.value || ''
  };
  const list = getSavedTapPingLinks().filter(item => item.label.toLowerCase() !== entry.label.toLowerCase());
  list.unshift(entry);
  const trimmed = list.slice(0, 8);
  try {
    localStorage.setItem('tp_saved_links', JSON.stringify(trimmed));
  } catch (e) {}
  if (labelInput) labelInput.value = '';
  renderSavedTapPingBar();
}

function loadSavedTapPingLink(idx) {
  const list = getSavedTapPingLinks();
  const item = list[idx];
  if (!item) return;
  const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
  setVal('waCountryCode', item.cc || '91');
  setVal('waPhone', item.phone || '9876543210');
  setVal('waBrand', item.brand || 'Your Shop Name');
  setVal('waStandeeCta', item.cta || 'Scan to Order on WhatsApp');
  setVal('waSourceTag', item.sourceTag || '');
  setVal('waMsg', item.msg || '');
  buildWhatsApp();
  if (typeof updateStandeeBrand === 'function') updateStandeeBrand();
}

function copySavedTapPingLink(idx, event) {
  if (event) event.stopPropagation();
  const list = getSavedTapPingLinks();
  const item = list[idx];
  if (!item) return;
  loadSavedTapPingLink(idx);
  const url = formatTapPingUrlFromEntry(item);
  const btn = event?.currentTarget || null;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      if (btn) {
        const prev = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(() => { btn.textContent = prev; }, 1200);
      }
    }).catch(() => {});
  }
}

function deleteSavedTapPingLink(idx, event) {
  if (event) event.stopPropagation();
  const list = getSavedTapPingLinks();
  list.splice(idx, 1);
  try {
    localStorage.setItem('tp_saved_links', JSON.stringify(list));
  } catch (e) {}
  renderSavedTapPingBar();
}

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

function measureSerpDescPx(str) {
  if (!str) return 0;
  try {
    if (!_serpCanvasCtx && typeof document !== 'undefined') {
      const c = document.createElement('canvas');
      _serpCanvasCtx = c.getContext('2d');
    }
    if (_serpCanvasCtx) {
      _serpCanvasCtx.font = '14px Arial, sans-serif';
      return Math.round(_serpCanvasCtx.measureText(str).width);
    }
  } catch (e) {}
  let total = 0;
  for (const ch of str) {
    if (SERP_CHAR_WIDTHS[ch] !== undefined) total += SERP_CHAR_WIDTHS[ch] * 0.7;
    else if (/[A-Z]/.test(ch)) total += 9.45;
    else if (/[0-9]/.test(ch)) total += 7.77;
    else total += 7.35;
  }
  return Math.round(total);
}

function truncateSerpDescByPx(str, maxPx) {
  if (measureSerpDescPx(str) <= maxPx) return str;
  let end = str.length;
  while (end > 0 && measureSerpDescPx(str.slice(0, end).trimEnd() + '...') > maxPx) {
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
  const readSec = words > 0 ? Math.max(1, Math.round((words / 200) * 60)) : 0;
  const wordLabel = words === 1 ? '1 word' : `${words} words`;
  const cntWordsEl = document.getElementById('cntWords');
  if (cntWordsEl) cntWordsEl.textContent = `${wordLabel} · ~${readSec} sec read`;
  document.getElementById('cntIg').textContent = chars <= 150 ? `${150 - chars} left` : `${chars - 150} over`;
  document.getElementById('cntSeo').textContent = chars <= 160 ? `${160 - chars} left` : `${chars - 160} over`;

  const slopEl = document.getElementById('ccSlopCheck');
  if (slopEl) {
    const slopWords = ['delve', 'unleash', 'elevate', 'game-changer', 'seamless', 'holistic', 'synergy', 'paradigm', 'tapestry'];
    const flagged = slopWords.find(w => new RegExp('\\b' + w.replace('-', '[-\\s]?') + '\\b', 'i').test(text));
    if (flagged) {
      slopEl.textContent = 'Flagged: ' + flagged;
      slopEl.style.color = '#c2410c';
    } else {
      slopEl.textContent = 'Tone: Plain English \u2713';
      slopEl.style.color = '#059669';
    }
  }

  const serpTitle = document.getElementById('serpTitleInput')?.value || 'Your Brand — Official Store & Custom Orders';
  const serpUrl = document.getElementById('serpUrlInput')?.value || 'https://yourstore.in';
  const prevTitle = document.getElementById('serpPrevTitle');
  const prevUrl = document.getElementById('serpPrevUrl');
  const prevDesc = document.getElementById('serpPrevDesc');

  const isMobile = serpDeviceMode === 'mobile';
  const maxPx = isMobile ? 640 : 580;
  const maxDesc = isMobile ? 120 : 160;
  const titleChars = serpTitle.length;
  const titlePx = measureSerpTitlePx(serpTitle);
  const charsEl = document.getElementById('serpTitleChars');
  const pxEl = document.getElementById('serpTitlePx');
  const statusEl = document.getElementById('serpTitleStatus');
  if (charsEl) charsEl.textContent = `${titleChars} / 60 chars`;
  if (pxEl) {
    pxEl.textContent = isMobile ? `~${titlePx} / 640 px (2 lines)` : `~${titlePx} / 580 px`;
    pxEl.style.color = titlePx > maxPx ? '#c2410c' : 'var(--ink)';
  }
  if (statusEl) {
    if (titlePx > maxPx) {
      statusEl.textContent = isMobile
        ? `+${titlePx - maxPx} px over (>2 lines)`
        : `+${titlePx - maxPx} px over (truncates)`;
      statusEl.style.color = '#c2410c';
    } else if (isMobile) {
      statusEl.textContent = titlePx <= 320 ? 'Fits 1st mobile line' : 'Fits 2-line mobile card';
      statusEl.style.color = '#059669';
    } else if (titlePx >= 520) {
      statusEl.textContent = `${580 - titlePx} px buffer left`;
      statusEl.style.color = '#0f4c5c';
    } else {
      statusEl.textContent = 'Fits desktop SERP';
      statusEl.style.color = '#059669';
    }
  }

  const cleanDesc = text.replace(/\n+/g, ' ').trim();
  const maxDescPx = isMobile ? 680 : 920;
  const descChars = cleanDesc.length;
  const descPx = measureSerpDescPx(cleanDesc);
  const descCharsEl = document.getElementById('serpDescChars');
  const descPxEl = document.getElementById('serpDescPx');
  const descStatusEl = document.getElementById('serpDescStatus');
  if (descCharsEl) descCharsEl.textContent = `${descChars} / ${maxDesc} chars`;
  if (descPxEl) {
    descPxEl.textContent = `~${descPx} / ${maxDescPx} px`;
    descPxEl.style.color = descPx > maxDescPx ? '#c2410c' : 'var(--ink)';
  }
  if (descStatusEl) {
    if (descChars === 0) {
      descStatusEl.textContent = 'Add meta description';
      descStatusEl.style.color = 'var(--muted)';
    } else if (descPx > maxDescPx) {
      descStatusEl.textContent = `+${descPx - maxDescPx} px over (truncates)`;
      descStatusEl.style.color = '#c2410c';
    } else if (maxDescPx - descPx <= 80) {
      descStatusEl.textContent = `${maxDescPx - descPx} px buffer left`;
      descStatusEl.style.color = '#0f4c5c';
    } else {
      descStatusEl.textContent = isMobile ? 'Fits mobile SERP' : 'Fits desktop SERP';
      descStatusEl.style.color = '#059669';
    }
  }
  if (prevTitle) prevTitle.textContent = truncateSerpTitleByPx(serpTitle, maxPx);
  if (prevUrl) prevUrl.textContent = serpUrl;
  if (prevDesc) prevDesc.textContent = truncateSerpDescByPx(cleanDesc, maxDescPx) || 'Write your description above to preview how your page appears on Google Search.';

  const kwInput = document.getElementById('serpKeyword');
  const kwStatusEl = document.getElementById('serpKeywordStatus');
  if (kwStatusEl) {
    const kw = (kwInput?.value || '').trim().toLowerCase();
    if (!kw) {
      kwStatusEl.textContent = 'Optional keyword check';
      kwStatusEl.style.color = 'var(--muted)';
    } else {
      const countOcc = (haystack, needle) => (needle ? haystack.toLowerCase().split(needle).length - 1 : 0);
      const titleHits = countOcc(serpTitle, kw);
      const descHits = countOcc(cleanDesc, kw);
      if (titleHits > 2 || descHits > 3) {
        const warns = [];
        if (titleHits > 2) warns.push(`Title ${titleHits}x (>2)`);
        if (descHits > 3) warns.push(`Desc ${descHits}x (>3)`);
        kwStatusEl.textContent = `Stuffing risk: ${warns.join(', ')}`;
        kwStatusEl.style.color = '#c2410c';
      } else if (titleHits > 0 && descHits > 0) {
        kwStatusEl.textContent = 'Matched in Title + Desc \u2713';
        kwStatusEl.style.color = '#059669';
      } else if (titleHits > 0) {
        kwStatusEl.textContent = 'Title only';
        kwStatusEl.style.color = '#0f4c5c';
      } else if (descHits > 0) {
        kwStatusEl.textContent = 'Desc only';
        kwStatusEl.style.color = '#0f4c5c';
      } else {
        kwStatusEl.textContent = 'Missing from Title & Desc';
        kwStatusEl.style.color = '#c2410c';
      }
    }
  }

  const indiaHookEl = document.getElementById('serpIndiaHookStatus');
  if (indiaHookEl) {
    const combinedSerp = `${serpTitle} ${cleanDesc}`.trim();
    const hooks = [];
    if (/(?:₹\s?\d|\brs\.?\s?\d)/i.test(combinedSerp)) hooks.push('₹ price');
    if (/(?:\d+\s?%|\bflat\s+\d+|\bunder\s+₹?\d+)/i.test(combinedSerp)) hooks.push('% off');
    if (/\b(upi|cod|gst|prepaid|cash on delivery)\b/i.test(combinedSerp)) hooks.push('UPI/COD/GST');
    if (/\b(\d{6}|open|hours|timings?|am|pm|daily|dispatch|jaipur|surat|delhi|mumbai|bengaluru|bangalore|pune|hyderabad|chennai|kolkata|ahmedabad|lucknow|indore|kochi|chandigarh|noida|gurgaon|gurugram)\b/i.test(combinedSerp)) hooks.push('city/pin/hours');
    if (hooks.length >= 2) {
      indiaHookEl.textContent = `Hooks: ${hooks.join(' + ')} \u2713`;
      indiaHookEl.style.color = '#059669';
    } else if (hooks.length === 1) {
      indiaHookEl.textContent = `1 hook (${hooks[0]}) — add UPI/COD, % off, or city/hours`;
      indiaHookEl.style.color = '#0f4c5c';
    } else {
      indiaHookEl.textContent = 'Missing ₹ price, % off, UPI/COD/GST, or city/hours';
      indiaHookEl.style.color = '#c2410c';
    }
  }
}

let serpDeviceMode = 'desktop';
function setSerpDeviceMode(mode) {
  serpDeviceMode = mode === 'mobile' ? 'mobile' : 'desktop';
  document.querySelectorAll('#serpDeviceToggle .serp-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.serpDevice === serpDeviceMode);
  });
  const card = document.getElementById('serpPreviewCard');
  if (card) card.classList.toggle('is-mobile', serpDeviceMode === 'mobile');
  updateFormatter();
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
  } else if (mode === 'festive') {
    const rawLines = t.split('\n').map(l => l.trim()).filter(Boolean)
      .map(l => l.replace(/^[✓•\-]\s*/, '').trim());
    const cleanField = (line, labelRe) => line.replace(labelRe, '').replace(/^\*+|\*+$/g, '').trim();
    const serpTitle = (document.getElementById('serpTitleInput')?.value || '').trim();

    let productName = '';
    let upiSavings = '';
    let sameDayShip = '';
    let waOrder = '';

    for (const line of rawLines) {
      if (/^\*?festive\s*dispatch\s*offer\*?$/i.test(line)) continue;
      if (/^\*?upi\s*savings:?\*?/i.test(line)) {
        upiSavings = cleanField(line, /^\*?upi\s*savings:?\*?\s*/i);
      } else if (/^\*?same[-\s]*day\s*ship(?:ping)?:?\*?/i.test(line)) {
        sameDayShip = cleanField(line, /^\*?same[-\s]*day\s*ship(?:ping)?:?\*?\s*/i);
      } else if (/^\*?order\s*via\s*whatsapp:?\*?/i.test(line)) {
        waOrder = cleanField(line, /^\*?order\s*via\s*whatsapp:?\*?\s*/i);
      } else if (!productName && !/(?:₹|rs\.?\s*|inr\s*)\d/i.test(line)) {
        productName = line.replace(/^\*+|\*+$/g, '').trim();
      } else if (!upiSavings && /(upi|prepaid|offer|discount|save|savings|off|₹|rs\.?|inr)/i.test(line)) {
        upiSavings = line.replace(/^\*+|\*+$/g, '').trim();
      } else if (!sameDayShip && /(dispatch|ship|cut[-\s]*off|pm|am|same[-\s]*day|eta|deliver)/i.test(line)) {
        sameDayShip = line.replace(/^\*+|\*+$/g, '').trim();
      } else if (!waOrder && /(whatsapp|wa\.me|reply|dm|pincode|order)/i.test(line)) {
        waOrder = line.replace(/^\*+|\*+$/g, '').trim();
      }
    }

    if (!productName) productName = serpTitle;
    if (!upiSavings) upiSavings = 'Flat ₹150 OFF on Prepaid UPI (Zero COD Fee)';
    if (!sameDayShip) sameDayShip = 'Dispatches today on orders paid before 4:00 PM IST';
    if (!waOrder) waOrder = 'Reply with your pincode and size/variant to get your instant UPI QR';

    const lines = ['*Festive Dispatch Offer*'];
    if (productName) lines.push(`*${productName}*`);
    lines.push(
      `• *UPI Savings:* ${upiSavings}`,
      `• *Same-Day Ship:* ${sameDayShip}`,
      `• *Order via WhatsApp:* ${waOrder}`
    );
    t = lines.join('\n');
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

function appendGbpCta() {
  const descEl = document.getElementById('gbpDescInput');
  if (!descEl) return;
  const cta = 'Message us on WhatsApp or visit today.';
  let base = descEl.value.replace(/[ \t]+/g, ' ').replace(/\n{2,}/g, ' ').trim();
  if (base.toLowerCase().includes('message us on whatsapp or visit today')) {
    descEl.value = base.slice(0, 749);
    updateGbpProfile();
    return;
  }
  if (!base) {
    descEl.value = cta;
    updateGbpProfile();
    return;
  }
  const hasEndPunct = /[.!?]$/.test(base);
  const sep = hasEndPunct ? ' ' : '. ';
  const maxBaseLen = 749 - sep.length - cta.length;
  if (base.length > maxBaseLen) {
    base = base.slice(0, maxBaseLen).replace(/[,;:\s]+$/, '').trim();
    const lastSpace = base.lastIndexOf(' ');
    if (lastSpace > Math.floor(maxBaseLen * 0.7)) {
      base = base.slice(0, lastSpace);
    }
    base = base.replace(/[.,;:\s]+$/, '');
    descEl.value = base ? `${base}. ${cta}` : cta;
  } else {
    descEl.value = `${base}${sep}${cta}`;
  }
  updateGbpProfile();
}
function getSavedCopyCraftDrafts() {
  try {
    const raw = localStorage.getItem('cc_saved_drafts');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.slice(0, 6);
    }
  } catch (e) {}
  return [];
}

function renderSavedCopyCraftBar() {
  const container = document.getElementById('ccSavedList');
  if (!container) return;
  const list = getSavedCopyCraftDrafts();
  if (!list.length) {
    container.innerHTML = '<span class="muted" style="font-size:0.76rem;">No saved drafts yet. Click "+ Save Draft" to store up to 6 bio/SERP/GBP drafts locally.</span>';
    return;
  }
  container.innerHTML = list.map((item, idx) => {
    const safeLabel = escapeHtml((item.label || 'Saved Draft').slice(0, 28));
    const rawSnippet = (item.fmtInput || item.gbpDesc || item.serpTitle || '').replace(/\s+/g, ' ').trim();
    const safeSnippet = escapeHtml(rawSnippet.slice(0, 24));
    return `
      <span class="bf-saved-chip" onclick="loadSavedCopyCraftDraft(${idx})" title="Click to reload ${safeLabel}${safeSnippet ? ' — ' + safeSnippet : ''}">
        <span>${safeLabel}${safeSnippet ? ` &bull; <span class="muted" style="font-weight:400;">${safeSnippet}</span>` : ''}</span>
        <button type="button" class="bf-saved-del" onclick="deleteSavedCopyCraftDraft(${idx}, event)" aria-label="Delete saved draft ${safeLabel}" title="Remove saved draft">&times;</button>
      </span>
    `;
  }).join('');
}

function saveCopyCraftDraft() {
  const fmtEl = document.getElementById('fmtInput');
  const gbpEl = document.getElementById('gbpDescInput');
  if (!fmtEl && !gbpEl) return;
  const labelInput = document.getElementById('ccSaveLabel');
  const serpTitle = (document.getElementById('serpTitleInput')?.value || '').trim();
  const gbpCity = (document.getElementById('gbpCityInput')?.value || '').trim();
  const rawLabel = (labelInput?.value || '').trim()
    || serpTitle.slice(0, 28)
    || (gbpCity ? `${gbpCity} GBP` : '')
    || 'Saved Draft';
  const entry = {
    label: rawLabel.slice(0, 28),
    serpTitle: serpTitle,
    serpUrl: (document.getElementById('serpUrlInput')?.value || '').trim(),
    fmtInput: fmtEl ? fmtEl.value : '',
    gbpCity: gbpCity,
    gbpService: (document.getElementById('gbpServiceInput')?.value || '').trim(),
    gbpDesc: gbpEl ? gbpEl.value : ''
  };
  const list = getSavedCopyCraftDrafts().filter(item => (item.label || '').toLowerCase() !== entry.label.toLowerCase());
  list.unshift(entry);
  const trimmed = list.slice(0, 6);
  try {
    localStorage.setItem('cc_saved_drafts', JSON.stringify(trimmed));
  } catch (e) {}
  if (labelInput) labelInput.value = '';
  renderSavedCopyCraftBar();
}

function loadSavedCopyCraftDraft(idx) {
  const list = getSavedCopyCraftDrafts();
  const d = list[idx];
  if (!d) return;
  if (document.getElementById('serpTitleInput')) document.getElementById('serpTitleInput').value = d.serpTitle || '';
  if (document.getElementById('serpUrlInput')) document.getElementById('serpUrlInput').value = d.serpUrl || '';
  if (document.getElementById('fmtInput')) document.getElementById('fmtInput').value = d.fmtInput || '';
  if (document.getElementById('gbpCityInput')) document.getElementById('gbpCityInput').value = d.gbpCity || '';
  if (document.getElementById('gbpServiceInput')) document.getElementById('gbpServiceInput').value = d.gbpService || '';
  if (document.getElementById('gbpDescInput')) document.getElementById('gbpDescInput').value = d.gbpDesc || '';
  updateFormatter();
  updateGbpProfile();
}

function deleteSavedCopyCraftDraft(idx, ev) {
  if (ev && typeof ev.stopPropagation === 'function') ev.stopPropagation();
  const list = getSavedCopyCraftDrafts();
  list.splice(idx, 1);
  try {
    localStorage.setItem('cc_saved_drafts', JSON.stringify(list));
  } catch (e) {}
  renderSavedCopyCraftBar();
}

function exportCopyCraftDraftsCsv() {
  let list = getSavedCopyCraftDrafts();
  if (!list.length) {
    const fmtEl = document.getElementById('fmtInput');
    const gbpEl = document.getElementById('gbpDescInput');
    const serpTitle = (document.getElementById('serpTitleInput')?.value || '').trim();
    const serpUrl = (document.getElementById('serpUrlInput')?.value || '').trim();
    const gbpCity = (document.getElementById('gbpCityInput')?.value || '').trim();
    const gbpService = (document.getElementById('gbpServiceInput')?.value || '').trim();
    const rawLabel = (document.getElementById('ccSaveLabel')?.value || '').trim()
      || serpTitle.slice(0, 28)
      || (gbpCity ? `${gbpCity} GBP` : '')
      || 'Live Draft';
    list = [{
      label: rawLabel.slice(0, 28),
      serpTitle: serpTitle,
      serpUrl: serpUrl,
      fmtInput: fmtEl ? fmtEl.value : '',
      gbpCity: gbpCity,
      gbpService: gbpService,
      gbpDesc: gbpEl ? gbpEl.value : ''
    }];
  }

  const headers = ['Label', 'BioCopy', 'SerpTitle', 'SerpURL', 'SerpDesc', 'GbpDesc'];
  const lines = [headers.map(escapeCsvCell).join(',')];

  list.forEach(item => {
    const bioCopy = String(item.fmtInput || '');
    const cleanDesc = bioCopy.replace(/\s+/g, ' ').trim();
    const serpDesc = (typeof truncateSerpDescByPx === 'function')
      ? truncateSerpDescByPx(cleanDesc, 920)
      : cleanDesc.slice(0, 160);
    const row = [
      item.label || 'Saved Draft',
      bioCopy,
      item.serpTitle || '',
      item.serpUrl || '',
      serpDesc,
      item.gbpDesc || ''
    ].map(escapeCsvCell);
    lines.push(row.join(','));
  });

  const csvContent = '\uFEFF' + lines.join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `copycraft-drafts-${stamp}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

updateGbpProfile();
updateFormatter();
renderSavedCopyCraftBar();

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
  const mktFeePct = Math.max(0, Number(document.getElementById('mmMktFee')?.value) || 0);
  const gstPct = Number(document.getElementById('mmGst')?.value) || 0;
  const rtoPct = Math.min(90, Math.max(0, Number(document.getElementById('mmRto')?.value) || 0));
  const revShipRaw = Number(document.getElementById('mmRevShip')?.value);
  const revShip = Number.isFinite(revShipRaw) && revShipRaw >= 0 ? revShipRaw : 75;
  const cur = document.getElementById('mmCur')?.value || '₹';
  if (!document.getElementById('mmNet')) return;

  calcVolumetricWeight(false);

  const feeAmt = sell * (feePct / 100);
  const mktFeeAmt = sell * (mktFeePct / 100);
  const gstAmt = sell - (sell / (1 + gstPct / 100));
  const rtoCostPerReturn = ship + revShip + pack;
  const rtoLossPerDelivered = rtoPct > 0 && rtoPct < 100
    ? ((rtoPct / 100) / (1 - rtoPct / 100)) * rtoCostPerReturn
    : 0;

  const opsTotal = ship + pack + feeAmt + mktFeeAmt + rtoLossPerDelivered;
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
  const mktFeeEl = document.getElementById('mmMktFeeAmt');
  if (mktFeeEl) mktFeeEl.textContent = `${cur}${mktFeeAmt.toFixed(2)}`;
  document.getElementById('mmGstAmt').textContent = `${cur}${gstAmt.toFixed(2)}`;
  const rtoEl = document.getElementById('mmRtoAmt');
  if (rtoEl) rtoEl.textContent = `${cur}${rtoLossPerDelivered.toFixed(2)}`;
  const rtoLoss100 = 100 * (rtoPct / 100) * rtoCostPerReturn;
  const net100AfterRto = 100 * net * (1 - (rtoPct / 100));
  const rtoLoss100El = document.getElementById('mmRtoLoss100');
  if (rtoLoss100El) {
    rtoLoss100El.textContent = `${cur}${Math.round(rtoLoss100).toLocaleString('en-IN')}`;
    rtoLoss100El.style.color = rtoLoss100 > 0 ? 'var(--danger)' : 'var(--brand)';
  }
  const net100El = document.getElementById('mmNet100AfterRto');
  if (net100El) {
    const sign = net100AfterRto < 0 ? '-' : '';
    net100El.textContent = `${sign}${cur}${Math.round(Math.abs(net100AfterRto)).toLocaleString('en-IN')}`;
    net100El.style.color = net100AfterRto >= 0 ? 'var(--brand)' : 'var(--danger)';
  }

  const exGstRev = sell / (1 + gstPct / 100);
  const contribBeforeAds = exGstRev - cogs - pack - ship - feeAmt - mktFeeAmt - rtoLossPerDelivered;
  const contribEl = document.getElementById('mmContribProfit');
  if (contribEl) {
    const contribPct = exGstRev > 0 ? (contribBeforeAds / exGstRev) * 100 : 0;
    contribEl.textContent = `${cur}${contribBeforeAds.toFixed(2)} (${contribPct.toFixed(1)}% Ex-GST)`;
    contribEl.style.color = contribBeforeAds >= 0 ? 'var(--brand)' : 'var(--danger)';
  }

  const prepaidShareRaw = Number(document.getElementById('mmPrepaidShare')?.value);
  const prepaidShare = Number.isFinite(prepaidShareRaw) ? Math.min(100, Math.max(0, prepaidShareRaw)) : 35;
  const prepaidDiscRaw = Number(document.getElementById('mmPrepaidDisc')?.value);
  const prepaidDisc = Number.isFinite(prepaidDiscRaw) ? Math.max(0, prepaidDiscRaw) : 75;

  const rtoFrac = Math.min(0.99, Math.max(0, rtoPct / 100));
  const codNetPerPlaced = net * (1 - rtoFrac);
  const prepaidSell = Math.max(0, sell - prepaidDisc);
  const prepaidFee = prepaidSell * (feePct / 100);
  const prepaidMktFee = prepaidSell * (mktFeePct / 100);
  const prepaidGst = prepaidSell - (prepaidSell / (1 + gstPct / 100));
  const prepaidNetPerOrder = prepaidSell - cogs - ship - pack - prepaidFee - prepaidMktFee - prepaidGst;

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

  const prepaidProfitAtZeroDisc = sell - cogs - ship - pack - feeAmt - mktFeeAmt - gstAmt;
  const maxSafePrepaidDisc = Math.max(0, prepaidProfitAtZeroDisc - codNetPerPlaced);
  const maxPrepaidDiscEl = document.getElementById('mmMaxPrepaidDisc');
  if (maxPrepaidDiscEl) {
    maxPrepaidDiscEl.textContent = `${cur}${Math.round(maxSafePrepaidDisc).toLocaleString('en-IN')}`;
    maxPrepaidDiscEl.style.color = maxSafePrepaidDisc > 0 ? 'var(--brand)' : 'var(--muted)';
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
  const targetMrpDenom = (1 / (1 + gstPct / 100)) - (feePct / 100) - (mktFeePct / 100) - 0.20;
  const targetMrp = targetMrpDenom > 0 ? fixedDeliveredCost / targetMrpDenom : 0;
  const targetMrpEl = document.getElementById('mmTargetMrp');
  if (targetMrpEl) {
    targetMrpEl.textContent = targetMrp > 0
      ? `${cur}${Math.ceil(targetMrp).toLocaleString('en-IN')}`
      : 'N/A';
    targetMrpEl.style.color = targetMrp > 0 ? 'var(--brand)' : 'var(--danger)';
  }

  const monthlyOrdersRaw = Number(document.getElementById('mmMonthlyOrders')?.value);
  const monthlyOrders = Number.isFinite(monthlyOrdersRaw) && monthlyOrdersRaw > 0 ? Math.round(monthlyOrdersRaw) : 300;
  const fixedOverheadRaw = Number(document.getElementById('mmFixedOverhead')?.value);
  const fixedOverhead = Number.isFinite(fixedOverheadRaw) && fixedOverheadRaw >= 0 ? fixedOverheadRaw : 25000;
  const targetProfitRaw = Number(document.getElementById('mmTargetProfit')?.value);
  const targetProfit = Number.isFinite(targetProfitRaw) && targetProfitRaw >= 0 ? targetProfitRaw : 150000;
  const blendedUnitProfit = (blended100 / 100) - cpa;
  const monthlyNetProfit = (blendedUnitProfit * monthlyOrders) - fixedOverhead;
  const breakEvenOrders = fixedOverhead === 0
    ? 0
    : (blendedUnitProfit > 0 ? Math.ceil(fixedOverhead / blendedUnitProfit) : null);
  const ordersForGoal = blendedUnitProfit > 0
    ? Math.ceil((fixedOverhead + targetProfit) / blendedUnitProfit)
    : null;
  const monthlyRtoBurn = monthlyOrders * ((100 - prepaidShare) / 100) * rtoFrac * rtoCostPerReturn;

  const monthlyProfitEl = document.getElementById('mmMonthlyProfit');
  if (monthlyProfitEl) {
    const sign = monthlyNetProfit < 0 ? '-' : '';
    monthlyProfitEl.textContent = `${sign}${cur}${Math.round(Math.abs(monthlyNetProfit)).toLocaleString('en-IN')}`;
    monthlyProfitEl.style.color = monthlyNetProfit >= 0 ? 'var(--brand)' : 'var(--danger)';
  }
  const breakEvenEl = document.getElementById('mmBreakEvenOrders');
  if (breakEvenEl) {
    if (breakEvenOrders === null) {
      breakEvenEl.textContent = 'Unreachable (negative unit profit)';
      breakEvenEl.style.color = 'var(--danger)';
    } else {
      breakEvenEl.textContent = `${breakEvenOrders.toLocaleString('en-IN')} orders`;
      breakEvenEl.style.color = monthlyOrders >= breakEvenOrders ? 'var(--brand)' : 'var(--danger)';
    }
  }
  const ordersGoalEl = document.getElementById('mmOrdersForGoal');
  if (ordersGoalEl) {
    if (ordersForGoal === null) {
      ordersGoalEl.textContent = 'N/A';
      ordersGoalEl.style.color = 'var(--danger)';
    } else {
      ordersGoalEl.textContent = `${ordersForGoal.toLocaleString('en-IN')} orders (${Math.ceil(ordersForGoal / 30).toLocaleString('en-IN')}/day)`;
      ordersGoalEl.style.color = monthlyOrders >= ordersForGoal ? 'var(--brand)' : 'var(--ink-secondary, #475569)';
    }
  }
  const monthlyRtoEl = document.getElementById('mmMonthlyRtoBurn');
  if (monthlyRtoEl) {
    monthlyRtoEl.textContent = `${cur}${Math.round(monthlyRtoBurn).toLocaleString('en-IN')}`;
    monthlyRtoEl.style.color = monthlyRtoBurn > 0 ? 'var(--danger)' : 'var(--brand)';
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
  const rtoPct = Math.min(90, Math.max(0, Number(document.getElementById('mmRto')?.value) || 0));
  const revShipRaw = Number(document.getElementById('mmRevShip')?.value);
  const revShip = Number.isFinite(revShipRaw) && revShipRaw >= 0 ? revShipRaw : 75;
  const cur = document.getElementById('mmCur')?.value || '₹';

  const exGstRev = sell / (1 + gstPct / 100);
  const gstAmt = sell - exGstRev;
  const feeAmt = sell * (feePct / 100);
  const rtoDrag = rtoPct > 0 && rtoPct < 100
    ? ((rtoPct / 100) / (1 - rtoPct / 100)) * (ship + revShip + pack)
    : 0;
  const net = sell - (cogs + ship + pack + feeAmt + rtoDrag + gstAmt);
  const contribBeforeAds = exGstRev - cogs - pack - ship - feeAmt - rtoDrag;
  const contribPct = exGstRev > 0 ? (contribBeforeAds / exGstRev) * 100 : 0;
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
  const prepaidProfitAtZeroDisc = sell - cogs - ship - pack - feeAmt - gstAmt;
  const maxSafePrepaidDisc = Math.max(0, prepaidProfitAtZeroDisc - (net * (1 - rtoFrac)));

  const lines = [
    'MarginMint Unit Economics Breakdown',
    `Selling Price: ${cur}${sell.toFixed(2)}`,
    `Ex-GST Revenue (${gstPct}% GST): ${cur}${exGstRev.toFixed(2)}`,
    `COGS: ${cur}${cogs.toFixed(2)}`,
    `Shipping: ${cur}${ship.toFixed(2)}`,
    `COD RTO Drag (${rtoPct}% RTO): ${cur}${rtoDrag.toFixed(2)}`,
    `CM2 Contribution Before Ads: ${cur}${contribBeforeAds.toFixed(2)} (${contribPct.toFixed(1)}% Ex-GST)`,
    `Net Profit/Unit: ${cur}${net.toFixed(2)} (${marginPct.toFixed(1)}%)`,
    `Break-Even ROAS: ${roasText}`,
    `Max Safe Ad CPA (15% Net Margin): ${cur}${maxSafeCpa.toFixed(2)}`,
    `Suggested MRP (20% Net Margin): ${targetMrpText}`,
    `100-Order Blended Profit: ${blendedText}`,
    `Max Safe UPI Discount (Beats COD): ${cur}${Math.round(maxSafePrepaidDisc).toLocaleString('en-IN')}`,
    `Fixed Monthly Overhead: ${cur}${(Number(document.getElementById('mmFixedOverhead')?.value) || 0).toLocaleString('en-IN')}`,
    `Projected Monthly Net Profit (${document.getElementById('mmMonthlyOrders')?.value || 300} orders, after overhead): ${document.getElementById('mmMonthlyProfit')?.textContent || `${cur}0`}`,
    `Break-Even Orders / Month: ${document.getElementById('mmBreakEvenOrders')?.textContent || '0 orders'}`,
    `Target Monthly Profit: ${cur}${(Number(document.getElementById('mmTargetProfit')?.value) || 0).toLocaleString('en-IN')}`,
    `Orders Needed for Goal: ${document.getElementById('mmOrdersForGoal')?.textContent || 'N/A'}`,
    `Monthly RTO Cash Burn: ${document.getElementById('mmMonthlyRtoBurn')?.textContent || `${cur}0`}`
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

function copySerpJsonLd(btn) {
  const titleText = (document.getElementById('serpTitleInput')?.value || '').trim() || 'Your Brand — Official Store & Custom Orders';
  const descRaw = (document.getElementById('fmtInput')?.value || '').replace(/\s+/g, ' ').trim();
  const descText = descRaw || 'Shop quality products with fast pan-India dispatch and UPI support.';
  const urlText = (document.getElementById('serpUrlInput')?.value || '').trim() || 'https://kitedesk.in/shop/festive-jootis';
  const schemaTypeRaw = (document.getElementById('schemaTypeSelect')?.value || 'WebPage').trim();
  const allowedTypes = ['WebPage', 'Product', 'LocalBusiness'];
  const schemaType = allowedTypes.includes(schemaTypeRaw) ? schemaTypeRaw : 'WebPage';
  const labelBrand = (document.getElementById('ccSaveLabel')?.value || '').trim();
  let hostBrand = '';
  try {
    hostBrand = new URL(urlText).hostname.replace(/^www\./i, '');
  } catch (_) {
    hostBrand = '';
  }
  const brandName = labelBrand || (titleText.includes('|') ? titleText.split('|')[0].trim() : '') || hostBrand || 'KiteDesk Seller';

  const schemaObj = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: titleText,
    description: descText,
    url: urlText
  };

  if (schemaType === 'Product') {
    schemaObj.brand = { '@type': 'Brand', name: brandName };
  } else if (schemaType === 'LocalBusiness') {
    const cityVal = (document.getElementById('gbpCityInput')?.value || '').trim();
    const serviceVal = (document.getElementById('gbpServiceInput')?.value || '').trim();
    schemaObj.address = cityVal
      ? { '@type': 'PostalAddress', addressLocality: cityVal, addressCountry: 'IN' }
      : { '@type': 'PostalAddress', addressCountry: 'IN' };
    if (serviceVal) schemaObj.makesOffer = serviceVal;
  } else {
    schemaObj.publisher = { '@type': 'Organization', name: brandName };
  }

  const safeJson = JSON.stringify(schemaObj, null, 2).replace(/</g, '\\u003c');
  const scriptBlock = `<script type="application/ld+json">\n${safeJson}\n<\/script>`;
  copyWithFallback(scriptBlock, btn);
  if (btn) {
    if (!btn.dataset.origLabel) btn.dataset.origLabel = btn.textContent;
    btn.textContent = 'Copied JSON-LD ✓';
    clearTimeout(btn._copyTimer);
    btn._copyTimer = setTimeout(() => { btn.textContent = btn.dataset.origLabel; }, 1600);
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

function copyWaFloatingWidget(btn) {
  const outEl = document.getElementById('waOutput');
  const url = outEl && outEl.value ? outEl.value.trim() : '';
  if (!url) return;
  const widgetHtml = `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" style="position:fixed;right:18px;bottom:18px;z-index:9999;display:inline-flex;align-items:center;gap:8px;background:#059669;color:#ffffff;padding:12px 18px;border-radius:999px;font-family:system-ui,-apple-system,sans-serif;font-size:14px;font-weight:700;text-decoration:none;box-shadow:0 8px 24px rgba(5,150,105,0.32);">Chat on WhatsApp</a>`;
  copyWithFallback(widgetHtml, btn);
}

function copyWaInvite(btn) {
  const outEl = document.getElementById('waOutput');
  const url = outEl && outEl.value ? outEl.value.trim() : '';
  if (!url) return;
  copyWithFallback(`Tap to chat or order on WhatsApp: ${url}`, btn);
}

function handleContact(e) {
  e.preventDefault();
  const st = document.getElementById('contactStatus');
  if (st) st.textContent = 'Message recorded locally. Connect Netlify Forms or Formspree to route to your email.';
}


/* === CashPulse — Indian D2C Cashflow, COD Remittance Lag & 90-Day Runway === */
const CP_SAVED_KEY = 'kitedesk_cashpulse_snapshots_v1';
const CP_FIELD_IDS = [
  'cpOpeningBank', 'cpMonthlyRev', 'cpCodShare', 'cpCodLag',
  'cpAdSpend', 'cpCogsPack', 'cpFixedOverheads', 'cpGstOutflow'
];

function cpNum(id) {
  const el = document.getElementById(id);
  if (!el) return 0;
  const v = parseFloat(el.value);
  return Number.isFinite(v) && v >= 0 ? v : 0;
}

function cpFmtInr(val) {
  const n = Number.isFinite(val) ? val : 0;
  const sign = n < 0 ? '-' : '';
  return sign + '₹' + Math.round(Math.abs(n)).toLocaleString('en-IN');
}

function computeCashPulseMetrics() {
  const openingBank = cpNum('cpOpeningBank');
  const monthlyRev = cpNum('cpMonthlyRev');
  const codShare = Math.min(100, cpNum('cpCodShare'));
  const codLag = Math.min(45, cpNum('cpCodLag'));
  const adSpend = cpNum('cpAdSpend');
  const cogsPack = cpNum('cpCogsPack');
  const fixedOverheads = cpNum('cpFixedOverheads');
  const gstOutflow = cpNum('cpGstOutflow');

  const dailyRev = monthlyRev / 30;
  const dailyCodSales = dailyRev * (codShare / 100);
  const monthlyOutflow = adSpend + cogsPack + fixedOverheads + gstOutflow;
  const dailyOutflow = monthlyOutflow / 30;
  const dailyNet = dailyRev - dailyOutflow;

  const codTrapped = dailyCodSales * codLag;
  const balance30 = openingBank + (dailyNet * 30) - codTrapped;
  const balance60 = openingBank + (dailyNet * 60) - codTrapped;
  const balance90 = openingBank + (dailyNet * 90) - codTrapped;
  const bufferAfterFloat = openingBank - codTrapped;

  const shiftPts = Math.min(codShare, 15);
  const prepaidUnlock = dailyRev * (shiftPts / 100) * codLag;
  const safeBuffer15d = (dailyOutflow * 15) + codTrapped;
  const safeBufferGap = openingBank - safeBuffer15d;
  const belowSafeBuffer = openingBank < safeBuffer15d;

  let runwayStatus = 'Cashflow Positive';
  if (dailyNet < 0) {
    const absBurn = Math.abs(dailyNet);
    const runwayDays = absBurn > 0 ? Math.max(0, Math.floor(Math.max(0, bufferAfterFloat) / absBurn)) : 0;
    if (runwayDays <= 30) {
      runwayStatus = 'Critical (' + runwayDays + 'd)';
    } else if (runwayDays <= 90) {
      runwayStatus = 'Watch (' + runwayDays + 'd)';
    } else {
      runwayStatus = runwayDays + ' Days Runway';
    }
  } else if (bufferAfterFloat < 0) {
    runwayStatus = 'COD Float Crunch';
  } else if (balance90 < openingBank * 0.5) {
    runwayStatus = 'Thin Buffer';
  }

  return {
    openingBank, monthlyRev, codShare, codLag,
    adSpend, cogsPack, fixedOverheads, gstOutflow,
    dailyRev, dailyCodSales, monthlyOutflow, dailyOutflow, dailyNet,
    codTrapped, balance30, balance60, balance90, bufferAfterFloat,
    prepaidUnlock, safeBuffer15d, safeBufferGap, belowSafeBuffer, runwayStatus
  };
}

function calcCashPulse() {
  if (!document.getElementById('cpOpeningBank')) return;
  const m = computeCashPulseMetrics();

  const dailyEl = document.getElementById('cpDailyNet');
  if (dailyEl) {
    dailyEl.textContent = (m.dailyNet >= 0 ? '+' : '') + cpFmtInr(m.dailyNet) + '/day';
    dailyEl.style.color = m.dailyNet >= 0 ? 'var(--success, #059669)' : 'var(--danger, #dc2626)';
  }
  const trappedEl = document.getElementById('cpCodTrapped');
  if (trappedEl) trappedEl.textContent = cpFmtInr(m.codTrapped);

  const bal90El = document.getElementById('cpBalance90');
  if (bal90El) {
    bal90El.textContent = cpFmtInr(m.balance90);
    bal90El.style.color = m.balance90 >= 0 ? 'var(--ink, #0f172a)' : 'var(--danger, #dc2626)';
  }

  const statusEl = document.getElementById('cpRunwayStatus');
  if (statusEl) {
    statusEl.textContent = m.runwayStatus;
    statusEl.style.color = m.runwayStatus.indexOf('Critical') === 0 || m.runwayStatus.indexOf('Crunch') !== -1
      ? 'var(--danger, #dc2626)'
      : (m.runwayStatus === 'Cashflow Positive' ? 'var(--success, #059669)' : 'var(--brand, #0369a1)');
  }

  const unlockEl = document.getElementById('cpPrepaidUnlock');
  if (unlockEl) unlockEl.textContent = cpFmtInr(m.prepaidUnlock);

  const b30El = document.getElementById('cpBalance30');
  if (b30El) b30El.textContent = cpFmtInr(m.balance30);
  const b60El = document.getElementById('cpBalance60');
  if (b60El) b60El.textContent = cpFmtInr(m.balance60);
  const outEl = document.getElementById('cpMonthlyOutflow');
  if (outEl) outEl.textContent = cpFmtInr(m.monthlyOutflow);
  const bufEl = document.getElementById('cpBufferAfterFloat');
  if (bufEl) {
    bufEl.textContent = cpFmtInr(m.bufferAfterFloat);
    bufEl.style.color = m.bufferAfterFloat >= 0 ? 'var(--ink, #0f172a)' : 'var(--danger, #dc2626)';
  }
  const safeBufEl = document.getElementById('cpSafeBuffer15d');
  if (safeBufEl) safeBufEl.textContent = cpFmtInr(m.safeBuffer15d);
  const safeStatusEl = document.getElementById('cpSafeBufferStatus');
  if (safeStatusEl) {
    if (m.belowSafeBuffer) {
      safeStatusEl.textContent = 'Below Safe Buffer (-' + cpFmtInr(Math.abs(m.safeBufferGap)) + ')';
      safeStatusEl.style.color = 'var(--danger, #dc2626)';
    } else {
      safeStatusEl.textContent = 'Safe (+' + cpFmtInr(m.safeBufferGap) + ' cushion)';
      safeStatusEl.style.color = 'var(--success, #059669)';
    }
  }

  const base = Math.max(m.monthlyRev, m.monthlyOutflow, 1);
  const cogsPct = Math.min(100, (m.cogsPack / base) * 100);
  const adsPct = Math.min(100 - cogsPct, (m.adSpend / base) * 100);
  const fixedGstPct = Math.min(100 - cogsPct - adsPct, ((m.fixedOverheads + m.gstOutflow) / base) * 100);
  const netPct = Math.max(0, 100 - cogsPct - adsPct - fixedGstPct);

  const bCogs = document.getElementById('cpBarCogs');
  const bAds = document.getElementById('cpBarAds');
  const bFix = document.getElementById('cpBarFixedGst');
  const bNet = document.getElementById('cpBarNet');
  if (bCogs) bCogs.style.width = cogsPct.toFixed(1) + '%';
  if (bAds) bAds.style.width = adsPct.toFixed(1) + '%';
  if (bFix) bFix.style.width = fixedGstPct.toFixed(1) + '%';
  if (bNet) bNet.style.width = netPct.toFixed(1) + '%';

  const noteEl = document.getElementById('cpActionNote');
  if (noteEl) {
    if (m.bufferAfterFloat < 0) {
      noteEl.textContent = 'Alert: COD transit float exceeds your opening bank balance. Shift 15% of COD orders to UPI to unlock ' + cpFmtInr(m.prepaidUnlock) + ' immediately.';
    } else if (m.dailyNet < 0) {
      noteEl.textContent = 'Burning ' + cpFmtInr(Math.abs(m.dailyNet)) + '/day. Trim ad spend or raise prepaid share to extend runway.';
    } else {
      noteEl.textContent = 'Healthy surplus: shifting 15% of COD to UPI frees ' + cpFmtInr(m.prepaidUnlock) + ' in working capital.';
    }
  }
}

function shiftCashPulseUpi(deltaPct) {
  const codEl = document.getElementById('cpCodShare');
  if (!codEl) return null;
  const before = computeCashPulseMetrics();
  const shift = Number.isFinite(Number(deltaPct)) ? Math.max(0, Number(deltaPct)) : 20;
  const nextCod = Math.max(0, Math.round((before.codShare - shift) * 10) / 10);
  codEl.value = String(nextCod);
  calcCashPulse();
  const after = computeCashPulseMetrics();
  const actualShift = Math.max(0, Math.round((before.codShare - after.codShare) * 10) / 10);
  const floatUnlocked = Math.max(0, before.codTrapped - after.codTrapped);
  const noteEl = document.getElementById('cpActionNote');
  if (noteEl) {
    noteEl.textContent = 'Simulated +' + actualShift + '% UPI shift (COD ' + before.codShare + '% -> ' + after.codShare + '%): unlocked '
      + cpFmtInr(floatUnlocked) + ' in COD float; 90-day bank balance is now ' + cpFmtInr(after.balance90) + ' (' + after.runwayStatus + ').';
  }
  return { before, after, actualShift, floatUnlocked };
}

function getSavedCashPulseSnapshots() {
  try {
    const raw = localStorage.getItem(CP_SAVED_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.slice(0, 6);
    }
  } catch (e) {}
  return [];
}

function renderSavedCashPulseBar() {
  const container = document.getElementById('cpSavedList');
  if (!container) return;
  const list = getSavedCashPulseSnapshots();
  if (!list.length) {
    container.innerHTML = '<span class="muted" style="font-size:0.76rem;">No saved snapshots yet. Click "+ Save Snapshot" to store up to 6 cashflow scenarios locally.</span>';
    return;
  }
  container.innerHTML = list.map((item, idx) => {
    const label = escapeHtml(item.label || ('Snapshot #' + (idx + 1)));
    const bal = escapeHtml(item.bal90 || '');
    return '<span class="bf-saved-chip" onclick="loadSavedCashPulseSnapshot(' + idx + ')" title="Load snapshot">'
      + '<span>' + label + (bal ? ' (' + bal + ')' : '') + '</span>'
      + '<button type="button" class="bf-chip-del" aria-label="Delete snapshot" onclick="deleteSavedCashPulseSnapshot(' + idx + ', event)">&times;</button>'
      + '</span>';
  }).join('');
}

function saveCashPulseSnapshot() {
  const labelEl = document.getElementById('cpSaveLabel');
  const m = computeCashPulseMetrics();
  const defaultLabel = 'Rev ' + cpFmtInr(m.monthlyRev) + ' (' + m.codShare + '% COD)';
  const label = (labelEl && labelEl.value.trim()) ? labelEl.value.trim().slice(0, 32) : defaultLabel;

  const data = {};
  CP_FIELD_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (el) data[id] = el.value;
  });

  const list = getSavedCashPulseSnapshots();
  list.unshift({ label, bal90: cpFmtInr(m.balance90), savedAt: new Date().toISOString(), data });
  try {
    localStorage.setItem(CP_SAVED_KEY, JSON.stringify(list.slice(0, 6)));
  } catch (e) {}
  if (labelEl) labelEl.value = '';
  renderSavedCashPulseBar();
}

function loadSavedCashPulseSnapshot(idx) {
  const list = getSavedCashPulseSnapshots();
  const item = list[idx];
  if (!item || !item.data) return;
  CP_FIELD_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (el && item.data[id] !== undefined) el.value = item.data[id];
  });
  calcCashPulse();
}

function deleteSavedCashPulseSnapshot(idx, ev) {
  if (ev && ev.stopPropagation) ev.stopPropagation();
  const list = getSavedCashPulseSnapshots();
  list.splice(idx, 1);
  try {
    localStorage.setItem(CP_SAVED_KEY, JSON.stringify(list));
  } catch (e) {}
  renderSavedCashPulseBar();
}

function exportCashPulseCsv() {
  const m = computeCashPulseMetrics();
  const headers = ['Day', 'Opening_Balance_INR', 'Prepaid_Inflow_INR', 'COD_Settled_INR', 'Daily_Outflow_INR', 'Closing_Balance_INR', 'COD_Trapped_Float_INR'];
  const rows = [headers.map(escapeCsvCell).join(',')];

  const dailyPrepaid = m.dailyRev * (1 - m.codShare / 100);
  let bal = m.openingBank;
  for (let day = 1; day <= 90; day++) {
    const codSettled = day > m.codLag ? m.dailyCodSales : 0;
    const closing = bal + dailyPrepaid + codSettled - m.dailyOutflow;
    rows.push([
      day,
      bal.toFixed(2),
      dailyPrepaid.toFixed(2),
      codSettled.toFixed(2),
      m.dailyOutflow.toFixed(2),
      closing.toFixed(2),
      m.codTrapped.toFixed(2)
    ].map(escapeCsvCell).join(','));
    bal = closing;
  }

  const csvContent = '\uFEFF' + rows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'kitedesk-cashpulse-90day-cashflow.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function copyCashPulseSummary(btn) {
  const m = computeCashPulseMetrics();
  const summary = [
    'CashPulse 90-Day Cashflow Summary (KiteDesk Studio)',
    'Opening Bank Balance: ' + cpFmtInr(m.openingBank),
    'Monthly Revenue: ' + cpFmtInr(m.monthlyRev) + ' (' + m.codShare + '% COD @ T+' + m.codLag + 'd lag)',
    'Monthly Outflow: ' + cpFmtInr(m.monthlyOutflow),
    'Daily Cash Surplus/Burn: ' + (m.dailyNet >= 0 ? '+' : '') + cpFmtInr(m.dailyNet) + '/day',
    'Cash Trapped in COD Transit: ' + cpFmtInr(m.codTrapped),
    '90-Day Projected Balance: ' + cpFmtInr(m.balance90) + ' (' + m.runwayStatus + ')',
    'Prepaid-Switch Unlock (15% COD -> UPI): ' + cpFmtInr(m.prepaidUnlock)
  ].join('\n');
  copyWithFallback(summary, btn);
}
