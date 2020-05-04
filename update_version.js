const fs = require('fs');

const manifestFile = './addon/manifest.json';
const version = process.env.TAG_NAME || require('./package.json').version;
const manifest = require(manifestFile);
manifest.version = version;
fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2));