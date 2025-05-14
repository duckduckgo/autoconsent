import fs from 'node:fs';
import { join } from 'node:path';

if (process.argv.length !== 3) {
    console.log('Usage: npm run bundle-config-rules path/to/privacy-configuration');
    process.exit(0);
}

const privacyConfigPath = process.argv[2];
const autoconsentConfigPath = join(privacyConfigPath, 'features', 'autoconsent.json');
const config = JSON.parse(fs.readFileSync(autoconsentConfigPath, 'utf-8'));
const compactRules = JSON.parse(fs.readFileSync(join(__dirname, '../rules/compact-rules.json'), 'utf-8'));

config.settings.compactRuleList = compactRules;
// generate standard pretty-printed output
const outputData = JSON.stringify(config, undefined, 4);
fs.writeFileSync(autoconsentConfigPath, outputData);
