"""Shift the raster artwork from the old EIP violet/pink palette onto the Experio palette.

Only saturated pixels in the violet-blue-pink-coral band (and the teal/cyan band) move;
skin tones, greys, whites and photos' neutral areas stay as they are."""
import os, sys, shutil
import numpy as np
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'out', 'assets_orig')
DST = os.path.join(ROOT, 'out', 'assets')
if not os.path.isdir(SRC):
    shutil.copytree(DST, SRC)

# hue anchors in degrees: old palette -> Experio
OLD = np.array([150, 175, 200, 225, 236, 255, 266, 280, 300, 320, 335, 350, 360])
NEW = np.array([150, 163, 205, 230, 236, 250, 256, 285, 300, 326, 333, 343, 355])

def rgb_to_hsv(a):
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    mx = a.max(-1); mn = a.min(-1); d = mx - mn
    h = np.zeros_like(mx)
    m = d > 1e-6
    rr = (mx == r) & m; gg = (mx == g) & m & ~rr; bb = m & ~rr & ~gg
    h[rr] = ((g - b)[rr] / d[rr]) % 6
    h[gg] = (b - r)[gg] / d[gg] + 2
    h[bb] = (r - g)[bb] / d[bb] + 4
    h = h * 60
    s = np.where(mx > 1e-6, d / np.maximum(mx, 1e-6), 0)
    return h, s, mx

def hsv_to_rgb(h, s, v):
    c = v * s; hp = (h / 60) % 6; x = c * (1 - np.abs(hp % 2 - 1)); m = v - c
    z = np.zeros_like(h)
    conds = [(hp < 1), (hp < 2), (hp < 3), (hp < 4), (hp < 5), (hp >= 5)]
    rs = [c, x, z, z, x, c]; gs = [x, c, c, x, z, z]; bs = [z, z, x, c, c, x]
    r = np.select(conds, rs); g = np.select(conds, gs); b = np.select(conds, bs)
    return np.stack([r + m, g + m, b + m], -1)

def recolor(path_in, path_out):
    im = Image.open(path_in).convert('RGBA')
    a = np.asarray(im).astype(np.float32) / 255
    rgb, alpha = a[..., :3], a[..., 3:]
    h, s, v = rgb_to_hsv(rgb)
    band = (s > .18) & (((h >= 150) & (h < 360)))
    hn = np.interp(h, OLD, NEW)
    # Experio is a little softer than the old electric violet
    soft = (h >= 225) & (h < 300)
    sn = np.where(soft, s * .82, s * .92)
    vn = np.where(soft, v * .97, v)
    out = hsv_to_rgb(np.where(band, hn, h), np.where(band, sn, s), np.where(band, vn, v))
    res = np.concatenate([np.clip(out, 0, 1), alpha], -1)
    Image.fromarray((res * 255 + .5).astype(np.uint8), 'RGBA').save(path_out, 'WEBP', quality=90, method=6)

if __name__ == '__main__':
    files = sorted(f for f in os.listdir(SRC) if f.endswith('.webp'))
    for f in files:
        recolor(os.path.join(SRC, f), os.path.join(DST, f))
    print('recoloured', len(files))
