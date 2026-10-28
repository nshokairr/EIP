# Experience Intelligence Platform — website prototype

A clickable, motion-rich prototype of the seven EIP desktop pages, built to match the Figma design
(`Experience Intelligent Platforn UDTech (Copy)`).

Pages: Home, Platform, How It Works, Features, Benchmarking, About Us, Contact Us.

## View it
Open `site/index.html` in a browser (keep the `site/assets` folder next to it).
Each page has its own link: `index.html#home`, `#platform`, `#how`, `#features`, `#benchmarking`, `#about`, `#contact`.

## What's in here
| Folder | Contents |
|---|---|
| `site/` | The finished prototype, ready to open or host (e.g. GitHub Pages). |
| `source/` | Everything used to build it: page markup taken from Figma, exported artwork, styles and the motion layer. |
| `tools/` | Scripts that screenshot each page and compare it with the Figma screenshots. |

## How motion works
- `source/motion.js` holds the animation plan for each page (what appears, when, and how).
- Entrance animations only change opacity, clipping and position offsets, then end exactly on the Figma layout.
- Ambient loops (floating icons, drifting waves, data dots moving along connector lines) live in `source/motion.css` and `motion.js`.
- Animations respect the system "reduce motion" setting.

## Rebuild
```bash
cd source
npm install            # react, esbuild, tailwindcss
node render.mjs HomeDesktop AboutUsDesktop ContactUsDesktop FeaturesDesktop PlatformDesktop BenchmarkingDesktop HowItWorksDesktop
python3 build.py       # swaps Figma asset links for local artwork, adds hooks
npx @tailwindcss/cli -i tw.css -o build/tw.css
python3 assemble.py    # writes out/index.html (add --inline for a single self-contained file)
```
