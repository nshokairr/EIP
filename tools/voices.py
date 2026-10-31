"""Cut the avatars and channel bubbles out of the 'customer voices' artwork as round sprites,
so each one can move on its own above the base picture."""
import json, os
import numpy as np
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'out', 'assets', '33-458.webp')
K = 876.43 / 1227
# centre x, y and disc radius in artwork pixels
SPRITES = [
    ('woman', 385, 75, 80, 'avatar'), ('man', 781, 222, 95, 'avatar'),
    ('chat', 254, 165, 52, 'icon'), ('qr', 330, 322, 52, 'icon'), ('bot', 638, 50, 52, 'icon'),
    ('smile', 527, 250, 52, 'icon'), ('phone', 998, 58, 51, 'icon'), ('mail', 1003, 308, 52, 'icon'),
]
PAD, FEATHER = 16, 8

im = Image.open(SRC).convert('RGBA')
A = np.asarray(im)
out = []
for name, cx, cy, r, kind in SPRITES:
    R = r + PAD
    x0, y0 = cx - R, cy - R
    crop = np.zeros((2 * R, 2 * R, 4), np.uint8)
    sx0, sy0, sx1, sy1 = max(0, x0), max(0, y0), min(A.shape[1], cx + R), min(A.shape[0], cy + R)
    crop[sy0 - y0:sy1 - y0, sx0 - x0:sx1 - x0] = A[sy0:sy1, sx0:sx1]
    yy, xx = np.mgrid[0:2 * R, 0:2 * R] + .5
    d = np.hypot(xx - R, yy - R)
    m = np.clip((R - d) / FEATHER, 0, 1)
    crop[..., 3] = (crop[..., 3] * m).astype(np.uint8)
    Image.fromarray(crop, 'RGBA').save(os.path.join(ROOT, 'out', 'assets', f'voice-{name}.webp'), 'WEBP', quality=92, method=6)
    out.append({'name': name, 'kind': kind, 'x': round((cx - R) * K, 2), 'y': round((cy - R) * K, 2), 'size': round(2 * R * K, 2),
                'cx': round(cx * K, 2), 'cy': round(cy * K, 2), 'r': round(r * K, 2)})
json.dump(out, open(os.path.join(ROOT, 'brand', 'voices.json'), 'w'), indent=1)
print(json.dumps(out))
