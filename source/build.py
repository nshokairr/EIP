"""Turn the Figma-generated page markup into prototype fragments.

- swaps every temporary Figma asset URL for the locally captured asset
- inlines SVG assets (so strokes can be drawn on) and places rasters at their
  exact Figma render bounds
- fixes font family class names, wires navigation, form fields and motion hooks
"""
import json, os, re, sys
from bs4 import BeautifulSoup
from PIL import Image

ROOT = os.path.dirname(os.path.abspath(__file__))
A = os.path.join(ROOT, 'assets')
bounds = json.load(open(os.path.join(ROOT, 'bounds.json')))
motion = json.load(open(os.path.join(ROOT, 'motion.json')))

PAGES = {
    'home': 'HomeDesktop', 'platform': 'PlatformDesktop', 'how': 'HowItWorksDesktop',
    'features': 'FeaturesDesktop', 'benchmarking': 'BenchmarkingDesktop',
    'about': 'AboutUsDesktop', 'contact': 'ContactUsDesktop',
}
SCALE = {'33:458': 1.4, '34:501': 1.4, '34:567': 1.5, '34:578': 1.25, '41:460': 1.4}
BRAND = '29:90'


def fname(nid):
    return nid.replace(':', '-').replace(';', '_')


def asset_for(nid):
    """Return (kind, path) for the captured asset of node id nid."""
    cands = [nid]
    if nid.startswith('I'):
        last = nid.split(';')[-1]
        cands += [last]
    for c in cands:
        p = os.path.join(A, fname(c) + '.svg')
        if os.path.exists(p):
            return 'svg', p
        p = os.path.join(A, fname(c) + '.png')
        if os.path.exists(p):
            return 'png', p
    return None, None


def place_style(nid, w, h):
    """CSS for the asset inside its node box, honoring Figma render bounds."""
    b = bounds.get(nid) or bounds.get(nid.split(';')[-1]) or {}
    dx, dy = b.get('dx', 0), b.get('dy', 0)
    return f'position:absolute;left:{dx}px;top:{dy}px;width:{w}px;height:{h}px;max-width:none;display:block;pointer-events:none'


uid = [0]


def inline_svg(soup, path, nid):
    txt = open(path).read()
    # make defs ids unique per insertion
    uid[0] += 1
    ids = set(re.findall(r'id="([^"]+)"', txt))
    for i in ids:
        txt = txt.replace(f'id="{i}"', f'id="{i}_{uid[0]}"').replace(f'url(#{i})', f'url(#{i}_{uid[0]})')
    svg = BeautifulSoup(txt, 'html.parser').find('svg')
    w, h = float(svg['width']), float(svg['height'])
    svg['style'] = place_style(nid, w, h) + ';overflow:visible'
    svg['class'] = ['asset-svg']
    return svg


def raster(soup, path, nid, page):
    im = Image.open(path)
    sc = SCALE.get(nid.split(';')[-1], 2)
    w, h = im.size[0] / sc, im.size[1] / sc
    b = bounds.get(nid) or bounds.get(nid.split(';')[-1]) or {}
    img = soup.new_tag('img')
    rel = 'assets/' + os.path.basename(path).rsplit('.', 1)[0] + '.webp'
    img['src'] = rel
    img['alt'] = ''
    img['draggable'] = 'false'
    # if the capture matches the render bounds, offset by them; else fill node box
    if b and abs(w - b.get('rw', w)) < 2 and abs(h - b.get('rh', h)) < 2:
        img['style'] = place_style(nid, round(w, 2), round(h, 2))
    else:
        img['style'] = f'position:absolute;left:0;top:0;width:{round(w,2)}px;height:{round(h,2)}px;max-width:none;display:block;pointer-events:none'
    used.add(path)
    return img


used = set()


