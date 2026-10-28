// Renders each Figma-generated TSX page to static HTML markup.
import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const pages = process.argv.slice(2);
fs.mkdirSync('raw', { recursive: true });
for (const name of pages) {
  const out = `build/${name}.cjs`;
  await build({
    entryPoints: [`src/${name}.tsx`],
    bundle: true, platform: 'node', format: 'cjs', outfile: out,
    jsx: 'automatic', external: ['react', 'react-dom'], logLevel: 'error',
  });
  const mod = require(path.resolve(out));
  const html = renderToStaticMarkup(React.createElement(mod.default));
  fs.writeFileSync(`raw/${name}.html`, html);
  console.log(name, html.length);
}
