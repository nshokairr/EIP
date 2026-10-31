#!/bin/sh
# raster pipeline: Experio recolour -> key out baked white backgrounds -> cut voice sprites
set -e
cd "$(dirname "$0")/.."
python3 tools/recolor.py && python3 tools/keyout.py && python3 tools/voices.py >/dev/null
