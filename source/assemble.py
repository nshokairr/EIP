"""Assemble the prototype: page fragments + compiled CSS + motion layer -> one HTML file."""
import base64, os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
ORDER = ['home', 'platform', 'how', 'features', 'benchmarking', 'about', 'contact']
INLINE = '--inline' in sys.argv
ONLY = None
for a in sys.argv:
    if a.startswith('--only='):
        ONLY = a.split('=', 1)[1]

tw = open(os.path.join(ROOT, 'build', 'tw.css')).read()
app_css = open(os.path.join(ROOT, 'fonts.css')).read() + open(os.path.join(ROOT, 'brand.css')).read() + open(os.path.join(ROOT, 'app.css')).read() + '\n' + open(os.path.join(ROOT, 'motion.css')).read()
from rebrand import recolor_text
app_css = recolor_text(app_css)
app_js = open(os.path.join(ROOT, 'app.js')).read() + '\n' + open(os.path.join(ROOT, 'motion.js')).read() + '\nwindow.EIP.start();'
app_js = recolor_text(app_js)

pages = []
for p in ORDER:
    if ONLY and p != ONLY:
        continue
    html = open(os.path.join(ROOT, 'pages_x', p + '.html')).read()
    pages.append(f'<section class="page" id="page-{p}" data-page="{p}" aria-label="{p}">{html}</section>')
    mhtml = open(os.path.join(ROOT, 'pages_m', p + '.html')).read()
    pages.append(f'<section class="page m-page" id="page-m-{p}" data-page="{p}" data-mobile aria-label="{p} mobile">{mhtml}</section>')
body = '\n'.join(pages)

if INLINE:
    cache = {}
    def rep(m):
        path = m.group(1)
        if path not in cache:
            data = open(os.path.join(ROOT, 'out', path), 'rb').read()
            cache[path] = 'data:image/webp;base64,' + base64.b64encode(data).decode()
        return 'src="' + cache[path] + '"'
    body = re.sub(r'src="(assets/[^"]+\.webp)"', rep, body)
    def rep_svg(m):
        path = m.group(1)
        if path not in cache:
            data = open(os.path.join(ROOT, 'out', path), 'rb').read()
            cache[path] = 'data:image/svg+xml;base64,' + base64.b64encode(data).decode()
        return 'src="' + cache[path] + '"'
    body = re.sub(r'src="(m/[^"]+\.svg)"', rep_svg, body)

mmenu = open(os.path.join(ROOT, 'pages_m', '_menu.html')).read()
if INLINE:
    mmenu = re.sub(r'src="(m/[^"]+\.svg)"', lambda m: 'src="data:image/svg+xml;base64,' + base64.b64encode(open(os.path.join(ROOT, 'out', m.group(1)), 'rb').read()).decode() + '"', mmenu)
static_cls = 'static-mode' if '--static' in sys.argv else ''
doc = f'''<title>Experio Website</title>
<style>
{tw}
{app_css}
</style>
<script>document.body && (document.body.className = '{static_cls}');</script>
<div id="viewport"><div id="stage">
{body}
</div></div>
<div id="wipe" aria-hidden="true"><span></span><span></span><span></span></div>
<div id="menu" role="menu" aria-hidden="true"></div>
<div id="mmenu" aria-hidden="true"><div class="mmenu-sheet">{mmenu}</div></div>
<div id="toast" role="status" aria-live="polite"></div>
<div id="progress" aria-hidden="true"></div>
<script>
{app_js}
</script>'''
if not INLINE:
    doc = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body class="' + static_cls + '">' + doc + '</body></html>'
out = os.path.join(ROOT, 'out', 'index.html' if not ONLY else f'{ONLY}.html')
open(out, 'w').write(doc)
print(out, len(doc))
