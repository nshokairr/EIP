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
app_css = open(os.path.join(ROOT, 'fonts.css')).read() + open(os.path.join(ROOT, 'app.css')).read() + '\n' + open(os.path.join(ROOT, 'motion.css')).read()
app_js = open(os.path.join(ROOT, 'app.js')).read() + '\n' + open(os.path.join(ROOT, 'motion.js')).read() + '\nwindow.EIP.start();'

pages = []
for p in ORDER:
    if ONLY and p != ONLY:
        continue
    html = open(os.path.join(ROOT, 'pages', p + '.html')).read()
    pages.append(f'<section class="page" id="page-{p}" data-page="{p}" aria-label="{p}">{html}</section>')
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

static_cls = 'static-mode' if '--static' in sys.argv else ''
doc = f'''<title>Experience Intelligence Platform</title>
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
<div id="toast" role="status" aria-live="polite"></div>
<script>
{app_js}
</script>'''
if not INLINE:
    doc = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body class="' + static_cls + '">' + doc + '</body></html>'
out = os.path.join(ROOT, 'out', 'index.html' if not ONLY else f'{ONLY}.html')
open(out, 'w').write(doc)
print(out, len(doc))
