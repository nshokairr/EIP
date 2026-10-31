"""Experio rebrand pass: pages/*.html (built from the original Figma) -> pages_x/*.html

- Experio logo (Option 3) in the header, new nav order with How It Works ▾ (Features inside),
  no Log In
- new footer (GXPER structure) on every page
- every colour in the markup moved onto the Experio palette (same mapping as the Figma file)
- product name -> Experio
- contact: "Message sent" success view inside the form card
"""
import colorsys, json, os, re
from bs4 import BeautifulSoup

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, 'pages_x')
PAGES = ['home', 'platform', 'how', 'features', 'benchmarking', 'about', 'contact']

# ---------------------------------------------------------------- palette
BRAND = {'orange': '#F57915', 'red': '#EF2C61', 'magenta': '#E31E84', 'berry': '#C7309A', 'purple': '#9440A5',
         'violet': '#604BA9', 'indigo': '#5157B0', 'blue': '#487EB2', 'teal': '#49C0A1'}
SPECTRUM = [(0, 'orange'), (.12, 'red'), (.2, 'magenta'), (.3, 'berry'), (.45, 'purple'), (.6, 'violet'),
            (.72, 'indigo'), (.85, 'blue'), (1, 'teal')]


def h2rgb(h):
    h = h.lstrip('#')
    if len(h) == 3:
        h = ''.join(c * 2 for c in h)
    return tuple(int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))


def rgb2h(c):
    return '#%02x%02x%02x' % tuple(max(0, min(255, round(v * 255))) for v in c)


def pick(h):
    if h < 15 or h >= 345: return 'red'
    if h < 45: return 'orange'
    if h < 160: return None
    if h < 195: return 'teal'
    if h < 225: return 'blue'
    if h < 250: return 'indigo'
    if h < 275: return 'violet'
    if h < 300: return 'purple'
    if h < 320: return 'berry'
    return 'magenta'


def remap(c):
    """Same rule as the Figma pass: saturated mid-tones snap to the nearest Experio colour,
    pale tints keep their lightness, greys/whites/near-blacks stay."""
    h, l, s = colorsys.rgb_to_hls(*c)
    h *= 360
    if s < .3 or l > .9 or l < .2:
        return None
    k = pick(h)
    if not k:
        return None
    th, tl, ts = colorsys.rgb_to_hls(*h2rgb(BRAND[k]))
    return colorsys.hls_to_rgb(th, l if l > .62 else tl, ts * min(1, s / .6))


def recolor_text(txt):
    def hx(m):
        n = remap(h2rgb(m.group(1)))
        return rgb2h(n) if n else m.group(0)
    txt = re.sub(r'#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})(?![0-9a-fA-F])', hx, txt)
    txt = re.sub(r'(rgba?)\(\s*(\d+)(\s*,\s*)(\d+)(\s*,\s*)(\d+)', rg2, txt)
    return txt


def rg2(m):
    r, g, b = int(m.group(2)), int(m.group(4)), int(m.group(6))
    n = remap((r / 255, g / 255, b / 255))
    if not n:
        return m.group(0)
    R, G, B = (round(v * 255) for v in n)
    return f'{m.group(1)}({R}{m.group(3)}{G}{m.group(5)}{B}'


# ---------------------------------------------------------------- logo
LOGO_D = open(os.path.join(ROOT, 'brand', 'logo_path.txt')).read().strip()
_logo_n = [0]


def logo_svg(h=30, mono=None, cls='x-logo'):
    _logo_n[0] += 1
    gid = f'xg{_logo_n[0]}'
    w = round(1032.05 * h / 170.86, 2)
    stops = ''.join(f'<stop offset="{o}" stop-color="{BRAND[k]}"/>' for o, k in SPECTRUM)
    fill = mono or f'url(#{gid})'
    defs = '' if mono else f'<defs><linearGradient id="{gid}" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1033" y2="0">{stops}</linearGradient></defs>'
    return (f'<svg class="{cls}" width="{w}" height="{h}" viewBox="0 0 1033 171" fill="none" xmlns="http://www.w3.org/2000/svg" '
            f'role="img" aria-label="Experio">{defs}<path fill-rule="evenodd" fill="{fill}" d="{LOGO_D}"/></svg>')


