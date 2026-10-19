/* ---- Edit contact links here ---- */
const VM = {
  phone: "9207666712",
  email: "vandmarkconcepts@gmail.com",        // e.g. "hello@yourdomain.com"
  website: "vandmark.com",      // e.g. "https://yourdomain.com"
  instagram: "https://www.instagram.com/vandmark_communications?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==",
  facebook: "https://www.facebook.com/vandmarkcommunicationsllp/",
  linkedin: "https://www.linkedin.com/company/vandmark/home/",
  youtube: "https://www.youtube.com/@vandmarkcommunications"
};
const EVENTS = [
  { name: "Plus Three", caption: "Event media & coverage", video: "Video-44962.mp4", tone: "a", glyph: "T" },
  { name: "Eyecon", caption: "Event media & coverage", video: "Video-17634.mp4", tone: "b", glyph: "E" },
    { name: "Tukuja", caption: "Event media & coverage", video: "Video-40555.mp4", tone: "b", glyph: "E" },

  { name: "Your Moments Could Be Next.", caption: "Conferences, fests & corporate events", tone: "c", glyph: "+" }
];

function resolveVideoPath(video) {
  if (typeof video !== "string") return "";
  const value = video.trim();
  if (!value) return "";
  if (/^(https?:)?\/\//i.test(value) || value.startsWith("data:")) return value;
  return value;
}

/* ---------- characters (original SVG) ---------- */
let uid = 0;
const C = { o: "#FF7A00", y: "#FFEC00", c: "#21ECE6", k: "#0F0E0D", p: "#FFF7EC", g: "#292724", pk: "#FF6FA5" };
function mascot() {
  const id = "m" + (uid++);
  return `<svg class="mascot" viewBox="0 0 240 262" width="100%">
  <defs><clipPath id="${id}"><circle cx="120" cy="126" r="27"/></clipPath></defs>
  <ellipse class="m-shadow" cx="120" cy="252" rx="66" ry="8" fill="rgba(15,14,13,.3)"/>
  <g class="m-leg-l"><path d="M96 190 L90 238" stroke="${C.k}" stroke-width="7" stroke-linecap="round"/><ellipse cx="84" cy="242" rx="17" ry="9" fill="${C.k}"/></g>
  <g class="m-leg-r"><path d="M144 190 L150 238" stroke="${C.k}" stroke-width="7" stroke-linecap="round"/><ellipse cx="156" cy="242" rx="17" ry="9" fill="${C.k}"/></g>
  <g class="m-body">
    <path d="M34 150 Q 12 168 16 188" stroke="${C.k}" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="16" cy="190" r="10" fill="${C.p}" stroke="${C.k}" stroke-width="4"/>
    <g class="m-wave"><path d="M206 128 Q 228 104 226 78" stroke="${C.k}" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="226" cy="74" r="11" fill="${C.p}" stroke="${C.k}" stroke-width="4"/></g>
    <rect x="66" y="36" width="64" height="34" rx="9" fill="${C.k}"/>
    <rect x="84" y="26" width="26" height="14" rx="5" fill="${C.c}" stroke="${C.k}" stroke-width="3"/>
    <rect class="m-bulb" x="150" y="40" width="36" height="22" rx="6" fill="${C.y}" stroke="${C.k}" stroke-width="4"/>
    <g class="m-burst"><path d="M168 46 l6-26 4 24 22-12-16 20 26 2-26 8" fill="${C.p}" stroke="${C.k}" stroke-width="2" stroke-linejoin="round"/></g>
    <rect x="30" y="60" width="180" height="132" rx="30" fill="${C.o}" stroke="${C.k}" stroke-width="5"/>
    <rect x="33" y="108" width="174" height="34" fill="${C.k}" opacity=".88"/>
    <circle cx="120" cy="126" r="50" fill="${C.k}"/>
    <circle cx="120" cy="126" r="42" fill="${C.g}" stroke="${C.c}" stroke-width="5"/>
    <circle cx="120" cy="126" r="28" fill="${C.p}"/>
    <g clip-path="url(#${id})">
      <g class="m-pupil"><circle cx="120" cy="126" r="14" fill="${C.k}"/><circle cx="125" cy="120" r="4.5" fill="#fff"/></g>
      <rect class="m-lid" x="88" y="95" width="64" height="62" fill="${C.g}"/>
    </g>
    <circle cx="64" cy="166" r="9" fill="${C.pk}" opacity=".75"/><circle cx="176" cy="166" r="9" fill="${C.pk}" opacity=".75"/>
    <path d="M106 174 Q 120 186 134 174" stroke="${C.k}" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <text x="50" y="94" style="font:400 18px Anton, Impact, sans-serif" fill="${C.k}">V</text>
  </g></svg>`;
}
const clapper = () => `<svg class="clap" viewBox="0 0 160 150" width="100%"><g class="c-all">
  <rect x="18" y="58" width="128" height="82" rx="10" fill="${C.k}"/>
  <g class="c-top"><rect x="18" y="38" width="128" height="22" rx="4" fill="${C.p}" stroke="${C.k}" stroke-width="4"/>
  <path d="M32 40l14 18M60 40l14 18M88 40l14 18M116 40l14 18" stroke="${C.k}" stroke-width="7"/></g>
  <rect x="18" y="58" width="128" height="10" fill="${C.p}" stroke="${C.k}" stroke-width="3"/>
  <path d="M32 58l12 10M60 58l12 10M88 58l12 10M116 58l12 10" stroke="${C.k}" stroke-width="5"/>
  <circle cx="62" cy="96" r="13" fill="#fff"/><circle cx="102" cy="96" r="13" fill="#fff"/>
  <g class="c-pupil"><circle cx="64" cy="98" r="6" fill="${C.k}"/><circle cx="104" cy="98" r="6" fill="${C.k}"/></g>
  <path d="M72 120 Q 82 128 92 120" stroke="${C.y}" stroke-width="4" fill="none" stroke-linecap="round"/>
  <text x="26" y="134" style="font:600 8px 'IBM Plex Mono', monospace;letter-spacing:1px" fill="${C.y}">TAKE 01</text>
  </g></svg>`;
const roll = () => `<svg class="roll" viewBox="0 0 150 130" width="100%">
  <g class="r-tail"><path d="M96 62 h40 v34 h-40z" fill="${C.k}"/><path d="M100 66h6v4h-6zM112 66h6v4h-6zM124 66h6v4h-6zM100 88h6v4h-6zM112 88h6v4h-6zM124 88h6v4h-6z" fill="${C.p}"/><rect x="100" y="73" width="30" height="12" fill="${C.c}"/></g>
  <circle cx="60" cy="60" r="50" fill="${C.y}" stroke="${C.k}" stroke-width="5"/>
  <g class="r-spin"><circle cx="60" cy="60" r="34" fill="${C.k}"/><circle cx="60" cy="60" r="10" fill="${C.y}"/>
  ${[0, 60, 120, 180, 240, 300].map(a => `<circle cx="${60 + Math.cos(a * Math.PI / 180) * 22}" cy="${60 + Math.sin(a * Math.PI / 180) * 22}" r="6" fill="${C.o}"/>`).join("")}</g>
  </svg>`;
const drone = () => `<svg class="drone" viewBox="0 0 200 110" width="100%">
  <path d="M40 40 L80 56 M160 40 L120 56" stroke="${C.k}" stroke-width="7" stroke-linecap="round"/>
  <rect x="34" y="30" width="12" height="12" rx="3" fill="${C.k}"/><rect x="154" y="30" width="12" height="12" rx="3" fill="${C.k}"/>
  <ellipse class="prop" cx="40" cy="26" rx="30" ry="5" fill="rgba(15,14,13,.55)"/><ellipse class="prop" cx="160" cy="26" rx="30" ry="5" fill="rgba(15,14,13,.55)"/>
  <rect x="70" y="48" width="60" height="30" rx="12" fill="${C.p}" stroke="${C.k}" stroke-width="4"/>
  <circle cx="100" cy="86" r="11" fill="${C.k}"/><circle cx="100" cy="86" r="5" fill="${C.c}"/>
  <circle class="d-led" cx="118" cy="58" r="3.5" fill="#FF2A1A"/>
  </svg>`;
const pola = () => `<svg class="pola-s" viewBox="0 0 130 150" width="100%">
  <g transform="rotate(-10 65 75)"><rect x="14" y="14" width="100" height="120" rx="4" fill="${C.p}" stroke="${C.k}" stroke-width="4"/>
  <rect x="24" y="24" width="80" height="78" fill="${C.c}" stroke="${C.k}" stroke-width="3"/>
  <circle class="sun" cx="82" cy="48" r="11" fill="${C.y}" stroke="${C.k}" stroke-width="3"/>
  <path d="M24 102 L52 64 L70 86 L82 74 L104 102z" fill="${C.o}" stroke      ="${C.k}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M36 120 h40" stroke="${C.k}" stroke-width="4" stroke-linecap="round"/></g></svg>`;
const put = (cls, fn) => document.querySelectorAll("." + cls).forEach(el => el.innerHTML = fn());
put("mascot-slot", mascot); put("clap-slot", clapper); put("roll-slot", roll); put("drone-slot", drone); put("pola-slot", pola);

/* ---------- links ---------- */
const wa = (t) => "https://wa.me/91" + VM.phone + "?text=" + encodeURIComponent(t);
const links = {
  call: "tel:+91" + VM.phone,
  whatsapp: wa("Hi Vandmark! I attended your photography workshop and would like to know more."),
  project: wa("Hi Vandmark! I'd like to start a project with you."),
  email: VM.email ? "mailto:" + VM.email : "",
  website: VM.website, instagram: VM.instagram, facebook: VM.facebook, linkedin: VM.linkedin, youtube: VM.youtube
};
if (VM.email) document.getElementById("qk-email").textContent = VM.email;
const toast = (m) => { const t = document.getElementById("toast"); t.textContent = m; t.classList.add("show"); clearTimeout(toast.h); toast.h = setTimeout(() => t.classList.remove("show"), 2200); };
document.querySelectorAll("[data-link]").forEach(a => {
  const href = links[a.dataset.link];
  if (href) { a.href = href; if (href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; } }
  else { a.href = "#"; a.addEventListener("click", e => { e.preventDefault(); toast("Link coming soon"); }); }
});
document.getElementById("copy").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(VM.phone); toast("Number copied"); }
  catch (e) { const r = document.createRange(); r.selectNodeContents(document.getElementById("num")); const s = getSelection(); s.removeAllRanges(); s.addRange(r); toast("Number selected, copy it"); }
});

