#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { FiltersEngine } from "@cliqz/adblocker";

export const rulesDir = path.dirname(fileURLToPath(import.meta.url))

// TODO: consider using python-abp (flrender) to generate filterlist properly
const filterlistContent = `
[Adblock Plus 2.0]
! Title: CPM Cosmetic Filter List
!------------------------General element hiding rules-------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_general_hide.txt'), 'utf-8')}
!------------------------Specific element hiding rules------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_specific_hide.txt'), 'utf-8')}
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_specific_uBO.txt'), 'utf-8')}
!------------------------Rules for international sites------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_international_specific_hide.txt'), 'utf-8')}
!---------------------------------Allowlists----------------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_allowlist_general_hide.txt'), 'utf-8')}
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'easylist_cookie_allowlist.txt'), 'utf-8')}
!--------------------------------DDG overrides--------------------------------!
${fs.readFileSync(path.join(rulesDir, 'filterlists', 'overrides.txt'), 'utf-8')}
`;

fs.writeFile(
  path.join(rulesDir, "filterlist.txt"),
  filterlistContent,
  () => console.log("Written filterlist.txt")
);

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
