import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

export default [{
  input: './playwright/content.ts',
  output: [{
    file: 'dist/autoconsent.playwright.js',
    format: 'iife'
  }],
  plugins: [
    json(),
    typescript(),
    terser(),
  ]
}, {
  input: './playwright/standalone.ts',
  output: [{
    file: 'dist/autoconsent.standalone.js',
    format: 'iife'
  }],
  plugins: [
    json(),
    typescript(),
    terser(),
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
    terser(),
  ],
}, {
  input: './addon/background.ts',
  output: [{
    file: './dist/addon-mv3/background.bundle.js',
    format: 'iife',
  }, {
    file: './dist/addon-firefox/background.bundle.js',
    format: 'iife',
  }],
  plugins: [
    typescript(),
    terser(),
    copy({
      targets: [
        {
          src: ['./addon/mv3/icons',  './rules/rules.json'],
          dest: ['./dist/addon-firefox/', './dist/addon-mv3/']
        },
        { src: './addon/mv3/manifest.json', dest: './dist/addon-mv3' },
        { src: './addon/firefox/manifest.json', dest: './dist/addon-firefox' },
      ]
    })
  ]
}, {
  input: './addon/content.ts',
  output: [{
    file: './dist/addon-mv3/content.bundle.js',
    format: 'iife',
  }, {
    file: './dist/addon-firefox/content.bundle.js',
    format: 'iife',
  }],
  plugins: [
    typescript(),
    terser(),
  ],
}];