def process(page, comp):
    soup = BeautifulSoup(open(os.path.join(ROOT, 'raw', comp + '.html')).read(), 'html.parser')
    root = soup.find(attrs={'data-node-id': True})

    # 1. feather mask groups -> single captured render
    for f in soup.find_all(attrs={'data-name': re.compile(r'feather$')}):
        kind, p = asset_for(f['data-node-id'])
        assert kind == 'png', f['data-node-id']
        f.clear()
        f.append(raster(soup, p, f['data-node-id'], page))

    # 2. masked send-message plane
    for e in soup.find_all(style=re.compile('mask-image')):
        nid = e['data-node-id']
        if nid == '33:919':
            kind, p = asset_for('34:531')
            e['style'] = ''
            e.clear()
            e.append(raster(soup, p, '34:531', page))

    # 3. platform background image (fill of 14:5)
    if page == 'platform':
        bg = soup.find(attrs={'data-node-id': '14:5'})
        im = bg.find('img', recursive=False)
        im['src'] = 'assets/platform-bg.webp'
        im['class'] = ['absolute', 'inset-0', 'max-w-none', 'object-cover', 'pointer-events-none', 'size-full']
        im['data-bg'] = '1'

    # 4. every other image slot
    for img in list(soup.find_all('img')):
        if img.get('data-bg') or not img.get('src', '').startswith('http'):
            continue
        holder = img.find_parent(attrs={'data-node-id': True})
        nid = holder['data-node-id']
        if 'Brand symbol' in holder.get('data-name', ''):
            kind, p = 'png', os.path.join(A, fname(BRAND) + '.png')
        else:
            kind, p = asset_for(nid)
        if kind is None:
            print('MISSING', page, nid, holder.get('data-name'), file=sys.stderr)
            continue
        new = inline_svg(soup, p, nid) if kind == 'svg' else raster(soup, p, nid, page)
        # drop wrapper elements between holder and img (crop helpers)
        holder.clear()
        holder.append(new)

    # 5. fonts: Figma style names -> real families
    for e in soup.find_all(class_=True):
        cls = []
        for c in e['class']:
            c = c.replace("font-['Roboto:Bold']", "font-['Roboto']").replace("font-['Roboto:Regular']", "font-['Roboto']")
            c = c.replace("font-['Dancing_Script:Regular']", "font-['Dancing_Script']")
            cls.append(c)
        e['class'] = cls
        if e.get('style') and 'fontVariationSettings' in e['style']:
            pass

    # 6. motion + behaviour hooks from motion.json
    for nid, attrs in motion.get(page, {}).items():
        e = soup.find(attrs={'data-node-id': nid})
        if e is None:
            print('NOHOOK', page, nid, file=sys.stderr)
            continue
        for k, v in attrs.items():
            if k == 'class':
                e['class'] = (e.get('class') or []) + v.split()
            else:
                e[k] = v

    # 7. navigation by data-name
    navmap = {
        'Brand': 'home', 'Navigation / Platform': 'platform', 'Navigation / Features': 'features',
        'Navigation / Benchmarking': 'benchmarking', 'Navigation / About Us': 'about',
        'Navigation / Contact Us': 'contact', 'Button / Request demo': 'contact',
        'Button / Request a Demo': 'contact', 'Button / See How It Works': 'how',
        'Link / Overview': 'platform', 'Link / How It Works': 'how', 'Link / Integrations': 'platform',
        'Link / Security': 'platform', 'Link / Surveys': 'features', 'Link / AI Intelligence': 'features',
        'Link / Analytics': 'benchmarking', 'Link / Reports': 'benchmarking', 'Link / About Us': 'about',
        'Link / Contact Us': 'contact', 'Platform logo': 'home', 'Full report link': 'benchmarking',
    }
    for e in soup.find_all(attrs={'data-name': True}):
        n = e['data-name']
        if n in navmap:
            e['data-go'] = navmap[n]
        if n in ('Navigation / Solutions', 'Navigation / Resources'):
            e['data-menu'] = n.split(' / ')[1].lower()
        if n.startswith('Navigation /'):
            e['class'] = (e.get('class') or []) + ['nav-item']
    # header Log In (first child of Actions)
    for act in soup.find_all(attrs={'data-name': 'Actions'}):
        kids = [k for k in act.children if getattr(k, 'name', None)]
        if kids:
            kids[0]['data-login'] = '1'
            kids[0]['class'] = (kids[0].get('class') or []) + ['btn-outline']
        if len(kids) > 1:
            kids[1]['data-go'] = 'contact'
            kids[1]['class'] = (kids[1].get('class') or []) + ['btn-cta']
    for e in soup.find_all(attrs={'data-name': re.compile(r'^Button / ')}):
        if 'btn-outline' not in (e.get('class') or []):
            e['class'] = (e.get('class') or []) + ['btn-cta']
    for e in soup.find_all(attrs={'data-name': re.compile(r'^Header$')}):
        e['class'] = (e.get('class') or []) + ['site-header']

    # 8. contact form -> real inputs
    if page == 'contact':
        options = {
            'Type': ['Hospital', 'Clinic', 'Medical center', 'Laboratory', 'Pharmacy'],
            'Sector': ['Government', 'Private', 'Semi-government', 'Non-profit'],
            'Choose city': ['Jeddah', 'Riyadh', 'Dammam', 'Makkah', 'Madinah', 'Khobar'],
            'Choose country': ['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Egypt'],
        }
        types = {'Telephone number': 'tel', 'E-mail': 'email'}
        for box in soup.find_all(attrs={'data-name': re.compile(r' / input$')}):
            label = box['data-name'].split(' / ')[0]
            ps = box.find_all('p')
            ph = ps[0]
            text = ph.get_text(strip=True)
            box['class'] = (box.get('class') or []) + ['field-box']
            if label in options:
                sel = soup.new_tag('select')
                sel['class'] = ph.get('class', []) + ['field-control', 'field-select']
                sel['required'] = ''
                sel['aria-label'] = label
                o = soup.new_tag('option', value='')
                o.string = text
                o['disabled'] = ''
                o['selected'] = ''
                o['hidden'] = ''
                sel.append(o)
                for opt in options[label]:
                    oo = soup.new_tag('option', value=opt)
                    oo.string = opt
                    sel.append(oo)
                ph.replace_with(sel)
                if len(ps) > 1:
                    ps[1]['class'] = ps[1].get('class', []) + ['field-chevron']
            else:
                inp = soup.new_tag('input')
                inp['class'] = ph.get('class', []) + ['field-control']
                inp['placeholder'] = text
                inp['type'] = types.get(label, 'text')
                inp['aria-label'] = label
                inp['required'] = ''
                ph.replace_with(inp)
        send = soup.find(attrs={'data-node-id': '33:915'})
        send['data-send'] = '1'

    return str(root)


if __name__ == '__main__':
    os.makedirs(os.path.join(ROOT, 'pages'), exist_ok=True)
    for page, comp in PAGES.items():
        html = process(page, comp)
        open(os.path.join(ROOT, 'pages', page + '.html'), 'w').write(html)
        print(page, len(html))
    json.dump(sorted(used), open(os.path.join(ROOT, 'used_assets.json'), 'w'))
