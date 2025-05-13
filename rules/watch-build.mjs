import fs from 'fs';
import path from 'path';
import { buildAutoconsentRules, rulesDir } from './build.mjs';

(async () => {
    fs.watch(path.join(rulesDir, 'autoconsent'), async () => {
        console.log('rebuild rule.json');
        const autoconsent = await buildAutoconsentRules();
        const contents = JSON.stringify({ autoconsent }, undefined, '  ');
        await fs.promises.writeFile(path.join(rulesDir, 'rules.json'), contents);
        await fs.promises.writeFile(path.join(rulesDir, '../dist/addon-mv3/rules.json'), contents);
        await fs.promises.writeFile(path.join(rulesDir, '../dist/addon-firefox/rules.json'), contents);
    });
})();