MARK_D = LOGO_D[:LOGO_D.index('M 1004.88')].strip()


def app_icon(w, h, radius):
    """Experio app icon (as in the brand deck mockups): spectrum tile with the white signal mark."""
    mh = round(h * .5, 1)
    return (f'<div class="x-appicon" style="width:{w}px;height:{h}px;border-radius:{radius}"><svg width="{round(mh * 153 / 171, 1)}" height="{mh}" '
            f'viewBox="0 0 153 171" fill="none"><path fill="#fff" d="{MARK_D}"/></svg></div>')


def voices_html():
    """Layer over the 'customer voices' artwork: each avatar / channel bubble as its own sprite,
    voice rings for the people, notification badges for the channels, signal dots on the waves."""
    sp = json.load(open(os.path.join(ROOT, 'brand', 'voices.json')))
    waves = ['M0 180 C 120 200, 200 150, 300 145 S 480 150, 560 125 S 760 95, 876 110',
             'M0 206 C 140 226, 230 182, 330 176 S 520 176, 600 151 S 780 136, 876 146',
             'M0 152 C 110 166, 210 122, 310 116 S 470 111, 560 96 S 760 72, 876 86']
    cols = ['#F57915', '#E31E84', '#9440A5', '#5157B0', '#49C0A1', '#EF2C61', '#C7309A', '#487EB2', '#604BA9']
    dots = ''.join(f'<i class="xv-dot" style="offset-path:path(\'{waves[i % 3]}\');--c:{cols[i]};--dur:{6 + (i % 4) * 1.1:.1f}s;--dl:-{i * 1.37:.2f}s"></i>' for i in range(9))
    parts = []
    for i, v in enumerate(sp):
        extra = '<i class="xv-ring"></i><i class="xv-ring"></i><i class="xv-ring"></i>' if v['kind'] == 'avatar' else '<b class="xv-badge"></b>'
        parts.append(f'<div class="xv-s xv-{v["kind"]}" data-v="{v["name"]}" style="left:{v["x"]}px;top:{v["y"]}px;width:{v["size"]}px;height:{v["size"]}px;'
                     f'--t:{5.2 + (i % 4) * .9:.1f}s;--dl:-{i * .8:.1f}s;--r:{v["r"]}px">{extra}<img alt="" draggable="false" src="assets/voice-{v["name"]}.webp"></div>')
    return f'<div class="xv" aria-hidden="true"><div class="xv-dots">{dots}</div>{"".join(parts)}<div class="xv-bubbles"></div></div>'


# ---------------------------------------------------------------- header
NAV = [('Home', 'home'), ('About Us', 'about'), ('Platform', 'platform'), ('How It Works', None),
       ('Benchmarking', 'benchmarking'), ('Contact Us', 'contact')]
ACTIVE = {'home': 'Home', 'about': 'About Us', 'platform': 'Platform', 'how': 'How It Works',
          'features': 'How It Works', 'benchmarking': 'Benchmarking', 'contact': 'Contact Us'}
P_CLS = "[word-break:break-word] font-['Roboto'] font-bold leading-[16px] relative shrink-0 text-[14px] whitespace-nowrap"
CHEVRON = ('<div class="relative shrink-0 size-[10px]" data-name="Dropdown chevron"><svg class="asset-svg" fill="none" height="10" '
           'style="position:absolute;left:0;top:0;width:10px;height:10px;overflow:visible" viewBox="0 0 10 10" width="10" '
           'xmlns="http://www.w3.org/2000/svg"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-linecap="round" '
           'stroke-linejoin="round" stroke-width="1.5"/></svg></div>')


def nav_html(page):
    out = []
    for label, go in NAV:
        active = ACTIVE[page] == label
        color = 'text-[color:var(--x-violet)]' if active else 'text-[color:var(--eip-color-ink,#0b0b2c)]'
        attrs = f'data-go="{go}"' if go else 'data-menu="how"'
        cls = 'content-stretch cursor-pointer flex gap-[10px] items-center relative shrink-0 nav-item' + (' is-active' if active else '')
        inner = f'<p class="{P_CLS} {color}">{label}</p>' + (CHEVRON if not go else '')
        out.append(f'<a class="{cls}" {attrs} data-name="Navigation / {label}">{inner}</a>')
    return ''.join(out)