/* ---------- marquees ---------- */
const fill = (id, list) => { const h = list.map(s => `<span>${s}</span>`).join(""); document.getElementById(id).innerHTML = h + h; };
fill("t1", ["Graphic Design", "Video Editing", "Poster Design", "Web Development", "App Development",]);
fill("t2", ["Photography", "Videography", "Branding", "Event Coverage", "Social Media", "Motion"]);

/* ---------- services: 3D coverflow slider ---------- */
(() => {
  const ic = {
    design: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/>',
    cam: '<path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
    edit: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M10 8l5 2-5 2z"/>',
    poster: '<rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="9" r="3"/><path d="M8 17h8"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    event: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    magnet: '<path d="M6 3v8a6 6 0 0 0 12 0V3h-4v8a2 2 0 0 1-4 0V3z"/>',
    live: '<circle cx="12" cy="12" r="2"/><path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4M19 5a10 10 0 0 1 0 14M5 19A10 10 0 0 1 5 5"/>',
    blog: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    brand: '<path d="M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5L7 14.5l-5-5 7-1z"/>',
    seo: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.4-4.4M8 13l2-3 2 2 2-3"/>',
    digi: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    film: '<rect x="2" y="2" width="20" height="20" rx="2.5"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 7h5M17 17h5"/>',
    photo: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>'
  };
  /* [title, icon, big background word] */
  const data = [
    ["Graphic Design", "design", "DESIGN"], ["Videography", "cam", "CINEMA"], ["Video Editing", "edit", "EDIT"],
    ["Poster Design", "poster", "POSTER"], ["Web & App Development", "code", "CODE"], ["Vertical Branding", "layers", "VERTICAL"],
    ["Events", "event", "EVENTS"], ["Influence & Attraction Marketing", "magnet", "INFLUENCE"], ["Live Broadcast Solutions", "live", "LIVE"],
    ["Content Creation & Blogging", "blog", "CONTENT"], ["Branding", "brand", "BRAND"], ["SEO Optimization", "seo", "SEO"],
    ["Digital Marketing", "digi", "DIGITAL"], ["Creative Video Production", "film", "PRODUCTION"], ["Product Photography", "photo", "PRODUCT"]
  ];

  const $ = id => document.getElementById(id);
  const stageEl = $("svStage"), word = $("svWord"), cur = $("svCur"), bar = $("svBar");
  if (!stageEl) return;
  const N = data.length;
  $("svTot").textContent = N;

  stageEl.innerHTML = data.map((d, i) => `
    <article class="sv-card" data-i="${i}">
      <div class="sv-art"></div>
      <div class="sv-in">
        <div class="sv-top mono"><b>${String(i + 1).padStart(2, "0")}</b><span>VANDMARK</span></div>
        <div class="sv-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${ic[d[1]]}</svg></div>
        <div><h3>${d[0]}</h3><div class="sv-go" aria-hidden="true">→</div></div>
      </div>
    </article>`).join("");
  const cards = [...stageEl.children];
  let active = 0, wordT;

  function render() {
    const w = innerWidth < 720 ? 170 : 250;
    cards.forEach((c, i) => {
      let o = i - active;
      if (o > N / 2) o -= N;
      if (o < -N / 2) o += N;
      const a = Math.abs(o);
      c.style.transform = `translateX(${o * w}px) translateZ(${-a * 140}px) rotateY(${o * -18}deg) scale(${a ? .88 : 1})`;
      c.style.opacity = a > 3 ? 0 : 1 - a * .22;
      c.style.filter = a ? `brightness(${1 - a * .2})` : "none";
      c.style.zIndex = 100 - a;
      c.style.pointerEvents = a > 3 ? "none" : "auto";
      c.classList.toggle("on", o === 0);
    });
    word.style.opacity = 0;
    clearTimeout(wordT);
    wordT = setTimeout(() => { word.textContent = data[active][2]; word.style.opacity = 1; }, 250);
    cur.textContent = String(active + 1).padStart(2, "0");
    t0 = performance.now(); prog = 0;
  }
  const go = d => { active = (active + d + N) % N; render(); };

  $("svNext").addEventListener("click", () => go(1));
  $("svPrev").addEventListener("click", () => go(-1));
  cards.forEach(c => c.addEventListener("click", () => {
    if (moved) return;
    const i = +c.dataset.i;
    if (i !== active) { active = i; render(); }
  }));

  /* swipe / drag */
  let sx = 0, down = false, moved = false;
  stageEl.addEventListener("pointerdown", e => { down = true; moved = false; sx = e.clientX; });
  const end = e => {
    if (!down) return; down = false;
    const dx = e.clientX - sx;
    if (Math.abs(dx) > 50) { moved = true; go(dx < 0 ? 1 : -1); }
    setTimeout(() => moved = false, 50);
  };
  addEventListener("pointerup", end);
  addEventListener("pointercancel", () => down = false);

  /* autoplay with progress bar; runs only while on screen, pauses on hover */
  const DUR = 3500;
  let t0 = performance.now(), hover = false, visible = false, prog = 0;
  stageEl.addEventListener("mouseenter", () => hover = true);
  stageEl.addEventListener("mouseleave", () => hover = false);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(es => es.forEach(e => visible = e.isIntersecting), { threshold: .3 }).observe(stageEl);
  } else visible = true;
  addEventListener("keydown", e => {
    if (!visible) return;
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  });
  function loop(now) {
    if (hover || !visible) t0 = now - prog * DUR;
    else {
      prog = Math.min((now - t0) / DUR, 1);
      bar.style.width = prog * 100 + "%";
      if (prog >= 1) { prog = 0; go(1); }
    }
    requestAnimationFrame(loop);
  }
  addEventListener("resize", render);
  render();
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) requestAnimationFrame(loop);
})();

