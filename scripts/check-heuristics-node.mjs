// Checks that lib/heuristic-classify.ts (the @duckduckgo/autoconsent/heuristics export) runs without DOM globals.
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { build } from 'esbuild';

const { outputFiles } = await build({
    entryPoints: ['lib/heuristic-classify.ts'],
    bundle: true,
    format: 'cjs',
    platform: 'neutral',
    target: 'es2021',
    write: false,
});

// A bare context: no window, document, or Node globals, so any DOM access at import or call time throws.
/** @type {{ exports: typeof import('../lib/heuristic-classify.js') }} */
const module = { exports: /** @type {any} */ ({}) };
vm.runInNewContext(outputFiles[0].text, { module, exports: module.exports });
const h = module.exports;

assert.equal(h.classifyButtonTextRegex('Reject all'), 'reject');
assert.equal(h.classifyButtonTextRegex('Accept all'), 'accept');
assert.equal(h.classifyButtonTextRegex('Cookie settings'), 'settings');
assert.equal(h.classifyButtonTextRegex('Got it'), 'acknowledge');
assert.ok(h.checkHeuristicPatterns('We use cookies to improve your experience').patterns.length > 0);
assert.equal(h.isExcludedPopup('You must be 18 or older to enter'), true);
const buttons = [{ text: 'Accept all' }, { text: 'Reject all' }];
h.classifyButtons(buttons);
assert.equal(h.classifyPopup(buttons), 'reject');

console.log('heuristic-classify runs without DOM globals');
