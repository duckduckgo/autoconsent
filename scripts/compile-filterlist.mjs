import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { FiltersEngine } from '@ghostery/adblocker';

const rulesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../rules');

const filterlistContent = fs.readFileSync(path.join(rulesDir, 'filterlist.txt'), 'utf-8');

const engine = FiltersEngine.parse(filterlistContent, {
    enableMutationObserver: false, // we don't monitor DOM changes at the moment
    loadNetworkFilters: false,
    enableHtmlFiltering: false,
    loadCSPFilters: false,
});
const serializedEngine = engine.serialize();
const properlySizedBuffer = ensure16BitAlignment(serializedEngine.buffer);
const engineJson = JSON.stringify(Array.from(new Uint16Array(properlySizedBuffer)));
const engineLength = serializedEngine.length;

/**
 * Ensures the buffer is aligned to a 16-bit boundary by padding if necessary
 * @param {Buffer} originalBuffer
 * @returns {Buffer} - The aligned buffer
 */
function ensure16BitAlignment(originalBuffer) {
    // Check if the buffer's byte length is odd
    if (originalBuffer.byteLength % 2 !== 0) {
        // Create a new buffer with an additional byte for padding
        const paddedBuffer = new ArrayBuffer(originalBuffer.byteLength + 1);

        // Create a Uint8Array view over the original and new buffers
        const originalView = new Uint8Array(originalBuffer);
        const paddedView = new Uint8Array(paddedBuffer);

        // Copy the original data into the new buffer
        paddedView.set(originalView);

        // Add padding byte to end of buffer
        paddedView[originalBuffer.byteLength] = 0; // Padding byte

        return paddedBuffer;
    }

    // If already aligned, return the original buffer
    return originalBuffer;
}

fs.writeFile(
    path.join(rulesDir, '../lib/filterlist-engine.ts'),
    `
declare global {
const BUNDLE_FILTERLIST: boolean;
}
const serializedEngine = /* @__PURE__ */ new Uint8Array(new Uint16Array(
  ${engineJson}
).buffer).slice(0, ${engineLength});
const emptyEngine = /* @__PURE__ */ new Uint8Array([]);
export default BUNDLE_FILTERLIST ? serializedEngine : emptyEngine;
`,
    () => console.log('Written filterlist-engine.ts'),
);