/* ---------- film reel ---------- */
const copies = Math.max(2, Math.ceil(8 / EVENTS.length));
let fh = ""; for (let r = 0; r < copies; r++) EVENTS.forEach((ev, i) => {
  const videoSrc = resolveVideoPath(ev.video);
  const hasVideo = Boolean(videoSrc);
  const v = hasVideo ? `<video src="${videoSrc}" muted loop playsinline autoplay preload="auto"></video>` : `<span class="play" aria-hidden="true"></span>`;
  fh += `<article class="fr ${ev.tone}${hasVideo ? " has-v" : ""}" ${r ? 'aria-hidden="true"' : ''}>${v}<div class="code"><span class="live">${hasVideo ? "REC" : "▶ " + (12 + r * EVENTS.length + i) + "A"}</span><span>VANDMARK</span></div><div><div class="big">${ev.name}</div><div class="cap">${ev.caption}</div></div><span class="gl" aria-hidden="true">${ev.glyph}</span></article>`;
});
document.getElementById("reel").innerHTML = fh;
const vids = document.querySelectorAll(".fr video");
vids.forEach(v => {
  v.muted = true;
  v.defaultMuted = true;
  v.setAttribute("playsinline", "true");
  v.addEventListener("loadeddata", () => {
    const p = v.play();
    if (p) p.catch(() => { });
  }, { once: true });
});
if ("IntersectionObserver" in window && vids.length) {
  const vio = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      const p = e.target.play();
      if (p) p.catch(() => { });
    } else e.target.pause();
  }), { threshold: .2 });
  vids.forEach(v => vio.observe(v));
}

