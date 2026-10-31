"""Mobile pages: raw/<Page>Mobile.html (rendered from the Figma mobile frames) -> pages_m/<page>.html

- every image slot points at a local asset: vectors exported from the Figma file (out/m/*.svg),
  rasters reuse the matching desktop render (same Figma image fill, already in the Experio palette)
- header brand / menu button, CTAs and footer links wired for the prototype
- contact form fields become real inputs, Send Message shows the Message sent view
- colours run through the same Experio mapping as the desktop pages
"""
import json, os, re, shutil
from bs4 import BeautifulSoup
from rebrand import recolor_text, SUCCESS, voices_html, app_icon

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, 'pages_m')
MOUT = os.path.join(ROOT, 'out', 'm')
PAGES = {'home': 'HomeMobile', 'platform': 'PlatformMobile', 'how': 'HowItWorksMobile', 'features': 'FeaturesMobile',
         'benchmarking': 'BenchmarkingMobile', 'about': 'AboutUsMobile', 'contact': 'ContactUsMobile'}
canon = json.load(open(os.path.join(ROOT, 'msvgcanon.json')))
rmap = json.load(open(os.path.join(ROOT, 'mmap.json')))
rmap['146:645'] = 'out/assets/34-531.webp'          # send-message plane (masked on desktop too)
COVER = re.compile(r'Artwork|wave|Wave|illustration|Illustration|Signals|journey|map|Sphere|brush|Growth')
CHEVRON = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="#0B0B2C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'


def fn(nid):
    return nid.replace(':', '-').replace(';', '_')


def svg_for(nid):
    k = canon.get(nid, nid)
    src = os.path.join(ROOT, 'massets', 'svg', fn(k) + '.svg')
    if not os.path.exists(src):
        return None
    dst = os.path.join(MOUT, fn(k) + '.svg')
    if not os.path.exists(dst):
        txt = recolor_text(open(src).read())
        open(dst, 'w').write(txt)
    return 'm/' + fn(k) + '.svg'


def raster_img(soup, nid, name):
    a = rmap.get(nid)
    if not a:
        return None
    img = soup.new_tag('img', src='assets/' + os.path.basename(a), alt='', draggable='false')
    fit = 'cover' if COVER.search(name or '') else 'contain'
    img['style'] = f'position:absolute;left:0;top:0;width:100%;height:100%;max-width:none;object-fit:{fit};display:block;pointer-events:none'
    return img


def engine(soup, holder):
    """the masked engine glow: same artwork as desktop, placed with the mobile crop of the image fill"""
    holder.clear()
    holder['style'] = ('-webkit-mask:radial-gradient(circle closest-side,#000 74%,transparent 100%);'
                       'mask:radial-gradient(circle closest-side,#000 74%,transparent 100%);overflow:hidden')
    k = 218.6 / 433.5
    img = soup.new_tag('img', src='assets/41-460.webp', alt='', draggable='false')
    img['style'] = (f'position:absolute;left:2.72px;top:-45.9px;width:{524 * k:.2f}px;height:{558 * k:.2f}px;'
                    'max-width:none;display:block;pointer-events:none')
    img['class'] = ['m-engine-img']
    holder.append(img)


