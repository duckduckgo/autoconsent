import pkg from './package.json';

export default [{
  input: './lib/node.js',
  output: [{
    file: pkg.main,
    format: 'cjs'
  }],
}, {
  input: './lib/web.js',
  output: [{
    file: pkg.module,
    format: 'es',
  }],
}];