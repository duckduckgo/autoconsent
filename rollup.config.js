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
},  {
  input: './addon/test.ts',
  output: [{
    file: './addon/test.bundle.js',
    format: 'iife',
    external: ['chai', 'mocha']
  }],
  plugins: [
    typescript(),
  ]
}];