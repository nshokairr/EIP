import os,sys
from playwright.sync_api import sync_playwright
ROOT=os.path.dirname(os.path.abspath(__file__))
pages=sys.argv[1:] or ['home','platform','how','features','benchmarking','about','contact']
with sync_playwright() as p:
    b=p.chromium.launch()
    pg=b.new_page(viewport={'width':1536,'height':900})
    errs=[]
    pg.on('pageerror',lambda e:errs.append(str(e)))
    pg.on('console',lambda m: m.type=='error' and errs.append(m.text))
    pg.goto('file://'+ROOT+'/out/index.html#home'); pg.wait_for_timeout(500)
    for n in pages:
        pg.evaluate(f"location.hash='{n}'"); pg.wait_for_timeout(1300)
        h=pg.evaluate("document.body.scrollHeight")
        y=0
        while y<h:
            pg.mouse.wheel(0,400); y+=400; pg.wait_for_timeout(250)
        pg.wait_for_timeout(4500)
        waiting=pg.evaluate(f"document.querySelectorAll('#page-{n} [data-wait]').length")
        parts=pg.evaluate(f"document.querySelectorAll('#page-{n} .particle').length")
        pg.add_style_tag(content='.flow-layer{display:none!important}')
        pg.evaluate("document.getAnimations().forEach(a=>{a.pause();a.currentTime=0})")
        pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(200)
        pg.query_selector(f'#page-{n} > div').screenshot(path=f'{ROOT}/shots/{n}.png')
        print(n,'still-hidden:',waiting,'particles:',parts)
    print('ERRORS',errs)
    b.close()
