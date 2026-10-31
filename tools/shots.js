// usage: node tools/shots.js page[,page] [wait ms] [outdir] [scrollStep]
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const pages = (process.argv[2] || 'home').split(',');
  const wait = +process.argv[3] || 2500;
  const out = process.argv[4] || '/tmp/shots';
  require('fs').mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1536, height: 900 } });
  const p = await ctx.newPage();
  p.on('pageerror', e => console.log('PAGEERROR', e.message));
  p.on('console', m => { if (m.type() === 'error') console.log('CONSOLE', m.text()); });
  for (const name of pages) {
    await p.goto('file://' + path.resolve(__dirname, '../out/index.html') + '#' + name);
    await p.waitForTimeout(800);
    // scroll through so every section triggers
    const H = await p.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < H; y += 450) { await p.evaluate(y => window.scrollTo(0, y), y); await p.waitForTimeout(250); }
    await p.evaluate(() => window.scrollTo(0, 0));
    await p.waitForTimeout(wait);
    await p.screenshot({ path: `${out}/${name}.png`, fullPage: true });
    console.log(name, H);
  }
  await b.close();
})();