/* ---------- live aperture ---------- */
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const cv = document.getElementById("ap"), ctx = cv.getContext("2d"), fval = document.getElementById("fval");
const stops = ["1.8", "2", "2.8", "4", "5.6", "8", "11", "16"];
let W = 0, H = 0;
function size() { const r = cv.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2); W = r.width; H = r.height; cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0); }
function draw(t) {
  ctx.clearRect(0, 0, W, H);
  const cx = W / 2, cy = H / 2, R = Math.min(W, H) * .34;
  const k = reduce ? .55 : (Math.sin(t / 1400) + 1) / 2;
  const open = R * (.18 + .62 * k), rot = (1 - k) * 1.1;
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.6); g.addColorStop(0, "rgba(255,122,0,.55)"); g.addColorStop(1, "rgba(255,122,0,0)");
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  ctx.lineWidth = 2; ctx.strokeStyle = "rgba(255,247,236,.18)";
  [1.28, 1.16].forEach(m => { ctx.beginPath(); ctx.arc(cx, cy, R * m, 0, Math.PI * 2); ctx.stroke(); });
  ctx.strokeStyle = "rgba(255,247,236,.35)";
  for (let i = 0; i < 48; i++) { const a = i / 48 * Math.PI * 2, l = i % 4 ? 5 : 10; ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * R * 1.16, cy + Math.sin(a) * R * 1.16); ctx.lineTo(cx + Math.cos(a) * (R * 1.16 + l), cy + Math.sin(a) * (R * 1.16 + l)); ctx.stroke(); }
  const n = 7, v = [];
  for (let i = 0; i < n; i++) { const a = rot + i / n * Math.PI * 2; v.push([cx + Math.cos(a) * open, cy + Math.sin(a) * open]); }
  ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.clip();
  ctx.fillStyle = "#151413"; ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath(); v.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.closePath(); ctx.fill();
  ctx.globalCompositeOperation = "source-over";
  ctx.lineWidth = 2;
  for (let i = 0; i < n; i++) {
    const p = v[i], q = v[(i + 1) % n], dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy);
    ctx.strokeStyle = i % 2 ? "rgba(255,122,0,.75)" : "rgba(255,236,0,.6)";
    ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(p[0] + dx / L * R * 2.2, p[1] + dy / L * R * 2.2); ctx.stroke();
  }
  ctx.restore();
  ctx.lineWidth = 6; ctx.strokeStyle = "#FF7A00"; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
  fval.textContent = "f/" + stops[Math.round((1 - k) * (stops.length - 1))];
  if (!reduce) requestAnimationFrame(draw);
}
size(); addEventListener("resize", size); requestAnimationFrame(draw);

