import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
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
    globals: ['browser'],
  }],
}, {
  input: './test/background.js',
  output: [{
    file: './test/background.bundle.js',
    format: 'iife',
  }],
  plugins: [
    nodeResolve(),
    commonjs()
  ],
}, {
  input: './test/content.js',
  output: [{
    file: './test/content.bundle.js',
    format: 'iife',
  }]
}];