(() => {
  const stage = document.getElementById('stage');
  const viewport = document.getElementById('viewport');
  const pages = [...document.querySelectorAll('.page')];
  const STATIC = document.body.classList.contains('static-mode');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = null;
  let scale = 1;

  /* ---------- scale the 1536px canvas to the window ---------- */
  function fit() {
    if (STATIC) return;
    scale = Math.min(1, window.innerWidth / 1536) || 1;
    if (window.innerWidth > 1536) scale = window.innerWidth / 1536;
    stage.style.transform = `scale(${scale})`;
    const p = current || pages[0];
    viewport.style.height = (p.offsetHeight * scale) + 'px';
  }
  window.addEventListener('resize', fit);

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

  function show(name, instant) {
    const next = document.getElementById('page-' + name) || pages[0];
    if (next === current) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const swap = () => {
      if (current) { current.classList.remove('is-active'); hooks.leave.forEach(f => f(current)); }
      current = next;
      next.classList.add('is-active');
      window.scrollTo(0, 0);
      fit();
      hooks.enter.forEach(f => f(next));
    };
    if (instant || reduce || STATIC) { swap(); return; }
    wipe.className = 'in';
    setTimeout(() => { swap(); wipe.className = 'out'; setTimeout(() => (wipe.className = ''), 650); }, 470);
  }
  function route() { show((location.hash || '#home').slice(1), !current); }
  window.addEventListener('hashchange', route);

  /* ---------- dropdown menus ---------- */
  const menu = document.getElementById('menu');
  const menus = {
    solutions: [['How It Works', 'how'], ['Customer Experience', 'features'], ['Employee Experience', 'features'], ['Product Experience', 'features']],
    resources: [['Benchmarking', 'benchmarking'], ['Case Studies', null], ['Blog', null], ['Guides', null], ['Webinars', null]],
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
    const m = e.target.closest('[data-menu]');
    if (m) { e.preventDefault(); openMenu(m); return; }
    if (!e.target.closest('#menu')) closeMenu();
    const go = e.target.closest('[data-go]');
    if (go) { e.preventDefault(); location.hash = go.dataset.go; return; }
    if (e.target.closest('[data-login]')) { say('Log in isn’t part of this prototype'); return; }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.querySelectorAll('[data-go],[data-login],[data-menu],[data-send]').forEach(el => {
    el.setAttribute('tabindex', '0'); el.setAttribute('role', 'button');
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); } });
  });

  window.EIP.start = () => { route(); fit(); };
  document.fonts && document.fonts.ready.then(fit);
  window.addEventListener('load', fit);
})();