def process(page, comp):
    soup = BeautifulSoup(open(os.path.join(ROOT, 'raw', comp + '.html')).read(), 'html.parser')
    root = soup.find(attrs={'data-node-id': True})
    missing = []
    # masked nodes -> one image
    for m in list(soup.find_all(style=re.compile('mask-image'))):
        nid = m['data-node-id']
        if nid == '157:499':
            engine(soup, m); continue
        img = raster_img(soup, nid, m.get('data-name', ''))
        style = re.sub(r'mask-image:[^;]+;?', '', m.get('style', ''))
        m['style'] = style
        m['class'] = [c for c in m.get('class', []) if not c.startswith('mask-')]
        m.clear()
        if img: m.append(img)
        else: missing.append(nid)
    for img in list(soup.find_all('img')):
        src = img.get('src', '')
        if not src.startswith('http'):
            continue
        holder = img.find_parent(attrs={'data-node-id': True})
        nid = holder['data-node-id']
        if src.endswith('.svg'):
            local = svg_for(nid)
            if local:
                img['src'] = local
            elif holder.get('data-name') == 'Chevron':
                img.replace_with(BeautifulSoup(CHEVRON, 'html.parser'))
            else:
                missing.append(nid); img.decompose()
            continue
        a = rmap.get(nid)
        if a and a.endswith('platform-bg.webp'):
            img['src'] = 'assets/platform-bg.webp'   # the full background artwork: keep the mobile crop
            continue
        new = raster_img(soup, nid, holder.get('data-name', ''))
        if not new:
            missing.append(nid); img.decompose(); continue
        # replace only the image (or its crop wrapper) so anything else inside the holder stays
        wrap = img.parent if (img.parent is not holder and not img.parent.get('data-node-id')) else img
        if wrap is img and len([c for c in holder.children if getattr(c, 'name', None)]) == 1:
            holder.clear(); holder.append(new)
        else:
            wrap.replace_with(new)
    # fonts
    for e in soup.find_all(class_=True):
        e['class'] = [c.replace("font-['Roboto:Bold']", "font-['Roboto']").replace("font-['Roboto:Regular']", "font-['Roboto']")
                      .replace("font-['Roboto:Medium']", "font-['Roboto']").replace("font-['Dancing_Script:Regular']", "font-['Dancing_Script']")
                      for c in e['class']]
    # header
    hdr = soup.find(attrs={'data-name': 'Header / Mobile'})
    if hdr:
        hdr['class'] = hdr['class'] + ['site-header', 'm-header']
        hdr['class'] = [c for c in hdr['class'] if c != 'cursor-pointer']
        b = hdr.find(attrs={'data-name': 'Brand'}); b['data-go'] = 'home'
        mb = hdr.find(attrs={'data-name': 'Open menu'}); mb['data-mmenu'] = 'open'; mb['aria-label'] = 'Open menu'
    # links / buttons by label
    for e in soup.find_all(['a', 'div']):
        t = e.get_text(' ', strip=True)
        dn = e.get('data-name', '') or ''
        if dn.startswith('Button') or e.get('data-node-id', '').endswith('29:305') or (e.name == 'a' and 'rounded-[var(--eip-full' in ' '.join(e.get('class', []))):
            if t.startswith('Request a Demo'): e['data-go'] = 'contact'; e['class'] = e.get('class', []) + ['btn-cta']
            elif t.startswith('See How It Works'): e['data-go'] = 'how'; e['class'] = e.get('class', []) + ['btn-cta']
    for e in soup.find_all(attrs={'data-node-id': re.compile(r'(^|;)29:31[46]$|29:305$')}):
        t = e.get_text(' ', strip=True)
        if t.startswith('Request a Demo'): e['data-go'] = 'contact'; e['class'] = e.get('class', []) + ['btn-cta']
    ft = soup.find(attrs={'data-name': 'Footer'})
    if ft:
        ft['class'] = ft['class'] + ['m-footer']
        links = ft.find(attrs={'data-name': 'Footer links'})
        for p in links.find_all('p'):
            if p.get_text(strip=True) == 'Contact Us': p['data-go'] = 'contact'
            else: p['data-soon'] = '1'
            p['class'] = p.get('class', []) + ['m-flink']
        for s in ft.find_all(attrs={'data-name': re.compile('^Social /')}):
            s['data-soon'] = '1'; s['class'] = s.get('class', []) + ['m-soc']
        lg = ft.find(attrs={'data-node-id': '169:648'})
        if lg: lg['data-go'] = 'home'
    # contact: real form
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
            box['class'] = box.get('class', []) + ['field-box']
            if label in options:
                sel = soup.new_tag('select')
                sel['class'] = ph.get('class', []) + ['field-control', 'field-select']
                sel['required'] = ''
                sel['aria-label'] = label
                o = soup.new_tag('option', value=''); o.string = text
                o['disabled'] = ''; o['selected'] = ''; o['hidden'] = ''
                sel.append(o)
                for opt in options[label]:
                    oo = soup.new_tag('option', value=opt); oo.string = opt; sel.append(oo)
                ph.replace_with(sel)
                chev = box.find(string='⌄')
                if chev:
                    holder = chev.parent
                    while holder.parent is not box: holder = holder.parent
                    holder['class'] = holder.get('class', []) + ['field-chevron', 'm-chev']
            else:
                inp = soup.new_tag('input')
                inp['class'] = ph.get('class', []) + ['field-control']
                inp['placeholder'] = text; inp['type'] = types.get(label, 'text'); inp['aria-label'] = label; inp['required'] = ''
                ph.replace_with(inp)
        send = soup.find(attrs={'data-name': 'Send message'})
        send['data-send'] = '1'; send['class'] = send.get('class', []) + ['m-send']
        btn = send.find(attrs={'data-name': 'Button / Send Message'})
        plane = send.find(attrs={'data-node-id': '146:645'})
        group = send.find(attrs={'data-node-id': '146:642'})
        plane.extract(); group.decompose()
        plane['class'] = ['relative', 'shrink-0', 'size-[30px]', 'm-plane']
        btn.insert(0, plane)
        btn['class'] = [c for c in btn['class'] if not c.startswith('pl-') and not c.startswith('pr-')] + ['px-[20px]']
        card = soup.find(attrs={'data-name': 'Contact Information / enquiry form'})
        card['class'] = card['class'] + ['x-formcard', 'm-formcard']
        card.append('@@SUCCESS@@')
    if page == 'home':
        soup.find(attrs={'data-node-id': '142:392'}).append('@@VOICES@@')
    # old four-dot symbol -> Experio app icon (as on desktop)
    icons = {}
    for dn in ('Image / Supplied central brand mark', 'Image / Platform brand mark / decorative'):
        e = soup.find(attrs={'data-name': dn})
        if e:
            w = float(re.search(r'w-\[([\d.]+)px\]', ' '.join(e['class'])).group(1)) if re.search(r'w-\[([\d.]+)px\]', ' '.join(e['class'])) else 100
            h = float(re.search(r'h-\[([\d.]+)px\]', ' '.join(e['class'])).group(1)) if re.search(r'h-\[([\d.]+)px\]', ' '.join(e['class'])) else w
            m = re.search(r'size-\[([\d.]+)px\]', ' '.join(e['class']))
            if m: w = h = float(m.group(1))
            e.clear(); key = f'@@ICON{len(icons)}@@'; e.append(key)
            icons[key] = app_icon(w, h, '50%' if 'Platform' in dn else '22%')
    html = recolor_text(str(root))
    for k, v in icons.items():
        html = html.replace(k, v)
    html = html.replace('@@SUCCESS@@', SUCCESS).replace('@@VOICES@@', '<div class="m-voices">' + voices_html() + '</div>')
    return html, missing


