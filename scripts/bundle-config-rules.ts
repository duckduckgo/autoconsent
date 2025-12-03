import fs from 'fs';
import path from 'path';
import { encodeRules } from '../lib/encoding';

if (process.argv.length !== 3) {
    console.log('Usage: npm run bundle-config-rules path/to/privacy-configuration');
    process.exit(0);
}

const privacyConfigPath = process.argv[2];

const bundleLocations = [path.join(privacyConfigPath, 'features', 'autoconsent.json')];

// we need to re-generate compact rules based on the existing config, to minimize the diff
const autoconsentRules = JSON.parse(fs.readFileSync(path.join(__dirname, '../rules/rules.json'), 'utf-8')).autoconsent;

for (const location of bundleLocations) {
    const config = JSON.parse(fs.readFileSync(location, 'utf-8'));
    if (location.endsWith('autoconsent.json')) {
        console.log(`Existing compact rule list: ${config.settings.compactRuleList.s.slice(0, 10)}`);
        // global config
        config.settings.compactRuleList = encodeRules(autoconsentRules, config.settings.compactRuleList);
    } else {
        // platform override
        config.features.autoconsent.settings.compactRuleList = encodeRules(
            autoconsentRules,
            config.features.autoconsent.settings.compactRuleList,
        );
    }
    // generate standard pretty-printed output
    const outputData = JSON.stringify(config, undefined, 4);
    fs.writeFileSync(location, outputData);
}
