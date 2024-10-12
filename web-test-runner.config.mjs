import {esbuildPlugin} from '@web/dev-server-esbuild';

export default {
  files: [
    'tests-wtr/**/*.html',
  ],
  nodeResolve: true,
  plugins: [esbuildPlugin({ts: true})],
};
