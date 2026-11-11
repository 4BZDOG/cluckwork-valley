/* 🐔 Cluckwork Valley — page behaviour. No libraries, no build step. */
(function () {
  "use strict";
  var M = window.CLUCKWORK_MEDIA || { videos: [], team: [], gallery: [], behindTheScenes: [], builds: [] };
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    for (var k in (attrs || {})) n.setAttribute(k, attrs[k]);
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s || "").replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* ---------- theme (day/night cycle) ---------- */
  var root = document.documentElement, themeBtn = $("themeBtn");
  function isDark() { var t = root.getAttribute("data-theme"); return t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches; }
  function syncIcon() { themeBtn.textContent = isDark() ? "☀️" : "🌙"; }
  var saved = store("cw-theme"); if (saved) root.setAttribute("data-theme", saved);
  syncIcon();
  themeBtn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next); store("cw-theme", next); syncIcon();
    toast(next === "dark" ? "🌙 Night shift. The golem's eyes are glowing." : "☀️ Good morning, Farm Manager!");
  });

  /* ---------- toast ---------- */
  var tt;
  function toast(msg) { var t = $("toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(tt); tt = setTimeout(function () { t.classList.remove("show"); }, 2200); }

  /* ---------- CEO chicken clicker ---------- */
  var coins = parseInt(store("cw-coins") || "0", 10) || 0;
  var lines = ["Bawk! +1 Cluckcoin.", "Productivity is up 12 eggs!", "Have you met the golem? Nice guy.", "Don't press the TNT button. There is no TNT button.", "Floor 17 is Egg Accounting.", "Observer says: still watching.", "Employee of the Month? 250 coins!"];
  $("coins").textContent = coins;
  var actx;
  function bawk() {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      var o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime;
      o.type = "square"; o.frequency.setValueAtTime(880, t); o.frequency.exponentialRampToValueAtTime(420, t + 0.15);
      g.gain.setValueAtTime(0.06, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      o.connect(g); g.connect(actx.destination); o.start(t); o.stop(t + 0.2);
    } catch (e) {}
  }
  $("chickenBtn").addEventListener("click", function () {
    coins++; $("coins").textContent = coins; store("cw-coins", String(coins)); bawk();
    $("speech").textContent = coins >= 250 ? "🏆 EMPLOYEE OF THE MONTH! (You may stop now.)" : lines[coins % lines.length];
    if (coins === 250) toast("🎆 250 Cluckcoins! Fireworks at the Firework Cave!");
  });

  /* ---------- tabs (accessible, arrow-key friendly) ---------- */
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    function select(tab) {
      tabs.forEach(function (t) {
        var on = t === tab; t.setAttribute("aria-selected", on); t.tabIndex = on ? 0 : -1;
        $(t.getAttribute("aria-controls")).hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.tabIndex = t.getAttribute("aria-selected") === "true" ? 0 : -1;
      t.addEventListener("click", function () { select(t); });
      t.addEventListener("keydown", function (e) {
        var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); e.preventDefault(); }
      });
    });
  });

  /* ---------- videos ---------- */
  function videoNode(v, i) {
    if (v.youtube) {
      return el("iframe", { class: "video-frame", src: "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(v.youtube), title: v.title, loading: "lazy", allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture", allowfullscreen: "" });
    }
    if (v.file) {
      var vid = el("video", { class: "video-frame", controls: "", preload: "metadata", src: v.file });
      return vid;
    }
    var big = i === 0;
    var posters = ["assets/shots/shot-24.jpg", "assets/shots/shot-21.jpg", "assets/shots/shot-10.jpg", "assets/shots/shot-22.jpg"];
    var poster = v.poster || posters[i % posters.length];
    var box = el("div", { class: "video-frame video-soon" + (big ? " big" : "") },
      '<div class="play" aria-hidden="true">▶</div><div class="soon-label"><span class="pixel">' +
      (big ? "PREMIERING SOON" : "COMING SOON") + "</span><b>" + esc(v.title) + "</b>" +
      (big ? "<em>Popcorn status: harvesting… 🍿</em>" : "") + "</div>");
    box.style.backgroundImage = "url('" + poster + "')";
    return box;
  }
  (M.videos || []).forEach(function (v, i) {
    var fig = el("figure");
    fig.appendChild(videoNode(v, i));
    if (v.youtube || v.file) fig.appendChild(el("figcaption", null, esc(v.title)));
    (i === 0 ? $("videoMain") : $("videoGrid")).appendChild(fig);
  });

  /* ---------- gallery + lightbox ---------- */
  var lb = $("lightbox");
  function openLb(src, cap) {
    $("lbImg").src = src; $("lbImg").alt = cap; $("lbCap").textContent = cap;
    if (lb.showModal) lb.showModal(); else window.open(src, "_blank");
  }
  lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
  function fillGallery(target, items, emptyLabel, minSlots) {
    var g = $(target);
    var list = (items || []).slice();
    list.forEach(function (it, i) {
      var fig = el("figure");
      fig.style.setProperty("--tilt", ((i % 5) - 2) * 0.6 + "deg");
      if (it.src) {
        var img = el("img", { src: it.src, alt: it.caption || "Screenshot of Cluckwork Valley", loading: "lazy", tabindex: "0" });
        img.addEventListener("click", function () { openLb(it.src, it.caption || ""); });
        img.addEventListener("keydown", function (e) { if (e.key === "Enter") openLb(it.src, it.caption || ""); });
        fig.appendChild(img);
      } else {
        fig.appendChild(el("div", { class: "slot" }, '<div><span class="big">🤳</span>' + emptyLabel + "<small>assets/bts/…</small></div>"));
      }
      fig.appendChild(el("figcaption", null, esc(it.caption)));
      g.appendChild(fig);
    });
    for (var j = list.length; j < (minSlots || 0); j++) {
      var f = el("figure"); f.style.setProperty("--tilt", ((j % 5) - 2) * 0.6 + "deg");
      f.appendChild(el("div", { class: "slot" }, '<div><span class="big">📸</span>' + emptyLabel + "</div>"));
      g.appendChild(f);
    }
  }
  fillGallery("gallery-grid", M.gallery, "Screenshot slot", 3);
  fillGallery("bts-grid", M.behindTheScenes, "Selfie goes here. Strike a chicken pose!", 0);

  /* ---------- team ---------- */
  var faces = ["🐔", "🐣", "🐥", "🦚", "🦃", "🐓", "🦆", "🦜", "🐧", "🦉", "🕊️", "🦢"];
  (M.team || []).forEach(function (p, i) {
    var card = el("div", { class: "member" });
    var pic = p.photo
      ? '<div class="pic"><img src="' + esc(p.photo) + '" alt="' + esc(p.name || "Studio member") + '" loading="lazy"></div>'
      : '<div class="pic empty"><div><b>' + faces[i % faces.length] + "</b>Selfie<br>incoming</div></div>";
    card.innerHTML = pic +
      '<div class="nm">' + esc(p.name || "Engineer #" + (i + 1)) + "</div>" +
      '<div class="rl">' + esc(p.role) + "</div>" +
      (p.quote ? '<div class="q">“' + esc(p.quote) + "”</div>" : "");
    $("team-grid").appendChild(card);
  });

  /* ---------- copy buttons ---------- */
  document.querySelectorAll(".copy-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      var txt = $(b.getAttribute("data-copy")).innerText.trim();
      (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(
        function () { toast("📋 Copied! Go make some noise."); },
        function () { toast("Couldn't copy, so select the text manually."); });
    });
  });

  /* ---------- build history (from media.js -> builds) ---------- */
  (function () {
    var builds = M.builds || [];
    if (!builds.length) return;
    var main = document.querySelector("main") || document.body;
    var sec = el("section", { id: "builds" });
    var wrap = el("div", { class: "wrap" });
    wrap.appendChild(el("div", { class: "sec-head" },
      '<span class="sec-num">12</span><h2>Build History</h2><span class="rubric-tag">Saved worlds · checkpoints · changelog</span>'));
    wrap.appendChild(el("p", { class: "lede" },
      "Every saved world from the studio, in order. Each entry is a checkpoint, not just a file. The world files themselves are not published on this site."));
    var grid = el("div", { style: "display:grid;gap:14px" });
    builds.forEach(function (b) {
      var meta = [b.mode, b.photos ? b.photos + " photos" : "", b.status].filter(Boolean).map(esc).join(" · ");
      var card = el("div", { class: "card" });
      card.innerHTML = "<h3>" + esc(b.label) + "</h3>" +
        '<p style="margin:0 0 6px;opacity:.8">' + esc(b.date) + " · " + meta + "</p>" +
        '<p style="margin:0">' + esc(b.changes) + "</p>";
      grid.appendChild(card);
    });
    wrap.appendChild(grid);
    sec.appendChild(wrap);
    main.appendChild(sec);
  })();
})();
