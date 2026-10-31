(() => {
  const stage = document.getElementById('stage');
  const viewport = document.getElementById('viewport');
  const pages = [...document.querySelectorAll('.page')];
  const STATIC = document.body.classList.contains('static-mode');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = null;
  let scale = 1;
  /* phones get the mobile design (390px frames), everything wider the desktop design (1536px) */
  const MQ = matchMedia('(max-width: 767px)');
  const isM = () => MQ.matches;
  const base = () => (isM() ? 390 : 1536);

  /* ---------- scale the 1536px canvas to the window ---------- */
  function fit() {
    if (STATIC) return;
    const B = base();
    document.body.classList.toggle('is-mobile', isM());
    stage.style.width = B + 'px';
    scale = isM() ? window.innerWidth / B : (Math.min(1, window.innerWidth / B) || 1);
    if (window.innerWidth > B) scale = window.innerWidth / B;
    stage.style.transform = `scale(${scale})`;
    navbar.style.setProperty('--s', scale);
    navbar.style.setProperty('--w', B + 'px');
    mmenu.style.setProperty('--s', scale);
    const p = current || pages[0];
    viewport.style.height = (p.offsetHeight * scale) + 'px';
  }
  window.addEventListener('resize', fit);

  /* ---------- floating nav bar ----------
     the page header is cloned into a fixed bar outside the scaled stage, so it can stick to the
     top of the window: it slides away while you scroll down and glides back when you scroll up */
  const navbar = document.createElement('div');
  navbar.id = 'navbar';
  document.body.appendChild(navbar);
  function buildNav(p) {
    const h = p.querySelector('.site-header'); if (!h) return;
    const c = h.cloneNode(true);
    c.classList.add('nav-clone');
    c.querySelectorAll('[data-wait]').forEach(e => e.removeAttribute('data-wait'));
    h.classList.add('nav-orig');
    navbar.replaceChildren(c);
    navbar.classList.remove('hidden', 'scrolled');
  }
  let lastY = 0, acc = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY, dy = y - lastY; lastY = y;
    navbar.classList.toggle('scrolled', y > 8);
    acc = Math.sign(dy) === Math.sign(acc) ? acc + dy : dy;
    if (y < 120 || acc < -6) navbar.classList.remove('hidden');
    else if (acc > 10) navbar.classList.add('hidden');
  }, { passive: true });

  /* ---------- toast ---------- */
  const toast = document.getElementById('toast');
  let tt;
  function say(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(tt);
    tt = setTimeout(() => toast.classList.remove('show'), 2400);
  }

  /* ---------- routing with a gradient wipe ---------- */
  const wipe = document.getElementById('wipe');
  const hooks = { enter: [], leave: [] };
  window.EIP = { on: (ev, fn) => hooks[ev].push(fn), say, get scale() { return scale; } };

  let currentName = 'home';
  function show(name, instant) {
    currentName = name;
    const next = document.getElementById((isM() ? 'page-m-' : 'page-') + name) || document.getElementById(isM() ? 'page-m-home' : 'page-home');
    closeM();
    if (next === current) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const swap = () => {
      if (current) { current.classList.remove('is-active'); hooks.leave.forEach(f => f(current)); }
      current = next;
      next.classList.add('is-active');
      buildNav(next);
      window.scrollTo(0, 0);
      fit();
      hooks.enter.forEach(f => f(next));
    };
    if (instant || reduce || STATIC) { swap(); return; }
    wipe.className = 'in';
    setTimeout(() => { swap(); wipe.className = 'out'; setTimeout(() => (wipe.className = ''), 650); }, 470);
  }
  function route() { show((location.hash || '#home').slice(1), !current); }
  // crossing the phone / desktop breakpoint swaps to the other design of the same page
  MQ.addEventListener('change', () => { fit(); show(currentName, true); });

  /* ---------- mobile menu sheet ---------- */
  const mmenu = document.getElementById('mmenu');
  function openM() {
    mmenu.querySelectorAll('.m-navrow').forEach(r => r.classList.toggle('is-current', !!(r.dataset.go === currentName || (r.dataset.msub && ['how', 'features'].includes(currentName)))));
    mmenu.classList.add('open'); mmenu.setAttribute('aria-hidden', 'false'); document.body.classList.add('m-locked');
  }
  function closeM() {
    if (!mmenu) return;
    mmenu.classList.remove('open'); mmenu.setAttribute('aria-hidden', 'true'); document.body.classList.remove('m-locked');
    mmenu.querySelectorAll('.m-navrow.open').forEach(r => r.classList.remove('open'));
  }
  window.addEventListener('hashchange', route);

  /* ---------- dropdown menus ---------- */
  const menu = document.getElementById('menu');
  const menus = {
    how: [['How It Works', 'how'], ['Features', 'features']],
  };
  let openFor = null;
  function closeMenu() { menu.classList.remove('open'); menu.setAttribute('aria-hidden', 'true'); if (openFor) openFor.classList.remove('open'); openFor = null; }
  function openMenu(el) {
    if (openFor === el) return closeMenu();
    closeMenu();
    const r = el.getBoundingClientRect();
    menu.innerHTML = menus[el.dataset.menu].map(([t, to]) => `<button role="menuitem" data-to="${to || ''}"><i></i>${t}</button>`).join('');
    menu.style.left = (r.left - 12) + 'px';
    menu.style.top = (r.bottom + 14) + 'px';
    menu.classList.add('open'); menu.setAttribute('aria-hidden', 'false');
    el.classList.add('open'); openFor = el;
  }
  menu.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    closeMenu();
    if (b.dataset.to) location.hash = b.dataset.to; else say('That page isn’t part of this prototype yet');
  });
  window.addEventListener('scroll', closeMenu, { passive: true });

  /* ---------- clicks ---------- */
  document.addEventListener('click', e => {
    const mm = e.target.closest('[data-mmenu]');
    if (mm) { e.preventDefault(); mm.dataset.mmenu === 'open' ? openM() : closeM(); return; }
    const sub = e.target.closest('[data-msub]');
    if (sub) { e.preventDefault(); sub.classList.toggle('open'); return; }
    if (e.target.closest('#mmenu [data-go]')) {
      const g = e.target.closest('[data-go]').dataset.go;
      closeM();
      if (g === currentName) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    }
    const m = e.target.closest('[data-menu]');
    if (m) { e.preventDefault(); openMenu(m); return; }
    if (!e.target.closest('#menu')) closeMenu();
    const go = e.target.closest('[data-go]');
    if (go) { e.preventDefault(); location.hash = go.dataset.go; return; }
    if (e.target.closest('[data-soon]')) { e.preventDefault(); say('That page isn’t part of this prototype yet'); return; }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMenu(); closeM(); } });
  document.querySelectorAll('[data-go],[data-soon],[data-menu],[data-send],[data-reset],[data-mmenu],[data-msub]').forEach(el => {
    el.setAttribute('tabindex', '0'); el.setAttribute('role', 'button');
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); } });
  });

  window.EIP.start = () => { route(); fit(); };
  document.fonts && document.fonts.ready.then(fit);
  window.addEventListener('load', fit);
})();
