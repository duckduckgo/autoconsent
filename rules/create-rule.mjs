#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const rulesDir = path.dirname(fileURLToPath(import.meta.url));
const testsDir = path.join(rulesDir, '../tests/sites');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

(async () => {
    const name = await prompt('New rule name: ');
    const filename = `autoconsent/${name}.json`;
    const rule = {
        name,
        _metadata: {
            vendorUrl: 'https://unknown',
        },
        cosmetic: false,
        runContext: {
            main: true,
            frame: false,
            urlPattern: '',
        },
        prehideSelectors: [],
        detectCmp: [{ exists: '#TODO' }],
        detectPopup: [{ visible: '#TODO' }],
        optIn: [{ waitForThenClick: '#Accept' }],
        optOut: [{ waitForThenClick: '#Reject' }],
        test: [{ cookieContains: 'TODO' }],
    };
    const ruleString = JSON.stringify(rule, undefined, 4);
    // Lint fails until the sites are filled in: every group needs at least one URL.
    const testData = {
        cmp: name,
        tests: [{ sites: [] }],
    };
    const testString = `${JSON.stringify(testData, undefined, 4)}\n`;
    console.log('Writing rule to', filename);
    await fs.promises.writeFile(path.join(rulesDir, filename), ruleString);
    console.log('Writing test sites to', `tests/sites/${name}.json`);
    await fs.promises.writeFile(path.join(testsDir, `${name}.json`), testString);
    rl.close();
})();
