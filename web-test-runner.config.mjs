import {esbuildPlugin} from '@web/dev-server-esbuild';

export default {
  files: [
    'tests-wtr/**/*.test.html',
  ],
  nodeResolve: true,
  plugins: [esbuildPlugin({ts: true})],
};
