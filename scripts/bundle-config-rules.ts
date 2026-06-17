import fs from 'fs';
import path from 'path';
import { applyEdits, modify, parse, type JSONPath } from 'jsonc-parser';
import { encodeRules, type IndexedCMPRuleset } from '../lib/encoding';

if (process.argv.length !== 3) {
    console.log('Usage: npm run bundle-config-rules path/to/privacy-configuration');
    process.exit(0);
}

const privacyConfigPath = process.argv[2];

const bundleLocations = [path.join(privacyConfigPath, 'features', 'autoconsent.json')];

// we need to re-generate compact rules based on the existing config, to minimize the diff
const autoconsentRules = JSON.parse(fs.readFileSync(path.join(__dirname, '../rules/rules.json'), 'utf-8')).autoconsent;

for (const location of bundleLocations) {
    // privacy-configuration source files may contain comments (JSONC). Parse
    // leniently and apply a targeted edit so comments and formatting survive.
    const text = fs.readFileSync(location, 'utf-8');
    const config = parse(text);
    let rulePath: JSONPath;
    let newCompactRuleList: IndexedCMPRuleset;
    if (location.endsWith('autoconsent.json')) {
        console.log(`Existing compact rule list: ${config.settings.compactRuleList.s.slice(0, 10)}`);
        // global config
        newCompactRuleList = encodeRules(autoconsentRules, config.settings.compactRuleList);
        rulePath = ['settings', 'compactRuleList'];
    } else {
        // platform override
        newCompactRuleList = encodeRules(autoconsentRules, config.features.autoconsent.settings.compactRuleList);
        rulePath = ['features', 'autoconsent', 'settings', 'compactRuleList'];
    }
    const edits = modify(text, rulePath, newCompactRuleList, {
        formattingOptions: { tabSize: 4, insertSpaces: true },
    });
    fs.writeFileSync(location, applyEdits(text, edits));
}
