import sys,os
from PIL import Image, ImageChops
names={'home':'home','platform':'platform','how':'how','features':'features','benchmarking':'bench','about':'about','contact':'contact'}
for n in sys.argv[1:] or names:
    a=Image.open(f'ref/{names[n]}.png').convert('RGB'); b=Image.open(f'shots/{n}.png').convert('RGB')
    b=b.resize(a.size)
    d=ImageChops.difference(a,b).convert('L').point(lambda v:255 if v>40 else 0)
    score=sum(1 for v in d.getdata() if v)/ (a.size[0]*a.size[1])
    W,H=a.size
    c=Image.new('RGB',(W*3,H),'white'); c.paste(a,(0,0)); c.paste(b,(W,0)); c.paste(d.convert('RGB'),(W*2,0))
    c.save(f'shots/cmp_{n}.png'); print(n, round(score*100,2),'% px differ')
