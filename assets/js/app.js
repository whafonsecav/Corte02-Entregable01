/* =========================================================
   Compré y nunca usé — motor de presentación 16:9
   ========================================================= */
(function () {
  'use strict';

  var ICO = {
    box: '<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5"/><path d="M12 12v10"/>',
    cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6"/>',
    off: '<circle cx="12" cy="12" r="9"/><path d="M8.6 8.6l6.8 6.8"/><path d="M15.4 8.6l-6.8 6.8"/>',
    cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 11h18"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/>',
    book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>',
    cap: '<path d="M22 9 12 4 2 9l10 5z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/>'
  };

  function svg(p) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + p + '</svg>'; }
  function pic(id, alt) {
    return '<picture>' +
      '<source srcset="assets/img/' + id + '.webp" type="image/webp">' +
      '<img src="assets/img/' + id + '.jpg" alt="' + alt + '" loading="lazy" decoding="async">' +
      '</picture>';
  }

  /* ---------- construcción de láminas ---------- */
  var slides = [];

  // 1) Portada
  slides.push(
    '<section class="slide">' +
      '<div class="cover">' +
        '<div>' +
          '<div class="cover__badge anim d1">Corte 02 &nbsp;·&nbsp; <b>Entregable 01</b></div>' +
          '<h1 class="anim d2">Lo compré<br><span class="g">y nunca lo usé</span></h1>' +
          '<p class="cover__lead anim d3">Diez cosas que están en mi casa, nuevas, esperando un momento que no llegó. ' +
          'Cada una tiene <b>qué es</b>, <b>para qué la compré</b> y <b>por qué nunca la usé</b>.</p>' +
          '<div class="cover__chips anim d4">' +
            '<span class="chip">' + svg(ICO.box) + '10 productos</span>' +
            '<span class="chip">' + svg(ICO.cart) + '10 compras</span>' +
            '<span class="chip">' + svg(ICO.off) + '0 usos reales</span>' +
          '</div>' +
        '</div>' +
        '<div class="idcard anim d5">' +
          '<div class="idrow"><span>Asignatura</span><strong>Comportamiento del Consumidor</strong><em>Corte 02 · Entregable 01</em></div>' +
          '<div class="idrow"><span>Docente</span><strong>Carlos Alberto Espitia Benito</strong></div>' +
          '<div class="idrow"><span>Presenta</span><strong>William Harvey Fonseca Valero</strong></div>' +
          '<div class="idrow"><span>Programa</span><strong>Mercadeo y Publicidad</strong><em>Tercer semestre</em></div>' +
          '<div class="idrow"><span>Modalidad</span><strong>Bogotá noche · solo martes</strong><em>Martes de 6:40 p.m. a 9:49 p.m.</em></div>' +
          '<div class="idrow"><span>Institución</span><strong>Politécnico Grancolombiano</strong></div>' +
        '</div>' +
      '</div>' +
    '</section>'
  );

  // 2..11) Productos
  PRODUCTOS.forEach(function (p) {
    var nn = ('0' + p.n).slice(-2);
    var datos = p.datos.map(function (d) {
      return '<div class="dato"><b>' + d[0] + '</b><span>' + d[1] + '</span></div>';
    }).join('');

    slides.push(
      '<section class="slide">' +
        '<div class="item">' +
          '<div class="photo anim d1">' +
            '<div class="photo__glow"></div>' +
            '<div class="photo__num">' + nn + '</div>' +
            '<div class="photo__frame">' + pic(p.img, p.titulo) + '</div>' +
            '<div class="photo__stamp">Sin usar</div>' +
          '</div>' +
          '<div class="info">' +
            '<div class="info__kicker anim d2"><span class="k">Producto ' + nn + ' / 10</span><span class="tag">' + p.tag + '</span></div>' +
            '<h2 class="anim d2">' + p.titulo + '</h2>' +
            '<p class="info__sub anim d3">' + p.sub + '</p>' +
            '<div class="blocks">' +
              '<div class="blk anim d4" style="--bc:var(--c1)"><div class="blk__ico">' + svg(ICO.box) + '</div>' +
                '<div><div class="blk__t">¿Qué es?</div><p class="blk__p">' + p.que + '</p></div></div>' +
              '<div class="blk anim d5" style="--bc:var(--c2)"><div class="blk__ico">' + svg(ICO.cart) + '</div>' +
                '<div><div class="blk__t">¿Para qué lo compré?</div><p class="blk__p">' + p.para + '</p></div></div>' +
              '<div class="blk anim d6" style="--bc:var(--c3)"><div class="blk__ico">' + svg(ICO.off) + '</div>' +
                '<div><div class="blk__t">¿Por qué nunca lo usé?</div><p class="blk__p">' + p.porque + '</p></div></div>' +
            '</div>' +
            '<div class="datos anim d7">' + datos + '</div>' +
          '</div>' +
        '</div>' +
      '</section>'
    );
  });

  // 12) Cierre
  slides.push(
    '<section class="slide">' +
      '<div class="end">' +
        '<h2 class="anim d1">Gracias</h2>' +
        '<p class="anim d2">Diez compras, diez razones distintas y un mismo final: el producto llegó, ' +
        'pero el momento de usarlo nunca llegó con él.</p>' +
        '<div class="end__stats anim d3">' +
          '<div class="dato"><b>10</b><span>productos comprados</span></div>' +
          '<div class="dato"><b>6</b><span>siguen sellados</span></div>' +
          '<div class="dato"><b>0</b><span>llegaron a usarse</span></div>' +
        '</div>' +
        '<div class="end__sig anim d4">' +
          '<b>William Harvey Fonseca Valero</b> · Mercadeo y Publicidad · Tercer semestre<br>' +
          'Comportamiento del Consumidor · Docente: Carlos Alberto Espitia Benito<br>' +
          'Politécnico Grancolombiano · Bogotá noche · martes 6:40 p.m. – 9:49 p.m.' +
        '</div>' +
      '</div>' +
    '</section>'
  );

  /* ---------- montaje ---------- */
  var deck = document.getElementById('deck');
  deck.innerHTML = slides.join('');
  var els = deck.querySelectorAll('.slide');
  var TOTAL = els.length;
  var i = 0;

  var dots = document.getElementById('dots');
  var dotHTML = '';
  for (var k = 0; k < TOTAL; k++) dotHTML += '<button class="dot" data-i="' + k + '" aria-label="Ir a la lámina ' + (k + 1) + '"></button>';
  dots.innerHTML = dotHTML;
  var dotEls = dots.querySelectorAll('.dot');

  document.getElementById('tot').textContent = TOTAL;
  var curEl = document.getElementById('cur');
  var fill = document.getElementById('progressFill');

  function show(n, push) {
    n = Math.max(0, Math.min(TOTAL - 1, n));
    els[i].classList.remove('is-active');
    i = n;
    // reinicia las animaciones de entrada
    var s = els[i];
    s.classList.remove('is-active');
    void s.offsetWidth;
    s.classList.add('is-active');

    curEl.textContent = i + 1;
    fill.style.width = ((i + 1) / TOTAL * 100) + '%';
    for (var j = 0; j < TOTAL; j++) dotEls[j].classList.toggle('on', j === i);
    if (push !== false) history.replaceState(null, '', '#' + (i + 1));
  }

  function next() { if (i < TOTAL - 1) show(i + 1); }
  function prev() { if (i > 0) show(i - 1); }

  /* ---------- escalado 16:9 ---------- */
  var stage = document.getElementById('stage');
  function fit() {
    var s = Math.min(stage.clientWidth / 1600, stage.clientHeight / 900);
    deck.style.transform = 'translate(-50%,-50%) scale(' + s + ')';
  }
  window.addEventListener('resize', fit);
  fit();

  /* ---------- teclado ---------- */
  document.addEventListener('keydown', function (e) {
    var k = e.key;
    if (k === 'ArrowRight' || k === 'ArrowDown' || k === 'PageDown' || k === ' ' || k === 'Enter') { e.preventDefault(); next(); }
    else if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp' || k === 'Backspace') { e.preventDefault(); prev(); }
    else if (k === 'Home') { e.preventDefault(); show(0); }
    else if (k === 'End') { e.preventDefault(); show(TOTAL - 1); }
    else if (k === 'f' || k === 'F') {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen();
    }
  });

  /* ---------- mouse ---------- */
  document.addEventListener('click', function (e) {
    if (e.target.closest('.footer, .nav, a, button')) return;
    if (e.clientX > window.innerWidth * 0.42) next(); else prev();
  });
  document.getElementById('btnNext').addEventListener('click', next);
  document.getElementById('btnPrev').addEventListener('click', prev);
  dots.addEventListener('click', function (e) {
    var d = e.target.closest('.dot');
    if (d) show(+d.dataset.i);
  });

  var lock = 0;
  window.addEventListener('wheel', function (e) {
    var t = Date.now();
    if (t - lock < 800) return;
    if (Math.abs(e.deltaY) < 18) return;
    lock = t;
    if (e.deltaY > 0) next(); else prev();
  }, { passive: true });

  /* ---------- touch ---------- */
  var tx = 0, ty = 0;
  window.addEventListener('touchstart', function (e) { tx = e.changedTouches[0].clientX; ty = e.changedTouches[0].clientY; }, { passive: true });
  window.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) { if (dx < 0) next(); else prev(); }
  }, { passive: true });

  /* ---------- pista ---------- */
  var hint = document.getElementById('hint');
  setTimeout(function () { hint.classList.add('gone'); }, 5200);

  /* ---------- partículas ---------- */
  var cv = document.getElementById('particles');
  var ctx = cv.getContext('2d');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var parts = [], W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

  function seed() {
    W = cv.width = Math.floor(innerWidth * dpr);
    H = cv.height = Math.floor(innerHeight * dpr);
    cv.style.width = innerWidth + 'px';
    cv.style.height = innerHeight + 'px';
    var n = Math.min(90, Math.round(innerWidth * innerHeight / 17000));
    parts = [];
    for (var a = 0; a < n; a++) {
      parts.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.28 * dpr,
        vy: (Math.random() - 0.5) * 0.28 * dpr,
        r: (Math.random() * 1.7 + 0.6) * dpr,
        a: Math.random() * 0.45 + 0.18
      });
    }
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    for (var a = 0; a < parts.length; a++) {
      var p = parts[a];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 6.2832);
      ctx.fillStyle = 'rgba(150,215,255,' + p.a + ')';
      ctx.fill();
      for (var b = a + 1; b < parts.length; b++) {
        var q = parts[b], dx = p.x - q.x, dy = p.y - q.y, d2 = dx * dx + dy * dy;
        var max = 132 * dpr;
        if (d2 < max * max) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = 'rgba(120,190,240,' + (0.13 * (1 - Math.sqrt(d2) / max)) + ')';
          ctx.lineWidth = dpr * 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(tick);
  }

  if (!reduce) {
    seed();
    window.addEventListener('resize', seed);
    tick();
  } else {
    cv.style.display = 'none';
  }

  /* ---------- arranque ---------- */
  var start = parseInt((location.hash || '').replace('#', ''), 10);
  show(isNaN(start) ? 0 : start - 1, false);
})();
