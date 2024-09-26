import * as esbuild from 'esbuild'
import path from 'node:path'

/*
 * The reason for using build.mjs instead of esbuild CLI is the ability to use plugins,
 * which we use to insert test-only code into a dedicated build
 * (when the custom --test flag is passed; possibly there's a more suitable, eslint-native parameter).
 *
 * It is likely that build.mjs might become the way to bundle other types of assets as well, so build.sh would be effectively migrated into build.mjs.
 */

const isTest = process.argv.includes('--test');
const outDir = path.join('dist', isTest ? 'addon-mv3-test' : 'addon-mv3')

const onResolveReplaceWithTestSuffix = (build, name) => {
  // see https://esbuild.github.io/plugins/#on-resolve
  build.onResolve({ filter: new RegExp(name)}, args =>
    ({
      path: path.join(args.resolveDir, args.path.replace(name, `${name}.test`) + '.ts'),
    }));
}

const testWorkaroundsPlugin = {
  name: 'test-workarounds',
  setup(build) {
    if (isTest) {
      onResolveReplaceWithTestSuffix(build, 'send-content-message')
      onResolveReplaceWithTestSuffix(build, 'is-top-window')
    }
  }
}

await esbuild.build({
  entryPoints: ['addon/background.ts'],
  bundle: true,
  outfile: outDir + '/background.bundle.js',
});
await esbuild.build({
  entryPoints: ['addon/content.ts'],
  bundle: true,
  outfile: outDir + '/content.bundle.js',
  plugins: [testWorkaroundsPlugin]
})
await esbuild.build({
  entryPoints: ['addon/popup.ts'],
  bundle: true,
  outfile: outDir + '/popup.bundle.js',
})
await esbuild.build({
  entryPoints: ['addon/devtools/panel.ts'],
  bundle: true,
  outfile: outDir + '/devtools/panel.js',
})
