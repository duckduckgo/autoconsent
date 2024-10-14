import {esbuildPlugin} from '@web/dev-server-esbuild';
import {fileURLToPath} from "url";

export default {
  files: [
    'tests-wtr/**/*.html',
  ],
  nodeResolve: true,
  plugins: [
    esbuildPlugin({
      ts: true,
      tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
      target: 'es2021',
    })
  ],
};
