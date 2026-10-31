// usage: node tools/frames.js page "t1,t2,..." outdir [scrollY] [clip x,y,w,h]
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const [name, ts, out, sy = 0, clip] = process.argv.slice(2);
  require('fs').mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 1536, height: 900 } })).newPage();
  p.on('pageerror', e => console.log('PAGEERROR', e.message));
  p.on('console', m => { if (m.type() === 'error') console.log('CONSOLE', m.text()); });
  await p.goto('file://' + path.resolve(__dirname, '../out/index.html') + '#' + name);
  if (+sy) { await p.waitForTimeout(600); await p.evaluate(y => window.scrollTo(0, y), +sy); }
  const t0 = Date.now();
  const c = clip ? (([x, y, w, h]) => ({ x, y, width: w, height: h }))(clip.split(',').map(Number)) : undefined;
  for (const t of ts.split(',').map(Number)) {
    const wait = t - (Date.now() - t0); if (wait > 0) await p.waitForTimeout(wait);
    await p.screenshot({ path: `${out}/${name}-${t}.png`, clip: c });
  }
  await b.close();
})();