def menu_html():
    soup = BeautifulSoup(open(os.path.join(ROOT, 'raw', 'MenuMobile.html')).read(), 'html.parser')
    root = soup.find(attrs={'data-node-id': True})
    for img in list(soup.find_all('img')):
        holder = img.find_parent(attrs={'data-node-id': True})
        local = svg_for(holder['data-node-id'])
        if local: img['src'] = local
        elif holder.get('data-name') == 'Chevron': img.replace_with(BeautifulSoup(CHEVRON, 'html.parser'))
        else: img.decompose()
    for e in soup.find_all(class_=True):
        e['class'] = [c.replace("font-['Roboto:Bold']", "font-['Roboto']").replace("font-['Roboto:Regular']", "font-['Roboto']") for c in e['class']]
    root.find(attrs={'data-name': 'Brand'})['data-go'] = 'home'
    root.find(attrs={'data-name': 'Close menu'})['data-mmenu'] = 'close'
    go = {'Home': 'home', 'About Us': 'about', 'Platform': 'platform', 'Benchmarking': 'benchmarking', 'Contact Us': 'contact'}
    nav = root.find(attrs={'data-name': 'Navigation'})
    for row in nav.find_all(recursive=False):
        label = row.get_text(strip=True)
        row['class'] = row.get('class', []) + ['m-navrow']
        row['data-label'] = label
        if label in go:
            row['data-go'] = go[label]
        else:
            row['data-msub'] = 'how'
            sub = soup.new_tag('div'); sub['class'] = ['m-sub']
            inner = soup.new_tag('div'); inner['class'] = ['m-sub-in']; sub.append(inner)
            for t, g in (('How It Works', 'how'), ('Features', 'features')):
                a = soup.new_tag('a'); a['data-go'] = g; a['class'] = ['m-subrow']; a.string = t; inner.append(a)
            row.insert_after(sub)
    for e in root.find_all(attrs={'data-node-id': '29:305'}):
        e['data-go'] = 'contact'; e['class'] = e.get('class', []) + ['btn-cta']
    root['class'] = [c for c in root['class'] if c != 'size-full'] + ['m-menu-inner']
    return recolor_text(str(root))


if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    os.makedirs(MOUT, exist_ok=True)
    for page, comp in PAGES.items():
        html, miss = process(page, comp)
        open(os.path.join(OUT, page + '.html'), 'w').write(html)
        print(page, len(html), 'missing:', miss)
    open(os.path.join(OUT, '_menu.html'), 'w').write(menu_html())
    print('menu ok')
