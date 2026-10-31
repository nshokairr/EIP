# Experio — website prototype

A clickable, motion-rich prototype of the Experio website (formerly Experience Intelligence Platform, UDTech),
built to match the Figma design. It is responsive: phones get the Figma **mobile** design, wider screens the
**desktop** design.

Pages: Home, About Us, Platform, How It Works (with Features), Benchmarking, Contact Us — plus the
"Message sent" view after Send Message.

## View it
Open `site/index.html` in a browser (keep `site/assets` and `site/m` next to it).
Each page has its own link: `index.html#home`, `#about`, `#platform`, `#how`, `#features`, `#benchmarking`, `#contact`.
Screens 767px wide or less show the mobile design; resize the window to switch.

## What's in here
| Folder | Contents |
|---|---|
| `site/` | The finished prototype, ready to open or host (e.g. GitHub Pages). |
| `source/` | Everything used to build it: page markup from Figma (desktop + mobile), artwork, styles and the motion layer. |
| `tools/` | Asset pipeline (recolour, background clean-up, voice sprites) and screenshot/frame checks. |

## Branding
- Experio logo: Option 3 from the Experio brand presentation (vector, `source/brand/`).
- Colours: every colour in the design is moved onto the Experio palette (orange → magenta → purple → blue → teal);
  raster artwork is recoloured to match (`tools/recolor.py`).
- Nav: Home, About Us, Platform, How It Works ▾ (Features), Benchmarking, Contact Us. Footer follows the GXPER structure.

## Motion
- `source/motion.js` holds the animation plan: every section enters in its own way and ends exactly on the Figma layout.
- Highlights: typed hero headline, heartbeat behind the intelligence engine, channels bursting out of the engine,
  a signal spark relaying through the "One platform" steps, talking customer voices with speech bubbles and
  notification badges, floating nav bar that hides on scroll down and returns on scroll up, Message sent confetti.
- Mobile pages get their own choreography, read from the mobile layout.
- Animations respect the system "reduce motion" setting.

## Rebuild
```bash
cd source
npm install                       # react, esbuild, tailwindcss
python3 build.py                  # desktop markup from Figma -> pages/
python3 rebrand.py                # Experio branding, nav, footer, success view -> pages_x/
python3 mbuild.py                 # mobile markup from Figma -> pages_m/
sh ../tools/assets.sh             # recolour artwork, clean backgrounds, cut voice sprites
npx @tailwindcss/cli -i tw.css -o build/tw.css
python3 assemble.py               # -> out/index.html   (add --inline for a single self-contained file)
```