/* ---------- pointer: parallax stage + mascot eyes follow ---------- */
const stage = document.getElementById("stage"), layers = stage.querySelectorAll(".layer[data-depth]");
const pupils = () => document.querySelectorAll(".m-pupil");
let px = 0, py = 0, raf = 0;
function onMove(x, y) {
  const r = stage.getBoundingClientRect();
  const nx = (x - (r.left + r.width / 2)) / innerWidth, ny = (y - (r.top + r.height / 2)) / innerHeight;
  if (!reduce) layers.forEach(l => { const d = +l.dataset.depth; l.style.transform = `translate(${nx * d}px, ${ny * d}px)`; });
  pupils().forEach(p => {
    const svg = p.ownerSVGElement.getBoundingClientRect();
    const ex = svg.left + svg.width * .5, ey = svg.top + svg.height * .48;
    const a = Math.atan2(y - ey, x - ex), dist = Math.min(1, Math.hypot(x - ex, y - ey) / 300) * 9;
    p.style.transform = `translate(${Math.cos(a) * dist}px, ${Math.sin(a) * dist}px)`;
  });
}
addEventListener("pointermove", e => { px = e.clientX; py = e.clientY; if (!raf) raf = requestAnimationFrame(() => { raf = 0; onMove(px, py); }); }, { passive: true });
/* on phones, eyes glance around by themselves */
if (matchMedia("(hover: none)").matches && !reduce) {
  setInterval(() => pupils().forEach(p => { const a = Math.random() * Math.PI * 2, d = 4 + Math.random() * 5; p.style.transform = `translate(${Math.cos(a) * d}px, ${Math.sin(a) * d}px)`; }), 1500);
}

setTimeout(() => document.getElementById("shutter").classList.add("done"), 1400);

if (!reduce && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("pop"); io.unobserve(e.target); }
  }), { threshold: .12 });
  document.querySelectorAll(".sh, .row, .card, .contact h2, .dr-head").forEach((el, i) => {
    if (el.getBoundingClientRect().top > innerHeight) { el.style.animationDelay = ((i % 4) * 70) + "ms"; io.observe(el); }
  });
}


