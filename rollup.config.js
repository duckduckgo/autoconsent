import pkg from './package.json';
const input = './lib/index.js';

export default [{
  input,
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'cjs' },
  ],
}];