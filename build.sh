#!/bin/sh
# Precompile all JSX into one minified bundle.js.
# The .jsx files share one lexical scope (they previously loaded as
# sequential Babel scripts), so they are concatenated in load order and
# compiled as a single IIFE. React/ReactDOM/TWEAK_DEFAULTS stay external
# globals. Run this after ANY .jsx edit, before `vercel deploy`.
set -e
cd "$(dirname "$0")"
cat tweaks-panel.jsx shared.jsx layout.jsx home.jsx pages-a.jsx pages-b.jsx pages-c.jsx app.jsx > /tmp/smd-concat.jsx
npx esbuild /tmp/smd-concat.jsx --loader:.jsx=jsx --format=iife --minify --charset=utf8 --outfile=bundle.js
rm /tmp/smd-concat.jsx
echo "bundle.js: $(wc -c < bundle.js) bytes"