# ---------------------------------------------------------------- footer
ICONS = {n: open(os.path.join(ROOT, 'footer', f'i-{n}.svg')).read().strip() for n in ('insta', 'x', 'tiktok')}
ARROW = ('<svg class="x-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M11 5l5 5-5 5" '
         'stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>')


def footer_html():
    soc = ''.join(f'<a class="xf-soc-i" data-soon="1" aria-label="{lbl}">{ICONS[k]}</a>'
                  for k, lbl in (('insta', 'Instagram'), ('x', 'X'), ('tiktok', 'TikTok')))
    links = ''.join(f'<a class="xf-link" {"data-go=contact" if l == "Contact Us" else "data-soon=1"}>{l}</a>'
                    for l in ('Contact Us', 'Privacy', 'Marketing', 'Support', 'Copyright'))
    return f'''<footer class="xf" data-name="Footer">
  <div class="xf-main">
    <div class="xf-tag"><p class="xf-t1">Every experience has a voice.</p><p class="xf-t2">We turn it into intelligence.</p></div>
    <div class="xf-cta"><span class="xf-eyebrow">SEE IT IN ACTION</span><a class="xbtn btn-cta" data-go="contact" data-name="Button / Request a Demo"><span>Request a Demo</span>{ARROW}</a></div>
  </div>
  <div class="xf-div"></div>
  <div class="xf-row">
    <a class="xf-logo" data-go="home" aria-label="Experio home">{logo_svg(30)}</a>
    <div class="xf-soc">{soc}</div>
    <nav class="xf-links">{links}</nav>
  </div>
  <div class="xf-div"></div>
  <div class="xf-bottom"><span>DEVELOPED AND DESIGNED BY <a class="xf-ud" href="https://www.udtech-sa.com/ar/home" target="_blank" rel="noopener">UD-TECH</a></span><span>© 2026 EXPERIO. ALL RIGHTS RESERVED.</span></div>
</footer>'''


# ---------------------------------------------------------------- contact success view
SUCCESS = f'''<div class="xsuccess" aria-hidden="true" role="status">
  <div class="xs-icon"><span class="xs-ring"></span><span class="xs-ring xs-ring2"></span><span class="xs-disc"><svg width="44" height="44" viewBox="0 0 44 44" fill="none"><path class="xs-check" d="M10 23L18.5 31.5L34 14" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div>
  <p class="xs-eyebrow">MESSAGE SENT</p>
  <h3 class="xs-title">Thanks, we’ve got your message!</h3>
  <p class="xs-body">Our team will review your enquiry and get back to you within 1–2 business days. A confirmation has been sent to your email.</p>
  <span class="xs-ref"><i></i>Reference&nbsp; #EXP-20481 &nbsp;·&nbsp; Sent just now</span>
  <div class="xs-actions"><a class="xbtn btn-cta" data-go="home"><span>Back to Home</span>{ARROW}</a><a class="xbtn-ghost" data-reset="1"><span>Send another message</span>{ARROW}</a></div>
</div>'''


# ---------------------------------------------------------------- copy
def fix_copy(soup):
    for p in soup.find_all('p'):
        t = p.get_text()
        if 'Experience Intelligence Platform. All rights' in t:
            p.string = t.replace('© 2024 Experience Intelligence Platform', '© 2026 Experio')
        if t.startswith('We created the Experience Intelligence Platform'):
            p.string = t.replace('the Experience Intelligence Platform', 'Experio')
        if t.startswith('Experience Intelligence Platform and how'):
            # the three hard-broken lines become one paragraph that wraps naturally
            ps = p.parent.find_all('p', recursive=False)
            text = ' '.join(x.get_text().strip() for x in ps).replace('about the Experience Intelligence Platform', 'about Experio')
            ps[0].string = text
            ps[0]['class'] = [c for c in ps[0].get('class', []) if c != 'mb-0']
            for x in ps[1:]:
                x.decompose()
            break


