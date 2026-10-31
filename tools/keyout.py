"""Make the off-white backgrounds that the Figma export baked into raster images transparent.

Only the near-white area connected to the image border is keyed (so white discs/cards inside
an illustration stay solid), using colour-to-alpha against white: on a white page nothing
changes, but the images no longer show a box when they scale, glow or move."""
import os, sys
import numpy as np
from PIL import Image
from scipy import ndimage

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(ROOT, 'out', 'assets')
SKIP = {'33-458.webp', 'platform-bg.webp'}  # the voices artwork is layered separately
TOL = 243


def key(path):
    im = Image.open(path).convert('RGBA')
    a = np.asarray(im).astype(np.float32)
    rgb, al = a[..., :3], a[..., 3]
    mn = rgb.min(-1)
    border = np.concatenate([mn[0], mn[-1], mn[:, 0], mn[:, -1]])
    balpha = np.concatenate([al[0], al[-1], al[:, 0], al[:, -1]])
    if (border >= TOL).mean() < .85 or balpha.mean() < 200:
        return False
    light = mn >= TOL
    lab, _ = ndimage.label(light)
    edge_labels = np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))
    region = np.isin(lab, edge_labels[edge_labels > 0])
    # include a 2px fringe so the keyed edge blends
    region = ndimage.binary_dilation(region, iterations=2)
    k = ((255 - rgb) / 255).max(-1)                       # colour-to-alpha against white
    na = np.where(region, np.minimum(k * 255 * 1.0, al), al)
    safe = np.maximum(k, 1e-4)[..., None]
    nrgb = np.where(region[..., None], 255 - (255 - rgb) / safe, rgb)
    out = np.concatenate([np.clip(nrgb, 0, 255), na[..., None]], -1).astype(np.uint8)
    Image.fromarray(out, 'RGBA').save(path, 'WEBP', quality=90, method=6)
    return True


if __name__ == '__main__':
    n = 0
    for f in sorted(os.listdir(D)):
        if f.endswith('.webp') and f not in SKIP and key(os.path.join(D, f)):
            n += 1
    print('keyed', n)
