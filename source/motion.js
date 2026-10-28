/* ===== EIP motion layer =====
   Rule: every entrance animation ends exactly at the Figma position. We only animate
   opacity, clip-path, stroke-dashoffset and the independent `translate`/`scale`
   properties, then remove the animation, so layout is never touched. */
(() => {
  if (document.body.classList.contains('static-mode')) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EASE = 'cubic-bezier(.16,1,.3,1)';
  const SVGNS = 'http://www.w3.org/2000/svg';
  let page = null, io = null, raf = 0, flows = [], timers = [];

  const $ = (sel, root = page) => root ? [...root.querySelectorAll(sel)] : [];
  const N = id => `[data-node-id="${id}"]`;
  const nm = n => `[data-name="${n}"]`;
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));

  /* ---------- entrance effects ---------- */
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
  };
  const ORIGIN = { growX: 'left center', clipUp: 'bottom', pop: 'center' };

  function play(el, fx, delay = 0, dur = 900, then) {
    if (!el) return;
    el.removeAttribute('data-wait');
    if (reduce) { then && then(el); return; }
    if (ORIGIN[fx]) el.style.transformOrigin = ORIGIN[fx];
    const a = el.animate(FX[fx], { duration: dur, delay, easing: fx === 'pop' ? 'cubic-bezier(.34,1.56,.64,1)' : EASE, fill: 'backwards' });
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
  function count(el, delay = 0, dur = 1400) {
    if (!el) return;
    const node = [...el.querySelectorAll('*')].concat(el).map(e => [...e.childNodes].find(n => n.nodeType === 3 && /\d/.test(n.nodeValue))).find(Boolean);
    if (!node || reduce) return;
    const orig = node.nodeValue;
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
  let countNodes = [];

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
  /* path: SVGPathElement (existing) or a 'd' string drawn into the page overlay */
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
      g.style.color = color;
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

  /* ---------- per-page choreography ----------
     each step: [selector(s), effect, delay, stagger, opts]
     opts.on = trigger selector (defaults to first target) ; opts.amb = ambient class after */
  const HEAD = [[`${nm('Header')} > *`, 'down', 0, 90]];
  const P = {
    home: [
      ...HEAD,
      [N('33:159'), 'up', 100], [N('33:169'), 'blur', 200], [N('33:173'), 'clipX', 520, 0, { dur: 1100 }],
      [N('33:175'), 'up', 760], [`${N('33:178')}, ${N('33:182')}`, 'up', 900, 110],
      [N('41:460'), 'zoom', 250, 0, { dur: 1400, amb: 'amb-breathe' }],
      [`${N('41:466')},${N('41:472')},${N('41:478')},${N('41:484')},${N('41:490')},${N('41:496')}`, 'left', 600, 90],
      [`${N('41:469')},${N('41:475')},${N('41:481')},${N('41:487')},${N('41:493')},${N('41:499')}`, 'right', 700, 90],
      [N('33:324'), 'up', 0], [N('34:614'), 'blur', 100], [N('33:332'), 'growX', 450], [N('33:340'), 'up', 500],
      [`${N('33:343')},${N('33:354')},${N('33:362')},${N('33:370')},${N('33:378')}`, 'up', 150, 160, { on: N('33:343') }],
      [`${N('33:345')},${N('33:355')},${N('33:363')},${N('33:371')},${N('33:379')}`, 'pop', 250, 160, { on: N('33:343'), amb: 'amb-halo' }],
      ['draw', `${N('33:350')} svg,${N('33:358')} svg,${N('33:366')} svg,${N('33:374')} svg`, 600, 160, { on: N('33:343') }],
      [N('33:387'), 'up', 0], [N('33:391'), 'blur', 100], [N('33:395'), 'clipX', 650, 0, { dur: 1300 }], [N('33:399'), 'up', 850],
      ['draw', `${N('33:400')} svg`, 1500, 0, { on: N('33:391') }],
      [N('33:384'), 'fade', 200, 0, { dur: 1600, amb: 'amb-drift' }],
      [`${N('33:402')},${N('33:414')},${N('33:421')},${N('33:428')},${N('33:435')},${N('33:442')}`, 'up', 200, 120, { on: N('33:402') }],
      [`${N('33:404')},${N('33:415')},${N('33:422')},${N('33:429')},${N('33:436')},${N('33:443')}`, 'pop', 300, 120, { on: N('33:402'), amb: 'amb-float' }],
      ['draw', `${N('33:412')} svg,${N('33:419')} svg,${N('33:426')} svg,${N('33:433')} svg,${N('33:440')} svg,${N('33:447')} svg`, 700, 120, { on: N('33:402') }],
      ['draw', `${N('33:449')} svg,${N('33:451')} svg,${N('33:453')} svg`, 1100, 200, { on: N('33:402') }],
      [N('33:458'), 'fade', 0, 0, { dur: 1400, amb: 'amb-float-slow' }], [N('33:457'), 'left', 200],
      [N('33:459'), 'up', 0], [`${N('33:470')},${N('33:480')},${N('33:486')}`, 'up', 350, 120, { on: N('33:459') }],
      [N('33:493'), 'zoom', 0, 0, { dur: 1000 }], [N('33:497'), 'pop', 300, 0, { amb: 'amb-rocket' }],
      [N('33:498'), 'up', 350], [N('33:503'), 'up', 500],
      [`${N('33:509')},${N('33:539')},${N('33:549')},${N('33:555')},${N('33:561')},${N('33:567')},${N('33:572')}`, 'up', 0, 70, { on: N('33:509') }],
    ],
    platform: [
      ...HEAD,
      [N('14:5') + ' > img', 'fade', 0, 0, { dur: 1600 }],
      [`${N('14:33510')} > *`, 'up', 150, 140],
      [`${N('14:33517')},${N('14:33525')},${N('14:33532')},${N('14:33539')}`, 'left', 500, 110, { on: N('14:33516') }],
      [`${N('14:33563')},${N('14:33570')},${N('14:33577')},${N('14:33584')}`, 'right', 560, 110, { on: N('14:33562') }],
      [N('14:33548'), 'zoom', 300, 0, { dur: 1200 }], [N('14:33556'), 'up', 900],
      [`${N('14:33592')},${N('14:33602')},${N('14:33611')},${N('14:33620')},${N('14:33629')}`, 'up', 200, 120, { on: N('14:33591') }],
      ['count', `${N('I14:33592;13:13474')},${N('I14:33611;13:13474')}`, 400, 240, { on: N('14:33591') }],
    ],
    how: [
      ...HEAD,
      [`${N('33:1228')} > *`, 'up', 100, 130], [N('33:1237'), 'up', 450],
      [N('34:578'), 'fade', 300, 0, { dur: 1600 }],
      [N('34:593'), 'plane', 700],
      [`${N('33:1253')},${N('33:1264')},${N('33:1272')},${N('33:1280')},${N('33:1288')},${N('33:1296')}`, 'up', 600, 180, { on: N('33:1253') }],
      [`${N('33:1244')},${N('33:1247')},${N('33:1248')},${N('33:1249')},${N('33:1250')}`, 'pop', 1300, 110, { on: N('33:1242') }],
      [N('33:1305'), 'fade', 100, 0, { dur: 1200, on: N('33:1304') }],
      [`${N('34:583')},${N('34:588')}`, 'fade', 200, 200, { on: N('33:1304') }],
      [N('33:1308'), 'up', 300, 0, { on: N('33:1304') }],
      [`${N('33:1313')},${N('33:1316')}`, 'zoom', 300, 80, { on: N('33:1304') }],
      [`${N('33:1317')},${N('33:1339')},${N('33:1350')},${N('33:1361')},${N('33:1372')},${N('33:1387')},${N('33:1398')},${N('33:1409')},${N('33:1420')}`, 'clipUp', 450, 90, { on: N('33:1304'), dur: 1100 }],
      [`${N('43:645')},${N('43:641')},${N('43:637')},${N('43:633')},${N('43:625')},${N('43:620')},${N('43:616')},${N('43:612')},${N('43:611')}`, 'pop', 1100, 90, { on: N('33:1304') }],
      ['count', `${N('33:1332')},${N('33:1348')},${N('33:1359')},${N('33:1370')},${N('33:1384')},${N('33:1396')},${N('33:1407')},${N('33:1418')},${N('33:1429')}`, 700, 90, { on: N('33:1304') }],
      [`${N('33:1432')},${N('33:1436')},${N('33:1439')},${N('33:1442')},${N('33:1445')}`, 'right', 300, 110, { on: N('33:1431') }],
    ],
    features: [
      ...HEAD,
      [N('33:990'), 'up', 100], [N('33:994'), 'blur', 200], [N('33:998'), 'clipX', 600, 0, { dur: 1100 }],
      [N('33:999'), 'up', 800], [N('33:1002'), 'growX', 900],
      [`${N('33:1007')},${N('33:1008')},${N('33:1009')},${N('33:1010')}`, 'zoom', 200, 100, { on: N('33:1006'), amb: 'amb-ripple' }],
      [N('33:1011'), 'pop', 500], [N('39:351'), 'pop', 650, 0, { amb: 'amb-breathe' }],
      ['draw', `${N('33:1024')} svg`, 700, 0, { on: N('33:1006'), dur: 1600 }],
      [N('34:567'), 'fade', 300, 0, { dur: 1600, amb: 'amb-float-slow' }],
      [`${N('34:532')},${N('34:537')},${N('34:542')},${N('34:547')},${N('34:552')},${N('33:1076')},${N('33:1084')},${N('34:557')},${N('34:562')}`, 'pop', 900, 110, { on: N('33:1006'), amb: 'amb-float' }],
      [`${N('33:1038')},${N('33:1047')},${N('33:1055')},${N('33:1062')},${N('33:1069')},${N('33:1077')},${N('33:1085')},${N('33:1092')},${N('33:1099')}`, 'up', 1000, 110, { on: N('33:1006') }],
      ['draw', `${N('33:1043')} svg,${N('33:1051')} svg,${N('33:1058')} svg,${N('33:1065')} svg,${N('33:1073')} svg,${N('33:1081')} svg,${N('33:1088')} svg,${N('33:1095')} svg,${N('33:1102')} svg`, 1300, 110, { on: N('33:1006') }],
      [`${N('33:1105')},${N('33:1130')},${N('33:1151')},${N('33:1172')}`, 'fade', 800, 150, { on: N('33:1006'), amb: 'amb-twinkle' }],
    ],
    benchmarking: [
      ...HEAD,
      [N('33:1490'), 'up', 100], [N('33:1495'), 'growX', 300], [`${N('33:1498')} > *`, 'blur', 250, 220],
      [N('33:1503'), 'up', 700], [`${N('33:1507')},${N('33:1511')},${N('33:1514')}`, 'left', 850, 110],
      [N('34:603'), 'fade', 400, 0, { dur: 1500, amb: 'amb-drift' }],
      [N('33:1517'), 'zoom', 300, 0, { dur: 1000 }],
      ['draw', `${N('33:1538')} svg`, 700, 0, { on: N('33:1517'), dur: 1500 }],
      ['count', N('33:1542'), 700, 0, { on: N('33:1517'), dur: 1500 }],
      [N('33:1545'), 'pop', 1900, 0, { on: N('33:1517') }],
      ['chart', N('33:1580'), 900, 0, { on: N('33:1517') }],
      [`${N('33:1632')},${N('33:1638')}`, 'pop', 2300, 120, { on: N('33:1517') }],
      [N('33:1641'), 'up', 500, 0, { on: N('33:1517') }],
      [`${N('33:1652')},${N('33:1662')},${N('33:1672')},${N('33:1678')},${N('33:1686')}`, 'growX', 900, 130, { on: N('33:1641'), dur: 1300 }],
      [`${N('33:1663')},${N('33:1673')},${N('33:1679')},${N('33:1687')}`, 'pop', 1800, 100, { on: N('33:1641') }],
      ['count', `${N('33:1657')},${N('33:1667')},${N('33:1681')},${N('33:1689')}`, 900, 130, { on: N('33:1641'), dur: 1300 }],
      [N('33:1699'), 'up', 650, 0, { on: N('33:1517') }],
      ['draw', `${N('33:1702')} svg`, 1100, 0, { on: N('33:1517'), dur: 1500 }],
      ['count', N('33:1706'), 1100, 0, { on: N('33:1517'), dur: 1500 }],
      [N('33:1712'), 'left', 600, 0, { on: N('33:1517') }],
      [`${N('33:1715')},${N('33:1719')},${N('33:1723')}`, 'pop', 1000, 120, { on: N('33:1517') }],
      ['count', `${N('33:1717')},${N('33:1721')}`, 1000, 120, { on: N('33:1517') }],
      [`${N('33:1733')},${N('33:1744')},${N('33:1752')},${N('33:1760')},${N('33:1768')}`, 'up', 200, 110, { on: N('33:1732') }],
      [`${N('33:1741')},${N('33:1749')},${N('33:1757')},${N('33:1765')},${N('33:1773')}`, 'growX', 800, 110, { on: N('33:1732') }],
      [N('34:598'), 'up', 300, 0, { dur: 1400, amb: 'amb-float-slow' }],
    ],
    about: [
      ...HEAD,
      [`${N('33:637')},${N('33:638')},${N('33:639')}`, 'zoom', 0, 150, { dur: 1600, amb: 'amb-ripple' }],
      [`${N('34:491')},${N('34:496')},${N('34:501')}`, 'fade', 500, 150, { dur: 1600, amb: 'amb-drift' }],
      [N('33:643'), 'up', 150], [N('33:648'), 'blur', 300],
      [`${N('33:652')},${N('33:653')},${N('33:654')}`, 'up', 500, 140, { on: N('33:651') }],
      [N('33:655'), 'clipX', 950], [N('33:663'), 'up', 1050],
      [N('33:667'), 'up', 0, 0, { dur: 1000 }],
      [`${N('33:669')},${N('33:683')},${N('33:692')}`, 'up', 200, 150, { on: N('33:667') }],
      [`${N('33:672')},${N('33:685')},${N('33:694')}`, 'pop', 300, 150, { on: N('33:667'), amb: 'amb-float' }],
      [`${N('33:678')},${N('33:690')},${N('33:699')}`, 'growX', 650, 150, { on: N('33:667') }],
      [`${N('33:701')},${N('33:704')}`, 'clipUp', 500, 150, { on: N('33:667') }],
      [N('33:706'), 'up', 0, 0, { dur: 1000 }], [N('33:707'), 'up', 150, 0, { on: N('33:706') }],
      [`${N('33:717')},${N('33:728')},${N('33:735')},${N('33:742')}`, 'up', 300, 130, { on: N('33:706') }],
      [`${N('33:718')},${N('33:729')},${N('33:736')},${N('33:743')}`, 'pop', 400, 130, { on: N('33:706'), amb: 'amb-float' }],
      [`${N('33:749')},${N('33:750')},${N('33:751')}`, 'clipUp', 600, 130, { on: N('33:706') }],
      [N('33:753'), 'zoom', 0, 0, { dur: 1000 }], [N('33:757'), 'pop', 250, 0, { amb: 'amb-spin' }],
      [N('33:758'), 'up', 350], [N('33:767'), 'up', 500], [N('33:756'), 'fade', 400, 0, { amb: 'amb-drift' }],
    ],
    contact: [
      ...HEAD,
      [`${N('34:506')},${N('34:511')},${N('34:516')}`, 'fade', 300, 150, { dur: 1600, amb: 'amb-drift' }],
      [N('33:819'), 'up', 100], [N('33:822'), 'growX', 300],
      [`${N('33:827')},${N('33:830')},${N('33:831')}`, 'blur', 250, 150, { on: N('33:825') }],
      [N('33:834'), 'up', 700],
      [`${N('33:840')},${N('33:846')},${N('33:849')}`, 'up', 850, 120, { on: N('33:839') }],
      [`${N('33:841')},${N('33:847')},${N('33:850')}`, 'pop', 950, 120, { on: N('33:839'), amb: 'amb-float' }],
      [N('33:856'), 'right', 250, 0, { dur: 1100 }], [N('33:859'), 'pop', 650, 0, { amb: 'amb-float' }],
      [`${N('33:865')} > * , ${N('33:885')} > *, ${N('33:895')} > *, ${N('33:905')} > *`, 'up', 600, 70, { on: N('33:856') }],
      [`${N('33:915')}, ${N('34:531')}`, 'up', 1200, 0, { on: N('33:856') }],
      [N('33:921'), 'up', 0, 0, { dur: 1000 }],
      [`${N('33:924')},${N('33:934')},${N('33:939')}`, 'up', 200, 130, { on: N('33:921') }],
      [`${N('33:925')},${N('33:935')},${N('33:940')}`, 'pop', 300, 130, { on: N('33:921') }],
    ],
  };

  /* extra effects that aren't simple keyframes */
  function custom(kind, el, delay, opt) {
    if (kind === 'draw') return draw(el, delay, opt.dur);
    if (kind === 'count') return count(el, delay, opt.dur);
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

  /* ---------- per-page particle flows & ambient extras ---------- */
  const AMBIENT = {
    home() {
      // channels -> engine, engine -> insights (hero diagram)
      const cx = 976, cy = 440, r = 128;
      const left = [198, 278.5, 359, 439.5, 520, 600.5], right = [198, 278, 359, 439, 520, 600];
      const cols = ['#7c23f8', '#3e64f0', '#2fb28a', '#e5394d', '#6c2be0', '#f2802c'];
      left.forEach((y, i) => {
        const a = Math.atan2(y - cy, 763 - cx), ex = cx + r * Math.cos(a), ey = cy + r * Math.sin(a);
        flow(`M763.5 ${y} C 820 ${y} ${ex - 70} ${ey} ${ex} ${ey}`, { color: cols[i], n: 1, speed: 2600, delay: 1400 + i * 380, r: 2.8 });
      });
      right.forEach((y, i) => {
        const a = Math.atan2(y - cy, 1196 - cx), sx = cx + r * Math.cos(a), sy = cy + r * Math.sin(a);
        flow(`M${sx} ${sy} C ${sx + 70} ${sy} 1140 ${y} 1196 ${y}`, { color: ['#2d6cf0', '#18b56a', '#7c3bea', '#f08a24', '#e8237f', '#2563eb'][i], n: 1, speed: 2600, delay: 2700 + i * 380, r: 2.8 });
      });
      // process connectors: pulse rides the real connector lines, step to step
      $(`${N('33:350')} path[stroke],${N('33:358')} path[stroke],${N('33:366')} path[stroke],${N('33:374')} path[stroke]`).forEach((p, i) =>
        flow(p, { color: ['#3c6fe8', '#20b3a6', '#8b45e6', '#e8459d'][i], n: 1, speed: 2200, delay: 1600 + i * 550, r: 2.6 }));
    },
    platform() {
      const cx = 768, cy = 495;
      [297, 407, 515, 625].forEach((y, i) => {
        flow(`M386 ${y} C 560 ${y} 600 ${cy + (y - cy) * .25} 690 ${cy + (y - cy) * .12}`, { color: ['#6b4cf0', '#7c3bea', '#22a8c9', '#20b39a'][i], n: 2, speed: 3000, delay: 1200 + i * 300 });
        flow(`M846 ${cy + (y - cy) * .12} C 936 ${cy + (y - cy) * .25} 960 ${y} 1127 ${y}`, { color: ['#7c23f8', '#e8379d', '#f0812e', '#f08a3a'][i], n: 2, speed: 3000, delay: 2000 + i * 300 });
      });
      flow(`M768 568 L768 642`, { color: '#e8379d', n: 1, speed: 1600, delay: 2400 });
    },
    how() {
      // the journey loop: launch -> reach -> respond -> understand -> compare -> discover -> back
      const loop = 'M410 342 C 330 400 320 520 410 600 C 520 650 650 560 765 568 C 880 576 1000 640 1110 590 C 1190 540 1180 420 1100 360 C 1000 300 720 318 420 338';
      flow(loop, { color: '#7c23f8', n: 3, speed: 9000, delay: 1600, r: 3.4 });
      flow(loop, { color: '#e8379d', n: 2, speed: 9000, delay: 3100, r: 2.6 });
    },
    features() {
      $(`${N('33:1024')} path[stroke]`).forEach((p, i) => flow(p, { color: '#6527f0', n: 1, speed: 2400, delay: 2000 + i * 300, r: 2.4 }));
    },
    benchmarking() {
      later(() => { const t = $(N('33:1638'))[0]; t && t.classList.add('amb-ping'); }, 3000);
    },
  };

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
      if (['draw', 'count', 'chart'].includes(sel)) { kind = sel; [sel, d, s, opt] = [fx, d, s, opt]; fx = null; }
      else if (fx === 'plane') kind = 'plane';
      const els = $(sel);
      if (!els.length) return;
      const trig = (opt.on && $(opt.on)[0]) || els[0];
      els.forEach((el, i) => {
        if (kind !== 'count') el.setAttribute('data-wait', kind === 'draw' || kind === 'chart' ? 'draw' : '1');
        const job = () => {
          const delay = d + i * s;
          if (kind) custom(kind, el, delay, opt);
          else play(el, fx, delay, opt.dur || 900, opt.amb ? (e => e.classList.add(opt.amb)) : null);
          if (kind && opt.amb) later(() => el.classList.add(opt.amb), delay + 1200);
        };
        if (!groups.has(trig)) groups.set(trig, []);
        groups.get(trig).push(job);
      });
    });
    const fired = new Set();
    const fire = t => { if (fired.has(t)) return; fired.add(t); io && io.unobserve(t); (groups.get(t) || []).forEach(j => j()); };
    io = new IntersectionObserver(ents => ents.forEach(en => { if (en.isIntersecting) fire(en.target); }), { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });
    groups.forEach((_, t) => io.observe(t));
    // safety: nothing may stay hidden if a trigger never reports (e.g. a thumbnail render)
    later(() => groups.forEach((_, t) => fire(t)), 9000);
    // ambient + particles once the page has settled
    later(() => AMBIENT[name] && AMBIENT[name](), 50);
  }
  function teardown() {
    timers.forEach(clearTimeout); timers = [];
    if (io) io.disconnect(); io = null;
    flows.forEach(f => f.g.remove()); flows = [];
    countNodes.forEach(n => { if (n._orig) n.nodeValue = n._orig; }); countNodes = [];
    if (page) {
      $('.flow-layer').forEach(s => s.remove());
      $('[data-wait]').forEach(e => e.removeAttribute('data-wait'));
      $('[class*="amb-"]').forEach(e => [...e.classList].filter(c => c.startsWith('amb-')).forEach(c => e.classList.remove(c)));
      page.getAnimations({ subtree: true }).forEach(a => { if (!(a instanceof CSSAnimation) && !(a instanceof CSSTransition)) a.cancel(); });
    }
    page = null;
  }

  window.EIP.on('enter', setup);
  window.EIP.on('leave', () => teardown());
  document.addEventListener('visibilitychange', () => { if (!document.hidden && flows.length && !raf) raf = requestAnimationFrame(tick); });

  /* ---------- contact form: validation + send animation ---------- */
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-send]'); if (!btn) return;
    const form = btn.closest('[data-page="contact"]');
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
      window.EIP.say('Message sent — our team will reply quickly');
    }, 1150);
  });
  document.addEventListener('input', e => { const b = e.target.closest('.field-box'); b && b.classList.remove('bad'); });
})();
