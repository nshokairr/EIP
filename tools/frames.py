import os,sys
from playwright.sync_api import sync_playwright
from PIL import Image
ROOT=os.path.dirname(os.path.abspath(__file__))
n=sys.argv[1]; times=[int(t) for t in sys.argv[2].split(',')]; scroll=int(sys.argv[3]) if len(sys.argv)>3 else 0
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1536,'height':860})
    pg.goto('file://'+ROOT+'/out/index.html#'+n)
    if scroll: pg.wait_for_timeout(300); pg.mouse.wheel(0,scroll)
    last=0; ims=[]
    for t in times:
        pg.wait_for_timeout(t-last); last=t
        f=f'{ROOT}/shots/f_{n}_{t}.png'; pg.screenshot(path=f); ims.append(Image.open(f).resize((768,430)))
    W=Image.new('RGB',(768*2,430*((len(ims)+1)//2)),'white')
    for i,im in enumerate(ims): W.paste(im,((i%2)*768,(i//2)*430))
    W.save(f'{ROOT}/shots/frames_{n}.png')
    b.close()
