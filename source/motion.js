/* ===== Experio motion layer =====
   Rule: every entrance ends exactly at the Figma position. Entrances only animate opacity,
   clip-path, filter, stroke-dashoffset, the independent translate/scale/rotate properties or a
   3D transform that resolves to none, and are cancelled when done, so layout is never touched.
   Each section has its own signature entrance. */
(() => {
  if (document.body.classList.contains('static-mode')) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EASE = 'cubic-bezier(.16,1,.3,1)';
  const BOUNCE = 'cubic-bezier(.34,1.56,.64,1)';
  const SVGNS = 'http://www.w3.org/2000/svg';
  const SPEC = ['#F57915', '#EF2C61', '#E31E84', '#C7309A', '#9440A5', '#604BA9', '#5157B0', '#487EB2', '#49C0A1'];
  let page = null, io = null, raf = 0, flows = [], timers = [], loops = [];

  const $ = (sel, root = page) => root ? [...root.querySelectorAll(sel)] : [];
  const N = id => `[data-node-id="${id}"]`;
  const nm = n => `[data-name="${n}"]`;
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  const isClip = el => el.classList && el.classList.contains('bg-clip-text');

  /* ---------- entrance effects ---------- */
  const P3 = 'perspective(1000px)';
  const FX = {
    up: [{ opacity: 0, translate: '0 26px' }, { opacity: 1, translate: '0 0' }],
    down: [{ opacity: 0, translate: '0 -18px' }, { opacity: 1, translate: '0 0' }],
    left: [{ opacity: 0, translate: '-46px 0' }, { opacity: 1, translate: '0 0' }],
    right: [{ opacity: 0, translate: '46px 0' }, { opacity: 1, translate: '0 0' }],
    fade: [{ opacity: 0 }, { opacity: 1 }],
    pop: [{ opacity: 0, scale: '.55' }, { opacity: 1, scale: '1.06', offset: .7 }, { opacity: 1, scale: '1' }],
    zoom: [{ opacity: 0, scale: '.86' }, { opacity: 1, scale: '1' }],
    clipX: [{ clipPath: 'inset(-20% 100% -20% 0)' }, { clipPath: 'inset(-20% 0% -20% 0)' }],
    clipUp: [{ clipPath: 'inset(100% -40% 0 -40%)' }, { clipPath: 'inset(0% -40% 0 -40%)' }],
    growX: [{ scale: '0 1' }, { scale: '1 1' }],
    blur: [{ opacity: 0, filter: 'blur(10px)', translate: '0 14px' }, { opacity: 1, filter: 'blur(0)', translate: '0 0' }],
    // new signatures
    rise3d: [{ opacity: 0, transform: `${P3} rotateX(58deg) translateY(40px)` }, { opacity: 1, transform: `${P3} rotateX(0) translateY(0)` }],
    swingL: [{ opacity: 0, transform: `${P3} rotateY(-75deg)` }, { opacity: 1, transform: `${P3} rotateY(8deg)`, offset: .75 }, { opacity: 1, transform: `${P3} rotateY(0)` }],
    swingR: [{ opacity: 0, transform: `${P3} rotateY(75deg)` }, { opacity: 1, transform: `${P3} rotateY(-8deg)`, offset: .75 }, { opacity: 1, transform: `${P3} rotateY(0)` }],
    flip: [{ opacity: 0, transform: `${P3} rotateY(95deg) scale(.9)` }, { opacity: 1, transform: `${P3} rotateY(0) scale(1)` }],
    iris: [{ clipPath: 'circle(0% at 50% 50%)', filter: 'brightness(1.6)' }, { clipPath: 'circle(75% at 50% 50%)', filter: 'brightness(1)' }],
    drop: [{ opacity: 0, translate: '0 -70px' }, { opacity: 1, translate: '0 9px', offset: .55 }, { translate: '0 -4px', offset: .78 }, { opacity: 1, translate: '0 0' }],
    skew: [{ opacity: 0, translate: '0 56px', transform: 'skewY(7deg)' }, { opacity: 1, translate: '0 0', transform: 'skewY(0)' }],
    spiral: [{ opacity: 0, scale: '.25', rotate: '-140deg' }, { opacity: 1, scale: '1.08', rotate: '8deg', offset: .7 }, { opacity: 1, scale: '1', rotate: '0deg' }],
    wipeR: [{ clipPath: 'inset(-10% -10% -10% 100%)' }, { clipPath: 'inset(-10% -10% -10% 0%)' }],
    curtain: [{ clipPath: 'inset(-20% 50% -20% 50%)' }, { clipPath: 'inset(-20% 0% -20% 0%)' }],
    unblur: [{ opacity: 0, filter: 'blur(22px) saturate(1.8)', scale: '1.12' }, { opacity: 1, filter: 'blur(0) saturate(1)', scale: '1' }],
  };
  const ORIGIN = { growX: 'left center', clipUp: 'bottom', pop: 'center', rise3d: 'center bottom', swingL: 'left center', swingR: 'right center', skew: 'left bottom' };
  const BOUNCY = { pop: 1, spiral: 1 };

  function play(el, fx, delay = 0, dur = 900, then) {
    if (!el) return;
    el.removeAttribute('data-wait');
    if (reduce) { then && then(el); return; }
    if (ORIGIN[fx]) el.style.transformOrigin = ORIGIN[fx];
    const a = el.animate(FX[fx], { duration: dur, delay, easing: BOUNCY[fx] ? BOUNCE : EASE, fill: 'backwards' });
    a.onfinish = () => { a.cancel(); then && then(el); };
  }

  /* draw every stroked path inside an svg */
  function draw(svg, delay = 0, dur = 1300) {
    if (!svg) return;
    svg.removeAttribute('data-wait');
    $('path[stroke],circle[stroke],ellipse[stroke]', svg).forEach((p, i) => {
      let L = 0; try { L = p.getTotalLength(); } catch (e) { return; }
      if (!L || reduce) return;
      p.style.strokeDasharray = L;
      const a = p.animate([{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: dur, delay: delay + i * 120, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'backwards' });
      a.onfinish = () => { a.cancel(); p.style.strokeDasharray = ''; };
    });
  }

  /* count a number up, keeping its prefix/suffix and decimals */
  let countNodes = [];
  function count(el, delay = 0, dur = 1400) {
    if (!el) return;
    const node = [...el.querySelectorAll('*')].concat(el).map(e => [...e.childNodes].find(n => n.nodeType === 3 && /\d/.test(n.nodeValue))).find(Boolean);
    if (!node || reduce) return;
    const orig = node._orig || node.nodeValue;
    const m = orig.match(/^(.*?)(\d+(?:\.\d+)?)(.*)$/s);
    if (!m) return;
    const target = parseFloat(m[2]), dec = (m[2].split('.')[1] || '').length;
    node.nodeValue = m[1] + (0).toFixed(dec) + m[3];
    later(() => {
      const t0 = performance.now();
      const step = now => {
        const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        node.nodeValue = m[1] + (target * e).toFixed(dec) + m[3];
        if (k < 1 && page) requestAnimationFrame(step); else node.nodeValue = orig;
      };
      requestAnimationFrame(step);
    }, delay);
    node._orig = orig;
    countNodes.push(node);
  }

  /* ---------- text splitting (words / letters / typing) ----------
     units are inline-blocks, so line breaks and spacing stay exactly as designed.
     A gradient (background-clip:text) element is kept whole and becomes one unit. */
  function split(el, mode) {
    if (el._units && el._units.mode === mode) return el._units;
    const units = [];
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 1) {
          if (isClip(n) || n.matches('svg,img,input,select')) { units.push(n); return; }
          walk(n); return;
        }
        if (n.nodeType !== 3 || !n.nodeValue.trim()) return;
        const frag = document.createDocumentFragment();
        const parts = mode === 'chars' ? [...n.nodeValue] : n.nodeValue.split(/(\s+)/);
        parts.forEach(t => {
          if (!t) return;
          if (/^\s+$/.test(t)) { frag.appendChild(document.createTextNode(t)); return; }
          const s = document.createElement('span');
          s.className = mode === 'chars' ? 'xu xc' : 'xu';
          s.textContent = t;
          if (mode === 'mask') { const w = document.createElement('span'); w.className = 'xw'; w.appendChild(s); frag.appendChild(w); }
          else frag.appendChild(s);
          units.push(s);
        });
        n.replaceWith(frag);
      });
    };
    if (isClip(el)) units.push(el); else walk(el);
    units.mode = mode;
    el._units = units;
    return units;
  }

  /* words rise out of a mask, one after another */
  function words(el, delay, opt) {
    const units = split(el, 'mask');
    el.removeAttribute('data-wait');
    if (reduce) return;
    const st = opt.stagger || 45;
    units.forEach((u, i) => {
      const clip = !u.classList.contains('xu');
      const kf = clip ? FX.blur : [{ translate: '0 105%', rotate: '6deg' }, { translate: '0 0', rotate: '0deg' }];
      const a = u.animate(kf, { duration: opt.dur || 900, delay: delay + i * st, easing: EASE, fill: 'backwards' });
      a.onfinish = () => a.cancel();
    });
  }
  /* letters cascade with a little spin */
  function letters(el, delay, opt) {
    const units = split(el, 'chars');
    el.removeAttribute('data-wait');
    if (reduce) return;
    const st = opt.stagger || 32;
    units.forEach((u, i) => {
      const a = u.animate([{ opacity: 0, translate: '0 .7em', rotate: '18deg', scale: '.6' }, { opacity: 1, translate: '0 -.06em', rotate: '-3deg', scale: '1.04', offset: .7 }, { opacity: 1, translate: '0 0', rotate: '0deg', scale: '1' }],
        { duration: 800, delay: delay + i * st, easing: EASE, fill: 'backwards' });
      a.onfinish = () => a.cancel();
    });
  }

  /* typewriter across several elements in sequence, with a caret */
  function typeSeq(els, delay) {
    const lists = els.map(e => { const u = split(e, 'chars'); u.forEach(c => (c.style.opacity = '0')); e.removeAttribute('data-wait'); return u; });
    if (reduce) { lists.flat().forEach(c => (c.style.opacity = '')); return; }
    const caret = document.createElement('span');
    caret.className = 'x-caret';
    let t = delay;
    lists.forEach((list, li) => {
      list.forEach((c, i) => {
        const ch = c.textContent;
        t += 34 + Math.random() * 38 + (/[.,]/.test(ch) ? 220 : 0);
        const at = t;
        later(() => {
          c.style.opacity = '';
          c.appendChild(caret);
          caret.classList.add('typing');
          const a = c.animate([{ filter: 'blur(4px)', opacity: .2 }, { filter: 'blur(0)', opacity: 1 }], { duration: 220, easing: 'ease-out' });
          a.onfinish = () => a.cancel();
        }, at);
        // pause where the designed line breaks
        if (c === [...c.parentElement.querySelectorAll('.xc')].pop()) t += 180;
      });
      t += li < lists.length - 1 ? 420 : 0;
    });
    later(() => caret.classList.remove('typing'), t + 60);
    later(() => { caret.classList.add('gone'); }, t + 2200);
    later(() => caret.remove(), t + 2700);
    // gradient line gets a light sweep once typed
    later(() => els.filter(isClip).forEach(e => e.classList.add('x-sheen-text')), t + 200);
    return t;
  }

  /* fly out of a point (the engine core) to the designed position */
  function emit(el, delay, opt) {
    el.removeAttribute('data-wait');
    if (reduce) return;
    const src = $(opt.from)[0]; if (!src) return;
    const s = window.EIP.scale || 1;
    const a = src.getBoundingClientRect(), b = el.getBoundingClientRect();
    const cx = a.left + (opt.fx ?? .5) * a.width, cy = a.top + (opt.fy ?? .5) * a.height;
    const dx = (cx - (b.left + b.width / 2)) / s, dy = (cy - (b.top + b.height / 2)) / s;
    const an = el.animate([
      { opacity: 0, translate: `${dx}px ${dy}px`, scale: '.15', filter: 'blur(6px)' },
      { opacity: 1, offset: .35 },
      { opacity: 1, translate: '0 0', scale: '1', filter: 'blur(0)' }], { duration: 1200, delay, easing: EASE, fill: 'backwards' });
    an.onfinish = () => an.cancel();
  }

  /* rocket launch: comes up from below the band with a trail, then hovers */
  function launch(el, delay) {
    el.removeAttribute('data-wait');
    if (reduce) return;
    const a = el.animate([
      { opacity: 0, translate: '-120px 160px', rotate: '18deg', scale: '.5' },
      { opacity: 1, translate: '12px -18px', rotate: '-4deg', scale: '1.06', offset: .7 },
      { opacity: 1, translate: '0 0', rotate: '0deg', scale: '1' }], { duration: 1500, delay, easing: EASE, fill: 'backwards' });
    a.onfinish = () => { a.cancel(); el.classList.add('amb-rocket'); };
  }

  /* ---------- data particles travelling along paths ---------- */
  function overlay(root) {
    let svg = root.querySelector(':scope > svg.flow-layer');
    if (!svg) {
      svg = document.createElementNS(SVGNS, 'svg');
      svg.setAttribute('class', 'flow-layer');
      svg.setAttribute('width', root.offsetWidth); svg.setAttribute('height', root.offsetHeight);
      svg.setAttribute('viewBox', `0 0 ${root.offsetWidth} ${root.offsetHeight}`);
      root.appendChild(svg);
    }
    return svg;
  }
  function flow(path, { color = '#7c23f8', n = 2, speed = 2600, r = 3.2, delay = 0, trail = true, show = false } = {}) {
    if (reduce) return;
    let host;
    if (typeof path === 'string') {
      host = overlay(page.firstElementChild);
      const p = document.createElementNS(SVGNS, 'path');
      p.setAttribute('d', path); p.setAttribute('fill', 'none');
      p.setAttribute('stroke', show ? color : 'none'); p.setAttribute('stroke-opacity', '.25'); p.setAttribute('stroke-width', '1');
      host.appendChild(p); path = p;
    } else host = path.ownerSVGElement;
    if (!path || !host) return;
    const L = path.getTotalLength();
    for (let i = 0; i < n; i++) {
      const g = document.createElementNS(SVGNS, 'g');
      g.setAttribute('class', 'particle');
      const gid = 'pg' + color.replace('#', '');
      if (!host.querySelector('#' + gid)) host.insertAdjacentHTML('afterbegin', `<defs><radialGradient id="${gid}"><stop offset="0" stop-color="${color}" stop-opacity=".9"/><stop offset=".45" stop-color="${color}" stop-opacity=".35"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></radialGradient></defs>`);
      g.innerHTML = (trail ? `<circle r="${r * 3.6}" fill="url(#${gid})"/>` : '') + `<circle r="${r}" fill="${color}"/><circle r="${r * .42}" fill="#fff"/>`;
      host.appendChild(g);
      flows.push({ g, path, L, speed, t0: performance.now() + delay + i * (speed / n) });
    }
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function tick(now) {
    raf = 0;
    if (!flows.length) return;
    for (const f of flows) {
      const k = (now - f.t0) / f.speed;
      if (k < 0) { f.g.style.opacity = 0; continue; }
      const t = k % 1;
      const pt = f.path.getPointAtLength(t * f.L);
      f.g.setAttribute('transform', `translate(${pt.x} ${pt.y})`);
      f.g.style.opacity = Math.min(1, t * 6, (1 - t) * 6);
    }
    raf = requestAnimationFrame(tick);
  }

  /* ---------- heartbeat behind the engine ---------- */
  const BEAT = 1500;
  function heartbeat() {
    const diagram = $(N('41:459'))[0], holder = $(N('41:460'))[0];
    if (!diagram || !holder || reduce) return;
    const img = holder.querySelector('img');
    // core centre inside the glow artwork (measured from the image) and its radius
    const cx = holder.offsetLeft + 206.8, cy = holder.offsetTop + 308.2, R = 104;
    const hb = document.createElement('div');
    hb.className = 'hb';
    hb.style.cssText = `left:${cx}px;top:${cy}px;--r:${R}px;--beat:${BEAT}ms`;
    hb.innerHTML = '<i class="hb-glow"></i>' + [0, 1, 2, 3].map(i => `<i class="hb-ring hb-ring${i}"></i>`).join('') +
      `<svg class="hb-ecg" width="150" height="40" viewBox="0 0 150 40" fill="none"><defs><linearGradient id="hbg" x1="0" x2="150" y1="0" y2="0" gradientUnits="userSpaceOnUse">${SPEC.map((c, i) => `<stop offset="${i / (SPEC.length - 1)}" stop-color="${c}"/>`).join('')}</linearGradient></defs>` +
      '<path class="hb-base" d="M0 24 H40 L48 20 L54 24 H62 L68 30 L76 4 L84 36 L90 24 H98 L106 16 L116 24 H150"/><path class="hb-trace" pathLength="100" d="M0 24 H40 L48 20 L54 24 H62 L68 30 L76 4 L84 36 L90 24 H98 L106 16 L116 24 H150"/></svg>';
    holder.after(hb);
    img.style.transformOrigin = '206.8px 308.2px';
    img.classList.add('hb-img');
    img.style.setProperty('--beat', BEAT + 'ms');
    loops.push(() => { hb.remove(); img.classList.remove('hb-img'); });
  }

  /* ---------- "one platform" relay ----------
     a signal spark travels the pipeline; each step wakes up as it arrives: the icon bounces in,
     a circular ripple rings out, the connector draws behind the spark, the copy rises. */
  function relay(delay) {
    const sec = $(N('33:321'))[0]; if (!sec) return;
    const holders = $(ids('33:345', '33:355', '33:363', '33:371', '33:379'));
    const steps = holders.map(h => h.parentElement);
    const texts = steps.map(s => [...s.children].filter(c => !holders.includes(c)));
    const paths = ['33:350', '33:358', '33:366', '33:374'].map(i => $(N(i) + ' path[stroke]')[0]);
    if (reduce) { [...holders, ...texts.flat()].forEach(e => e.removeAttribute('data-wait')); return; }
    const spark = document.createElement('div'); spark.className = 'x-spark'; sec.appendChild(spark);
    const trail = [...Array(7)].map((_, i) => { const t = document.createElement('i'); t.className = 'x-spark-t'; t.style.opacity = (1 - i / 7) * .55; t.style.scale = 1 - i * .11; sec.appendChild(t); return t; });
    loops.push(() => { spark.remove(); trail.forEach(t => t.remove()); });
    const hist = [];
    const local = (x, y) => { const r = sec.getBoundingClientRect(), s = window.EIP.scale || 1; return [(x - r.left) / s, (y - r.top) / s]; };
    const place = (x, y, show = 1) => {
      spark.style.translate = `${x}px ${y}px`; spark.style.opacity = show;
      hist.unshift([x, y]); hist.length = 8;
      trail.forEach((t, i) => { const h = hist[i + 1] || hist[hist.length - 1]; if (h) t.style.translate = `${h[0]}px ${h[1]}px`; t.style.visibility = show ? 'visible' : 'hidden'; });
    };
    let first = true;
    const arrive = i => {
      const h = holders[i];
      if (first) {
        play(h, 'pop', 0, 800);
        texts[i].forEach((t, k) => play(t, 'up', 120 + k * 90, 800));
      } else {
        const b = h.animate([{ scale: '1' }, { scale: '1.14', offset: .35 }, { scale: '.97', offset: .7 }, { scale: '1' }], { duration: 650, easing: 'ease-out' });
        b.onfinish = () => b.cancel();
      }
      const rp = document.createElement('i'); rp.className = 'x-ripple'; rp.style.setProperty('--c', SPEC[[0, 2, 4, 6, 8][i]]);
      h.prepend(rp);
      const a = rp.animate([{ scale: '.55', opacity: .9 }, { scale: '1.55', opacity: 0 }], { duration: 1100, easing: 'cubic-bezier(.2,.6,.35,1)' });
      a.onfinish = () => rp.remove();
    };
    const travel = (i, done) => {
      const p = paths[i];
      if (!p) return done();
      const L = p.getTotalLength(), T = 620, t0 = performance.now();
      if (first) { p.style.strokeDasharray = L; p.style.strokeDashoffset = L; p.closest('svg').removeAttribute('data-wait'); }
      const step = now => {
        if (!page) return;
        const k = Math.min(1, (now - t0) / T), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        const pt = p.getPointAtLength(e * L).matrixTransform(p.getScreenCTM());
        const [x, y] = local(pt.x, pt.y); place(x, y);
        if (first) p.style.strokeDashoffset = L * (1 - e);
        if (k < 1) requestAnimationFrame(step); else { if (first) { p.style.strokeDasharray = ''; p.style.strokeDashoffset = ''; } done(); }
      };
      requestAnimationFrame(step);
    };
    const run = (i = 0) => {
      arrive(i);
      if (i === holders.length - 1) {
        spark.style.opacity = 0; trail.forEach(t => (t.style.visibility = 'hidden'));
        first = false; hist.length = 0;
        later(() => run(0), 2600);
        return;
      }
      later(() => travel(i, () => run(i + 1)), 260);
    };
    later(() => run(0), delay);
  }

  /* ---------- per-page choreography ----------
     each step: [selector(s), effect, delay, stagger, opts]  or  [kind, selector(s), delay, stagger, opts]
     kinds: draw, count, chart, plane, words, letters, type, emit, launch
     opts.on = trigger selector (defaults to first target) ; opts.amb = ambient class after */
  const KINDS = ['draw', 'count', 'chart', 'words', 'letters', 'type', 'emit', 'launch', 'relay'];
  const HEAD = [];
  function headIn() {
    const bar = document.querySelector('#navbar .nav-clone'); if (!bar || reduce) return;
    play(bar.querySelector('.x-brand'), 'clipX', 0, 1200);
    bar.querySelectorAll('[data-name="Navigation"] > *').forEach((e, i) => play(e, 'drop', 200 + i * 70));
    bar.querySelectorAll('[data-name="Actions"] > *').forEach(e => play(e, 'pop', 650));
  }
  const FOOT = [
    ['.xf-div', 'growX', 0, 180, { on: '.xf', dur: 1300 }],
    ['words', '.xf-t1', 100, 0, { on: '.xf', stagger: 60 }],
    ['.xf-t2', 'curtain', 550, 0, { on: '.xf', dur: 1100 }],
    ['.xf-eyebrow', 'clipX', 300, 0, { on: '.xf' }], ['.xf-cta .xbtn', 'pop', 650, 0, { on: '.xf' }],
    ['.xf-logo', 'clipX', 450, 0, { on: '.xf', dur: 1300 }],
    ['.xf-soc-i', 'spiral', 700, 120, { on: '.xf', dur: 1000 }],
    ['.xf-link', 'drop', 800, 80, { on: '.xf' }],
    ['.xf-bottom > span', 'fade', 1200, 160, { on: '.xf' }],
  ];
  const ids = (...a) => a.map(N).join(',');
  const SRC = ids('41:466', '41:472', '41:478', '41:484', '41:490', '41:496');
  const RES = ids('41:469', '41:475', '41:481', '41:487', '41:493', '41:499');
  const P = {
    home: [
      ...HEAD,
      // hero — typed headline, heartbeat engine, channels burst out of the core
      [N('33:159'), 'drop', 200],
      ['type', ids('33:169', '33:173'), 450],
      ['words', N('33:175'), 3500, 0, { stagger: 22, dur: 800 }],
      [ids('33:178', '33:182'), 'pop', 3900, 130],
      [N('41:460'), 'iris', 250, 0, { dur: 1700 }],
      ['emit', SRC, 1100, 110, { from: N('41:460'), fx: .395, fy: .552 }],
      ['emit', RES, 1250, 110, { from: N('41:460'), fx: .395, fy: .552 }],
      // process — masked words, 3D card flips, connectors drawn like a pipeline
      [N('33:324'), 'clipX', 0, 0, { dur: 1000 }], ['words', N('34:614'), 150, 0, { stagger: 70 }],
      [N('33:332'), 'growX', 700], [N('33:340'), 'blur', 750],
      ['relay', N('33:343'), 500],
      // everything you need — letters cascade, handwriting, cards swing in from both sides
      [N('33:387'), 'clipX', 0], ['letters', N('33:391'), 100, 0, { stagger: 34 }],
      [N('33:395'), 'clipX', 850, 0, { dur: 1300 }], [N('33:399'), 'curtain', 1100, 0, { dur: 1200 }],
      ['draw', `${N('33:400')} svg`, 1800, 0, { on: N('33:391') }],
      [N('33:384'), 'wipeR', 300, 0, { dur: 1600, amb: 'amb-drift' }], [N('33:385'), 'drop', 600, 0, { on: N('33:391') }],
      [ids('33:402', '33:421', '33:435'), 'swingR', 200, 160, { on: N('33:402'), dur: 1100 }],
      [ids('33:414', '33:428', '33:442'), 'swingL', 280, 160, { on: N('33:402'), dur: 1100 }],
      [ids('33:404', '33:415', '33:422', '33:429', '33:436', '33:443'), 'spiral', 450, 110, { on: N('33:402'), amb: 'amb-float' }],
      ['draw', `${N('33:412')} svg,${N('33:419')} svg,${N('33:426')} svg,${N('33:433')} svg,${N('33:440')} svg,${N('33:447')} svg`, 900, 120, { on: N('33:402') }],
      ['draw', `${N('33:449')} svg,${N('33:451')} svg,${N('33:453')} svg`, 1300, 200, { on: N('33:402') }],
      // real impact — skewed headline, the voices illustration pulls into focus
      [N('33:460'), 'clipX', 0], ['words', N('33:464'), 120, 0, { stagger: 80 }], [N('33:465'), 'curtain', 450, 0, { dur: 1100 }],
      [N('33:467'), 'blur', 650],
      [N('33:458'), 'unblur', 0, 0, { dur: 1900, on: N('33:459') }], [N('33:457'), 'wipeR', 400, 0, { dur: 1500, on: N('33:459') }],
      [ids('33:470', '33:480', '33:486'), 'drop', 800, 150, { on: N('33:459') }],
      // demo band — curtain opens, rocket launches
      [N('33:493'), 'curtain', 0, 0, { dur: 1300 }], ['launch', N('33:497'), 550, 0, { on: N('33:493') }],
      [`${N('33:498')} > *`, 'rise3d', 600, 140, { on: N('33:493'), dur: 1000 }], [N('33:503'), 'pop', 1000, 0, { on: N('33:493') }],
      ...FOOT,
    ],
    platform: [
      ...HEAD,
      [N('14:5') + ' > img', 'unblur', 0, 0, { dur: 1900 }],
      [`${N('14:33510')} > *`, 'skew', 150, 140, { dur: 1000 }],
      [ids('14:33517', '14:33525', '14:33532', '14:33539'), 'swingL', 500, 120, { on: N('14:33516'), dur: 1100 }],
      [ids('14:33563', '14:33570', '14:33577', '14:33584'), 'swingR', 560, 120, { on: N('14:33562'), dur: 1100 }],
      [N('14:33548'), 'iris', 300, 0, { dur: 1500 }], [N('14:33556'), 'drop', 900],
      [ids('14:33592', '14:33602', '14:33611', '14:33620', '14:33629'), 'rise3d', 200, 130, { on: N('14:33591'), dur: 1000 }],
      ['count', `${N('I14:33592;13:13474')},${N('I14:33611;13:13474')}`, 400, 240, { on: N('14:33591') }],
      ...FOOT,
    ],
    how: [
      ...HEAD,
      [`${N('33:1228')} > *`, 'skew', 100, 140, { dur: 1000 }], [N('33:1237'), 'blur', 450],
      [N('34:578'), 'unblur', 300, 0, { dur: 1800 }],
      ['plane', N('34:593'), 700],
      [ids('33:1253', '33:1264', '33:1272', '33:1280', '33:1288', '33:1296'), 'drop', 600, 170, { on: N('33:1253') }],
      [ids('33:1244', '33:1247', '33:1248', '33:1249', '33:1250'), 'spiral', 1300, 110, { on: N('33:1242') }],
      [N('33:1305'), 'wipeR', 100, 0, { dur: 1300, on: N('33:1304') }],
      [ids('34:583', '34:588'), 'fade', 200, 200, { on: N('33:1304') }],
      [N('33:1308'), 'skew', 300, 0, { on: N('33:1304') }],
      [ids('33:1313', '33:1316'), 'flip', 300, 100, { on: N('33:1304') }],
      [ids('33:1317', '33:1339', '33:1350', '33:1361', '33:1372', '33:1387', '33:1398', '33:1409', '33:1420'), 'clipUp', 450, 90, { on: N('33:1304'), dur: 1100 }],
      [ids('43:645', '43:641', '43:637', '43:633', '43:625', '43:620', '43:616', '43:612', '43:611'), 'pop', 1100, 90, { on: N('33:1304') }],
      ['count', ids('33:1332', '33:1348', '33:1359', '33:1370', '33:1384', '33:1396', '33:1407', '33:1418', '33:1429'), 700, 90, { on: N('33:1304') }],
      [ids('33:1432', '33:1436', '33:1439', '33:1442', '33:1445'), 'swingR', 300, 120, { on: N('33:1431'), dur: 1000 }],
      ...FOOT,
    ],
    features: [
      ...HEAD,
      [N('33:990'), 'clipX', 100], ['words', N('33:994'), 200, 0, { stagger: 70 }], [N('33:998'), 'curtain', 650, 0, { dur: 1100 }],
      [N('33:999'), 'blur', 850], [N('33:1002'), 'growX', 950],
      [ids('33:1007', '33:1008', '33:1009', '33:1010'), 'iris', 200, 120, { on: N('33:1006'), amb: 'amb-ripple', dur: 1400 }],
      [N('33:1011'), 'spiral', 500], [N('39:351'), 'pop', 650, 0, { amb: 'amb-breathe' }],
      ['draw', `${N('33:1024')} svg`, 700, 0, { on: N('33:1006'), dur: 1600 }],
      [N('34:567'), 'unblur', 300, 0, { dur: 1800, amb: 'amb-float-slow' }],
      [ids('34:532', '34:537', '34:542', '34:547', '34:552', '33:1076', '33:1084', '34:557', '34:562'), 'spiral', 900, 110, { on: N('33:1006'), amb: 'amb-float' }],
      [ids('33:1038', '33:1047', '33:1055', '33:1062', '33:1069', '33:1077', '33:1085', '33:1092', '33:1099'), 'rise3d', 1000, 110, { on: N('33:1006') }],
      ['draw', ids('33:1043', '33:1051', '33:1058', '33:1065', '33:1073', '33:1081', '33:1088', '33:1095', '33:1102').split(',').map(s => s + ' svg').join(','), 1300, 110, { on: N('33:1006') }],
      [ids('33:1105', '33:1130', '33:1151', '33:1172'), 'fade', 800, 150, { on: N('33:1006'), amb: 'amb-twinkle' }],
      ...FOOT,
    ],
    benchmarking: [
      ...HEAD,
      [N('33:1490'), 'clipX', 100], [N('33:1495'), 'growX', 300], ['letters', `${N('33:1498')} > *:not(.bg-clip-text)`, 250, 0, { stagger: 28 }],
      [`${N('33:1498')} > .bg-clip-text`, 'curtain', 900, 0, { dur: 1100 }],
      [N('33:1503'), 'blur', 800], [ids('33:1507', '33:1511', '33:1514'), 'swingL', 950, 120],
      [N('34:603'), 'unblur', 400, 0, { dur: 1700, amb: 'amb-drift' }],
      [N('33:1517'), 'rise3d', 300, 0, { dur: 1100 }],
      ['draw', `${N('33:1538')} svg`, 700, 0, { on: N('33:1517'), dur: 1500 }],
      ['count', N('33:1542'), 700, 0, { on: N('33:1517'), dur: 1500 }],
      [N('33:1545'), 'pop', 1900, 0, { on: N('33:1517') }],
      ['chart', N('33:1580'), 900, 0, { on: N('33:1517') }],
      [ids('33:1632', '33:1638'), 'pop', 2300, 120, { on: N('33:1517') }],
      [N('33:1641'), 'flip', 500, 0, { on: N('33:1517') }],
      [ids('33:1652', '33:1662', '33:1672', '33:1678', '33:1686'), 'growX', 900, 130, { on: N('33:1641'), dur: 1300 }],
      [ids('33:1663', '33:1673', '33:1679', '33:1687'), 'pop', 1800, 100, { on: N('33:1641') }],
      ['count', ids('33:1657', '33:1667', '33:1681', '33:1689'), 900, 130, { on: N('33:1641'), dur: 1300 }],
      [N('33:1699'), 'flip', 650, 0, { on: N('33:1517') }],
      ['draw', `${N('33:1702')} svg`, 1100, 0, { on: N('33:1517'), dur: 1500 }],
      ['count', N('33:1706'), 1100, 0, { on: N('33:1517'), dur: 1500 }],
      [N('33:1712'), 'swingL', 600, 0, { on: N('33:1517') }],
      [ids('33:1715', '33:1719', '33:1723'), 'spiral', 1000, 120, { on: N('33:1517') }],
      ['count', ids('33:1717', '33:1721'), 1000, 120, { on: N('33:1517') }],
      [ids('33:1733', '33:1744', '33:1752', '33:1760', '33:1768'), 'rise3d', 200, 110, { on: N('33:1732') }],
      [ids('33:1741', '33:1749', '33:1757', '33:1765', '33:1773'), 'growX', 800, 110, { on: N('33:1732') }],
      [N('34:598'), 'drop', 300, 0, { dur: 1400, amb: 'amb-float-slow' }],
      ...FOOT,
    ],
    about: [
      ...HEAD,
      [ids('33:637', '33:638', '33:639'), 'iris', 0, 180, { dur: 1700, amb: 'amb-ripple' }],
      [ids('34:491', '34:496', '34:501'), 'unblur', 500, 150, { dur: 1700, amb: 'amb-drift' }],
      [N('33:643'), 'clipX', 150], ['words', N('33:648'), 300, 0, { stagger: 60 }],
      [ids('33:652', '33:653', '33:654'), 'drop', 500, 140, { on: N('33:651') }],
      [N('33:655'), 'curtain', 950], [N('33:663'), 'blur', 1050],
      [N('33:667'), 'rise3d', 0, 0, { dur: 1100 }],
      [ids('33:669', '33:683', '33:692'), 'flip', 250, 170, { on: N('33:667'), dur: 1100 }],
      [ids('33:672', '33:685', '33:694'), 'spiral', 350, 170, { on: N('33:667'), amb: 'amb-float' }],
      [ids('33:678', '33:690', '33:699'), 'growX', 700, 150, { on: N('33:667') }],
      [ids('33:701', '33:704'), 'clipUp', 500, 150, { on: N('33:667') }],
      [N('33:706'), 'skew', 0, 0, { dur: 1000 }], [N('33:707'), 'up', 150, 0, { on: N('33:706') }],
      [ids('33:717', '33:728', '33:735', '33:742'), 'swingR', 300, 130, { on: N('33:706'), dur: 1000 }],
      [ids('33:718', '33:729', '33:736', '33:743'), 'pop', 450, 130, { on: N('33:706'), amb: 'amb-float' }],
      [ids('33:749', '33:750', '33:751'), 'clipUp', 600, 130, { on: N('33:706') }],
      [N('33:753'), 'curtain', 0, 0, { dur: 1200 }], [N('33:757'), 'spiral', 300, 0, { amb: 'amb-spin' }],
      [N('33:758'), 'rise3d', 400], [N('33:767'), 'pop', 600], [N('33:756'), 'fade', 400, 0, { amb: 'amb-drift' }],
      ...FOOT,
    ],
    contact: [
      ...HEAD,
      [ids('34:506', '34:511', '34:516'), 'unblur', 300, 150, { dur: 1700, amb: 'amb-drift' }],
      [N('33:819'), 'clipX', 100], [N('33:822'), 'growX', 300],
      [ids('33:827', '33:830'), 'skew', 250, 150, { on: N('33:825'), dur: 1000 }], [N('33:831'), 'curtain', 600, 0, { on: N('33:825'), dur: 1000 }],
      [N('33:834'), 'blur', 800],
      [ids('33:840', '33:846', '33:849'), 'drop', 950, 130, { on: N('33:839') }],
      [ids('33:841', '33:847', '33:850'), 'spiral', 1050, 130, { on: N('33:839'), amb: 'amb-float' }],
      [N('33:856'), 'rise3d', 250, 0, { dur: 1300 }], [N('33:859'), 'pop', 750, 0, { amb: 'amb-float' }],
      [`${N('33:865')} > * , ${N('33:885')} > *, ${N('33:895')} > *, ${N('33:905')} > *`, 'drop', 700, 70, { on: N('33:856') }],
      [`${N('33:915')}, ${N('34:531')}`, 'pop', 1300, 0, { on: N('33:856') }],
      [N('33:921'), 'curtain', 0, 0, { dur: 1100 }],
      [ids('33:924', '33:934', '33:939'), 'flip', 250, 150, { on: N('33:921') }],
      [ids('33:925', '33:935', '33:940'), 'spiral', 350, 150, { on: N('33:921') }],
      ...FOOT,
    ],
  };

  /* extra effects that aren't simple keyframes */
  function custom(kind, el, delay, opt) {
    if (kind === 'draw') return draw(el, delay, opt.dur);
    if (kind === 'count') return count(el, delay, opt.dur);
    if (kind === 'words') return words(el, delay, opt);
    if (kind === 'letters') return letters(el, delay, opt);
    if (kind === 'emit') return emit(el, delay, opt);
    if (kind === 'launch') return launch(el, delay);
    if (kind === 'chart') {
      el.removeAttribute('data-wait');
      const svg = el.querySelector('svg'); if (!svg || reduce) return;
      const paths = [...svg.querySelectorAll('path')];
      const area = paths.find(p => /url/.test(p.getAttribute('fill') || ''));
      const lines = paths.filter(p => p.getAttribute('stroke') && p.getAttribute('stroke') !== 'none');
      const dots = paths.filter(p => p !== area && !lines.includes(p));
      lines.forEach((p, i) => {
        const L = p.getTotalLength(); p.style.strokeDasharray = L;
        const a = p.animate([{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: 1600, delay: delay + i * 200, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'backwards' });
        a.onfinish = () => { a.cancel(); p.style.strokeDasharray = ''; };
      });
      if (area) { const a = area.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 900, delay: delay + 900, fill: 'backwards' }); a.onfinish = () => a.cancel(); }
      dots.forEach(p => {
        const bb = p.getBBox(); p.style.transformBox = 'fill-box'; p.style.transformOrigin = 'center';
        const a = p.animate([{ scale: '0' }, { scale: '1.6', offset: .6 }, { scale: '1' }], { duration: 500, delay: delay + 100 + (bb.x / 511) * 1500, easing: EASE, fill: 'backwards' });
        a.onfinish = () => a.cancel();
      });
      return;
    }
    if (kind === 'plane') {
      el.removeAttribute('data-wait');
      if (reduce) return;
      const a = el.animate([
        { opacity: 0, translate: '-160px 120px', rotate: '-18deg', scale: '.6' },
        { opacity: 1, translate: '-40px 20px', rotate: '-6deg', scale: '.95', offset: .6 },
        { opacity: 1, translate: '0 0', rotate: '0deg', scale: '1' }], { duration: 1500, delay, easing: EASE, fill: 'backwards' });
      a.onfinish = () => { a.cancel(); el.classList.add('amb-float'); };
    }
  }

  /* ---------- customer voices: the people talk, channels ping ---------- */
  const SAYS = {
    woman: ['Loved the quick service! ⭐⭐⭐⭐⭐', 'The staff were so kind 😊', 'Booking was really easy 👍', 'Waiting area was spotless ✨'],
    man: ['Wait time was too long ⏱️', 'Great follow-up call 📞', 'Clear answers, thank you 🙌', 'App feedback took 10 seconds ⚡'],
  };
  function voices() {
    const layer = $('.xv')[0]; if (!layer || reduce) return;
    const box = layer.querySelector('.xv-bubbles');
    const people = ['woman', 'man'].map(n => layer.querySelector(`[data-v="${n}"]`));
    const icons = [...layer.querySelectorAll('.xv-icon')];
    let turn = 0, said = { woman: 0, man: 0 };
    const talk = () => {
      const who = people[turn % 2]; turn++;
      if (!who) return;
      const name = who.dataset.v, lines = SAYS[name];
      people.forEach(p => p.classList.toggle('speaking', p === who));
      const b = document.createElement('div');
      b.className = 'xv-bubble ' + (name === 'man' ? 'left' : 'right');
      b.textContent = lines[said[name]++ % lines.length];
      // the woman sits at the top edge, so her words appear at her side; his rise above him
      const side = name === 'woman';
      const x = side ? who.offsetLeft + 14 : who.offsetLeft + who.offsetWidth / 2;
      const y = side ? who.offsetTop + who.offsetHeight * .42 : who.offsetTop + 10;
      b.style.left = x + 'px'; b.style.top = y + 'px';
      if (side) b.classList.add('side');
      box.appendChild(b);
      const tx = side ? '-100%' : '-50%';
      const a = b.animate([
        { opacity: 0, translate: `${tx} 10px`, scale: '.6' },
        { opacity: 1, translate: `${tx} -14px`, scale: '1', offset: .15 },
        { opacity: 1, translate: `${tx} -22px`, scale: '1', offset: .8 },
        { opacity: 0, translate: `${tx} -34px`, scale: '.96' }], { duration: 3200, easing: 'cubic-bezier(.16,1,.3,1)' });
      a.onfinish = () => b.remove();
      // a channel lights up a moment later, as if the feedback arrived through it
      later(() => {
        const ic = icons[Math.floor(Math.random() * icons.length)]; if (!ic) return;
        const badge = ic.querySelector('.xv-badge');
        badge.textContent = String((+badge.textContent || 0) + 1);
        badge.classList.remove('pop'); void badge.offsetWidth; badge.classList.add('pop');
        const r = ic.animate([{ scale: '1' }, { scale: '1.12', offset: .3 }, { scale: '1' }], { duration: 600, easing: 'ease-out' });
        r.onfinish = () => r.cancel();
      }, 900);
    };
    later(() => { talk(); const iv = setInterval(talk, 2300); loops.push(() => { clearInterval(iv); box.innerHTML = ''; people.forEach(p => p && p.classList.remove('speaking')); icons.forEach(i => { const b = i.querySelector('.xv-badge'); b.textContent = ''; b.classList.remove('pop'); }); }); }, 1900);
  }

  /* ---------- per-page particle flows & ambient extras ---------- */
  const AMBIENT = {
    home() {
      heartbeat();
      // channels -> engine, engine -> insights (hero diagram)
      const cx = 976, cy = 440, r = 128;
      const left = [198, 278.5, 359, 439.5, 520, 600.5], right = [198, 278, 359, 439, 520, 600];
      left.forEach((y, i) => {
        const a = Math.atan2(y - cy, 763 - cx), ex = cx + r * Math.cos(a), ey = cy + r * Math.sin(a);
        flow(`M763.5 ${y} C 820 ${y} ${ex - 70} ${ey} ${ex} ${ey}`, { color: SPEC[i], n: 1, speed: 2600, delay: 2400 + i * 380, r: 2.8 });
      });
      right.forEach((y, i) => {
        const a = Math.atan2(y - cy, 1196 - cx), sx = cx + r * Math.cos(a), sy = cy + r * Math.sin(a);
        flow(`M${sx} ${sy} C ${sx + 70} ${sy} 1140 ${y} 1196 ${y}`, { color: SPEC[8 - i], n: 1, speed: 2600, delay: 3400 + i * 380, r: 2.8 });
      });
      // feedback waves shimmer as if signals were flowing in
      $(N('33:457')).forEach(e => e.classList.add('x-shimmer'));
      voices();
    },
    platform() {
      const cx = 768, cy = 495;
      [297, 407, 515, 625].forEach((y, i) => {
        flow(`M386 ${y} C 560 ${y} 600 ${cy + (y - cy) * .25} 690 ${cy + (y - cy) * .12}`, { color: SPEC[5 + i], n: 2, speed: 3000, delay: 1200 + i * 300 });
        flow(`M846 ${cy + (y - cy) * .12} C 936 ${cy + (y - cy) * .25} 960 ${y} 1127 ${y}`, { color: SPEC[i], n: 2, speed: 3000, delay: 2000 + i * 300 });
      });
      flow(`M768 568 L768 642`, { color: '#E31E84', n: 1, speed: 1600, delay: 2400 });
      $(N('14:5') + ' > img').forEach(e => later(() => e.classList.add('x-kenburns'), 1900));
    },
    how() {
      const loop = 'M410 342 C 330 400 320 520 410 600 C 520 650 650 560 765 568 C 880 576 1000 640 1110 590 C 1190 540 1180 420 1100 360 C 1000 300 720 318 420 338';
      flow(loop, { color: '#9440A5', n: 3, speed: 9000, delay: 1600, r: 3.4 });
      flow(loop, { color: '#E31E84', n: 2, speed: 9000, delay: 3100, r: 2.6 });
      flow(loop, { color: '#49C0A1', n: 1, speed: 9000, delay: 5200, r: 2.4 });
    },
    features() {
      $(`${N('33:1024')} path[stroke]`).forEach((p, i) => flow(p, { color: SPEC[i % SPEC.length], n: 1, speed: 2400, delay: 2000 + i * 300, r: 2.4 }));
    },
    benchmarking() {
      later(() => { const t = $(N('33:1638'))[0]; t && t.classList.add('amb-ping'); }, 3000);
    },
  };

  /* ---------- images: every picture gets a life of its own ---------- */
  const IMG_SEL = '[data-name^="Image /"], [data-name^="Artwork /"]';
  const IMG_AMB = ['amb-float', 'amb-float-slow', 'amb-breathe'];
  function imageLife() {
    if (reduce) return;
    $(IMG_SEL).forEach((h, i) => {
      if (h.closest('.xf') || h.dataset.name.includes('Channel icon') || h.dataset.name.includes('Result icon')) return;
      const w = h.offsetWidth;
      if (w >= 400) { h.dataset.parallax = (i % 2 ? .06 : -.05).toString(); return; }
      if (w < 30) return;
      // ambient life starts once the entrance is over
      later(() => { if (![...h.classList].some(c => c.startsWith('amb-'))) h.classList.add(IMG_AMB[i % IMG_AMB.length]); }, 3200);
    });
  }

  /* ---------- run a page ---------- */
  function setup(p) {
    teardown();
    page = p;
    const name = p.dataset.page;
    const steps = P[name] || [];
    const groups = new Map();
    steps.forEach(st => {
      let [sel, fx, d = 0, s = 0, opt = {}] = st;
      let kind = null;
      if (KINDS.includes(sel) || sel === 'plane') { kind = sel; [sel, d, s, opt] = [fx, d, s, opt || {}]; fx = null; }
      else if (fx === 'plane') kind = 'plane';
      opt = opt || {};
      const els = $(sel);
      if (!els.length) return;
      const trig = (opt.on && $(opt.on)[0]) || els[0];
      if (!groups.has(trig)) groups.set(trig, []);
      if (kind === 'relay') {
        const hs = $(ids('33:345', '33:355', '33:363', '33:371', '33:379'));
        hs.forEach(h => { h.setAttribute('data-wait', '1'); [...h.parentElement.children].filter(c => c !== h).forEach(c => c.setAttribute('data-wait', '1')); });
        $(['33:350', '33:358', '33:366', '33:374'].map(i => N(i) + ' svg').join(',')).forEach(sv => sv.setAttribute('data-wait', 'draw'));
        groups.get(trig).push(() => relay(d));
        return;
      }
      if (kind === 'type') {
        els.forEach(el => el.setAttribute('data-wait', '1'));
        groups.get(trig).push(() => typeSeq(els, d));
        return;
      }
      els.forEach((el, i) => {
        if (kind !== 'count') el.setAttribute('data-wait', kind === 'draw' || kind === 'chart' ? 'draw' : '1');
        groups.get(trig).push(() => {
          const delay = d + i * s;
          if (kind) custom(kind, el, delay, opt);
          else play(el, fx, delay, opt.dur || 900, opt.amb ? (e => e.classList.add(opt.amb)) : null);
          if (kind && opt.amb) later(() => el.classList.add(opt.amb), delay + 1200);
        });
      });
    });
    const fired = new Set();
    const fire = t => { if (fired.has(t)) return; fired.add(t); io && io.unobserve(t); (groups.get(t) || []).forEach(j => j()); };
    io = new IntersectionObserver(ents => ents.forEach(en => { if (en.isIntersecting) fire(en.target); }), { rootMargin: '0px 0px -10% 0px', threshold: 0.01 });
    groups.forEach((_, t) => io.observe(t));
    // safety: nothing may stay hidden if a trigger never reports (e.g. a thumbnail render)
    later(() => groups.forEach((_, t) => fire(t)), 12000);
    headIn();
    later(() => { AMBIENT[name] && AMBIENT[name](); imageLife(); onScroll(); }, 50);
  }
  function teardown() {
    timers.forEach(clearTimeout); timers = [];
    loops.forEach(f => f()); loops = [];
    if (io) io.disconnect(); io = null;
    flows.forEach(f => f.g.remove()); flows = [];
    countNodes.forEach(n => { if (n._orig) n.nodeValue = n._orig; }); countNodes = [];
    if (page) {
      $('.flow-layer, .x-caret, .xconf, .x-ripple').forEach(s => s.remove());
      $('.xc').forEach(c => (c.style.opacity = ''));
      $('[data-wait]').forEach(e => e.removeAttribute('data-wait'));
      $('[class*="amb-"], .x-tilt, .x-shimmer, .x-kenburns, .x-sheen-text').forEach(e => [...e.classList].filter(c => c.startsWith('amb-') || ['x-tilt', 'x-shimmer', 'x-kenburns', 'x-sheen-text'].includes(c)).forEach(c => e.classList.remove(c)));
      $('[data-parallax]').forEach(e => { e.style.transform = ''; delete e.dataset.parallax; });
      page.getAnimations({ subtree: true }).forEach(a => { if (!(a instanceof CSSAnimation) && !(a instanceof CSSTransition)) a.cancel(); });
    }
    page = null;
  }

  window.EIP.on('enter', setup);
  window.EIP.on('leave', () => teardown());
  document.addEventListener('visibilitychange', () => { if (!document.hidden && flows.length && !raf) raf = requestAnimationFrame(tick); });

  /* ---------- scroll: progress bar + parallax ---------- */
  const bar = document.getElementById('progress');
  let sTick = 0;
  function onScroll() {
    sTick = 0;
    const max = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
    if (!page || reduce) return;
    $('[data-parallax]').forEach(e => {
      const r = e.getBoundingClientRect();
      const off = (r.top + r.height / 2 - innerHeight / 2) * parseFloat(e.dataset.parallax);
      e.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
    });
  }
  addEventListener('scroll', () => { if (!sTick) sTick = requestAnimationFrame(onScroll); }, { passive: true });
  addEventListener('resize', onScroll);

  /* ---------- pointer: magnetic buttons ---------- */
  let magnet = null;
  document.addEventListener('pointermove', e => {
    if (reduce) return;
    const m = e.target.closest('.btn-cta, .xbtn, .xbtn-ghost');
    if (magnet && magnet !== m) { magnet.style.translate = ''; magnet = null; }
    if (m) {
      const r = m.getBoundingClientRect();
      m.style.translate = `${((e.clientX - r.left - r.width / 2) * .18).toFixed(1)}px ${((e.clientY - r.top - r.height / 2) * .3).toFixed(1)}px`;
      magnet = m;
    }
  }, { passive: true });

  /* ---------- contact form: validation, send, message sent view ---------- */
  function confetti(host) {
    for (let i = 0; i < 34; i++) {
      const c = document.createElement('i');
      c.className = 'xconf';
      c.style.background = SPEC[i % SPEC.length];
      if (i % 3 === 0) c.style.borderRadius = '50%';
      host.appendChild(c);
      const a = Math.random() * Math.PI * 2, d = 110 + Math.random() * 170;
      const an = c.animate([
        { translate: '0 0', rotate: '0deg', opacity: 1, scale: '.4' },
        { translate: `${Math.cos(a) * d}px ${Math.sin(a) * d * .7 - 40}px`, rotate: `${Math.random() * 540 - 270}deg`, opacity: 1, scale: '1', offset: .55 },
        { translate: `${Math.cos(a) * d * 1.15}px ${Math.sin(a) * d * .7 + 90}px`, rotate: `${Math.random() * 720 - 360}deg`, opacity: 0, scale: '.8' }],
        { duration: 1500 + Math.random() * 700, delay: Math.random() * 120, easing: 'cubic-bezier(.2,.7,.4,1)' });
      an.onfinish = () => c.remove();
    }
  }
  function showSent(card) {
    card.classList.add('is-sent');
    document.querySelectorAll(N('34:531') + ',' + N('33:919')).forEach(pl => pl.classList.add('x-hide'));
    const v = card.querySelector('.xsuccess');
    v.setAttribute('aria-hidden', 'false');
    if (reduce) return;
    const disc = v.querySelector('.xs-disc'), ring = v.querySelector('.xs-ring'), check = v.querySelector('.xs-check');
    ring.animate([{ scale: '.2', opacity: 0 }, { scale: '1', opacity: 1 }], { duration: 700, delay: 150, easing: BOUNCE, fill: 'backwards' });
    disc.animate([{ scale: '0', rotate: '-90deg' }, { scale: '1.12', rotate: '6deg', offset: .7 }, { scale: '1', rotate: '0deg' }], { duration: 800, delay: 250, easing: BOUNCE, fill: 'backwards' });
    const L = check.getTotalLength(); check.style.strokeDasharray = L;
    check.animate([{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: 600, delay: 800, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'backwards' });
    setTimeout(() => confetti(v.querySelector('.xs-icon')), 850);
    [...v.children].slice(1).forEach((c, i) => c.animate([{ opacity: 0, translate: '0 24px', filter: 'blur(6px)' }, { opacity: 1, translate: '0 0', filter: 'blur(0)' }], { duration: 800, delay: 650 + i * 110, easing: EASE, fill: 'backwards' }));
    v.querySelector('.xs-ring2').classList.add('go');
  }
  function resetForm(card) {
    const v = card.querySelector('.xsuccess');
    v.querySelector('.xs-ring2').classList.remove('go');
    card.classList.remove('is-sent');
    v.setAttribute('aria-hidden', 'true');
    document.querySelectorAll(N('34:531') + ',' + N('33:919')).forEach(pl => pl.classList.remove('x-hide'));
    if (reduce) return;
    [...card.children].filter(c => c !== v).forEach((c, i) => c.animate([{ opacity: 0, translate: '0 -24px' }, { opacity: 1, translate: '0 0' }], { duration: 700, delay: 150 + i * 90, easing: EASE, fill: 'backwards' }));
  }
  document.addEventListener('click', e => {
    const rs = e.target.closest('[data-reset]');
    if (rs) { e.preventDefault(); resetForm(rs.closest('.x-formcard')); return; }
    const btn = e.target.closest('[data-send]'); if (!btn) return;
    const form = btn.closest('[data-page="contact"]');
    const card = btn.closest('.x-formcard');
    const boxes = [...form.querySelectorAll('.field-box')];
    let bad = 0;
    boxes.forEach(b => {
      const c = b.querySelector('.field-control');
      const ok = c && c.value.trim() && (c.type !== 'email' || /.+@.+\..+/.test(c.value));
      b.classList.toggle('bad', !ok); if (!ok) bad++;
    });
    if (bad) { window.EIP.say(`Please complete ${bad} more field${bad > 1 ? 's' : ''}`); return; }
    const plane = form.querySelector(N('34:531'));
    btn.classList.add('sending');
    if (plane && !reduce) plane.animate([
      { translate: '0 0', rotate: '0deg', opacity: 1 },
      { translate: '120px -14px', rotate: '-12deg', opacity: 1, offset: .5 },
      { translate: '520px -60px', rotate: '-20deg', opacity: 0 }], { duration: 1100, easing: 'cubic-bezier(.5,0,.75,0)' })
      .onfinish = () => plane.animate([{ opacity: 0, translate: '-40px 0' }, { opacity: 1, translate: '0 0' }], { duration: 500, easing: EASE });
    setTimeout(() => {
      btn.classList.remove('sending');
      boxes.forEach(b => { const c = b.querySelector('.field-control'); c.value = ''; });
      showSent(card);
    }, 1150);
  });
  document.addEventListener('input', e => { const b = e.target.closest('.field-box'); b && b.classList.remove('bad'); });
  window.EIP.showSent = () => { const c = document.querySelector('.x-formcard'); c && showSent(c); };
})();
