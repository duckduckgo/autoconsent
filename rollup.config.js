import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default [{
  input: './lib/node.ts',
  output: [{
    file: 'dist/autoconsent.puppet.js',
    format: 'cjs'
  }],
  plugins: [
    typescript(),
  ]
}, {
  input: './lib/web.ts',
  output: [{
    file: pkg.module,
    format: 'es',
    globals: ['browser'],
  }, {
    file: pkg.main,
    format: 'cjs',
  }],
  plugins: [
    typescript(),
  ]
}, {
  input: './test/background.js',
  output: [{
    file: './test/background.bundle.js',
    format: 'iife',
  }],
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs(),
    json(),
  ],
}, {
  input: './test/content.js',
  output: [{
    file: './test/content.bundle.js',
    format: 'iife',
  }],
  plugins: [
    typescript(),
  ]
}, {
  input: './addon/background.ts',
  output: [{
    file: './addon/background.bundle.js',
    format: 'iife',
  }],
  plugins: [
    typescript(),
  ]
}, {
  input: './addon/content.ts',
  output: [{
    file: './addon/content.bundle.js',
    format: 'iife',
  }],
  plugins: [
    typescript(),
  ]
}];