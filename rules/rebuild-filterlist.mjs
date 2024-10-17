#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { FiltersEngine } from "@cliqz/adblocker";

export const rulesDir = path.dirname(fileURLToPath(import.meta.url))

let filterlistContent = fs.readFileSync(path.join(rulesDir, 'filterlist.txt'), 'utf-8');
filterlistContent += fs.readFileSync(path.join(rulesDir, 'filterlist-overrides.txt'), 'utf-8');

const engine = FiltersEngine.parse(filterlistContent, {
  enableMutationObserver: false, // we don't monitor DOM changes at the moment
  loadNetworkFilters: false,
  enableHtmlFiltering: false,
  loadCSPFilters: false,
});
const serializedEngine = engine.serialize();
const engineJson = JSON.stringify(Array.from(serializedEngine));

fs.writeFile(
  path.join(rulesDir, "../lib/filterlist-engine.ts"),
  `
declare global {
  const BUNDLE_FILTERLIST: boolean;
}
const serializedEngine = /* @__PURE__ */ new Uint8Array(
  ${engineJson}
);
const emptyEngine = /* @__PURE__ */ new Uint8Array([]);
export default BUNDLE_FILTERLIST ? serializedEngine : emptyEngine;
`,
  () => console.log("Written filterlist-engine.ts")
);