def process(page):
    soup = BeautifulSoup(open(os.path.join(ROOT, 'pages', page + '.html')).read(), 'html.parser')
    hdr = soup.find(attrs={'data-name': 'Header'})
    brand = hdr.find(attrs={'data-name': 'Brand'})
    brand.clear()
    brand['class'] = [c for c in brand['class'] if not c.startswith('w-[')] + ['x-brand']
    brand['data-go'] = 'home'
    brand.append('@@LOGO@@')
    nav = hdr.find(attrs={'data-name': 'Navigation'})
    nav.clear()
    nav['class'] = [c for c in nav['class'] if not c.startswith('gap-')] + ['gap-[44px]']
    nav.append('@@NAV@@')
    for e in hdr.find_all(attrs={'data-login': True}):
        e.decompose()
    acts = hdr.find(attrs={'data-name': 'Actions'})
    for k in acts.find_all(recursive=False):
        if 'Log In' in k.get_text():
            k.decompose()
    # old footer out, new footer in
    root = soup.find(attrs={'data-node-id': True})
    for f in root.find_all(attrs={'data-name': 'Footer'}, recursive=False):
        f.decompose()
    root.append('@@FOOTER@@')
    # height of the page root is driven by its children (some roots were fixed at 1024)
    root['class'] = [c for c in root['class'] if not re.match(r'^h-\[', c)]
    fix_copy(soup)
    icons = {}
    for nid, (w, h, rad) in {'39:351': (111, 110, '24px'), '33:757': (151, 151, '50%')}.items():
        e = soup.find(attrs={'data-node-id': nid})
        if e:
            e.clear(); e.append(f'@@ICON{nid}@@'); icons[nid] = app_icon(w, h, rad)
    if page == 'home':
        soup.find(attrs={'data-node-id': '33:458'}).append('@@VOICES@@')
    if page == 'contact':
        card = soup.find(attrs={'data-node-id': '33:856'})
        card['class'] = card['class'] + ['x-formcard']
        card.append('@@SUCCESS@@')
    html = recolor_text(str(root))
    # hand-built pieces already use the Experio palette: insert after recolouring
    return (html.replace('@@LOGO@@', logo_svg(30)).replace('@@NAV@@', nav_html(page))
            .replace('@@FOOTER@@', footer_html()).replace('@@SUCCESS@@', SUCCESS)
            .replace('@@ICON39:351@@', icons.get('39:351', '')).replace('@@ICON33:757@@', icons.get('33:757', ''))
            .replace('@@VOICES@@', voices_html() if page == 'home' else ''))


def brand_css():
    """CSS custom properties for hand-written UI (footer, success view, menus)."""
    def m(h):
        n = remap(h2rgb(h))
        return rgb2h(n) if n else h
    v = {
        'x-violet': m('#7816ba'), 'x-cta1': m('#7c23f8'), 'x-cta2': m('#e024a7'), 'x-cta3': m('#fe6c57'),
        'x-eyebrow': m('#6524d9'), 'x-tint': '#f5efff',
    }
    for k, h in BRAND.items():
        v['x-' + k] = h
    spec = ', '.join(f'{BRAND[k]} {round(o * 100)}%' for o, k in SPECTRUM)
    head = [m(h) for h in ('#3847ff', '#8014e8', '#e01c96', '#ff614d')]
    body = ';'.join(f'--{k}:{c}' for k, c in v.items())
    return (f':root{{{body};--x-spectrum:linear-gradient(90deg, {spec});'
            f'--x-cta:linear-gradient(90deg, var(--x-cta1) 0%, var(--x-cta2) 57%, var(--x-cta3) 100%);'
            f'--x-head:linear-gradient(90deg, {head[0]} 0%, {head[1]} 35%, {head[2]} 65%, {head[3]} 100%)}}\n')


if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    for p in PAGES:
        html = process(p)
        open(os.path.join(OUT, p + '.html'), 'w').write(html)
        print(p, len(html))
    open(os.path.join(ROOT, 'brand.css'), 'w').write(brand_css())
    print(brand_css())
