import { build } from 'esbuild';
import vue from 'esbuild-plugin-vue3';

await build({
  plugins: [vue({
    // enableDevTools: true,
  })],
  bundle: true,
  entryPoints: ['addon/devtools/builder-panel/builder-panel.ts'],
  outfile: 'dist/addon-mv3/devtools/builder-panel/builder-panel.js',
});

await build({
  bundle: true,
  entryPoints: ['addon/devtools/builder-panel/page-helpers.ts'],
  outfile: 'dist/addon-mv3/devtools/builder-panel/page-helpers.js',
});
