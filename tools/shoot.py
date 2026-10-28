# Render each page statically at 1536px and save screenshots for comparison.
import sys, os
from playwright.sync_api import sync_playwright
ROOT=os.path.dirname(os.path.abspath(__file__))
pages=sys.argv[1:] or ['home','platform','how','features','benchmarking','about','contact']
os.makedirs(os.path.join(ROOT,'shots'),exist_ok=True)
with sync_playwright() as p:
    b=p.chromium.launch()
    pg=b.new_page(viewport={'width':1536,'height':1024})
    for name in pages:
        pg.goto('file://'+os.path.join(ROOT,'out',name+'.html'))
        pg.wait_for_timeout(600)
        el=pg.query_selector('#page-'+name+' > div')
        el.screenshot(path=os.path.join(ROOT,'shots',name+'.png'))
        print(name, el.bounding_box())
    b.close()
