#!/bin/bash
set -ex

ESBUILD="node_modules/.bin/esbuild --bundle"

$ESBUILD --format=iife --target=es2021 --minify playwright/content.ts --outfile=dist/autoconsent.playwright.js
$ESBUILD --format=iife --target=es2021 playwright/unit.ts --outfile=dist/autoconsent.unit.js
$ESBUILD --format=esm --target=es2021 lib/web.ts --outfile=dist/autoconsent.esm.js
$ESBUILD --format=cjs --target=es2021 --platform=node lib/web.ts --outfile=dist/autoconsent.cjs.js

# Extension
$ESBUILD addon/background.ts --outfile=dist/addon-mv3/background.bundle.js
$ESBUILD addon/content.ts --outfile=dist/addon-mv3/content.bundle.js
$ESBUILD addon/popup.ts --outfile=dist/addon-mv3/popup.bundle.js
$ESBUILD addon/devtools/panel.ts --outfile=dist/addon-mv3/devtools/panel.js

## Copy extension files into place
mkdir -p dist/addon-firefox
cp dist/addon-mv3/background.bundle.js dist/addon-firefox/background.bundle.js
cp dist/addon-mv3/content.bundle.js dist/addon-firefox/content.bundle.js
cp -r addon/icons dist/addon-mv3/
cp -r addon/icons dist/addon-firefox/
cp rules/rules.json dist/addon-mv3/
cp rules/rules.json dist/addon-firefox/
cp addon/popup.html dist/addon-mv3/
cp -r addon/devtools dist/addon-mv3/
cp addon/manifest.mv3.json dist/addon-mv3/manifest.json
cp addon/manifest.firefox.json dist/addon-firefox/manifest.json
cp node_modules/bulma/css/bulma.min.css dist/addon-mv3/devtools/
