import fs from "fs";
import path from "path";
import {
  buildAutoconsentRules,
  buildConsentOMaticRules,
  combineRules,
  rulesDir,
} from "./build.mjs";

(async () => {
  const consentomatic = await buildConsentOMaticRules();
  fs.watch(path.join(rulesDir, 'autoconsent'), async () => {
    console.log('rebuild rule.json')
    const autoconsent = await buildAutoconsentRules();
    const contents = JSON.stringify(combineRules(autoconsent, consentomatic), undefined, "  ")
    await fs.promises.writeFile(
      path.join(rulesDir, "rules.json"),
      contents
    );
    await fs.promises.writeFile(path.join(rulesDir, '../dist/addon-mv3/rules.json'), contents)
    await fs.promises.writeFile(path.join(rulesDir, '../dist/addon-firefox/rules.json'), contents)
  });
})();
