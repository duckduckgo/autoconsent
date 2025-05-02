#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import https from 'https';
import { encodeRules } from '../lib/encoding';
import { AutoConsentCMPRule } from '../lib/rules';
import { RuleBundle } from '../lib/types';

export const rulesDir = __dirname;

async function readFileJSON(filePath: string) {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

export async function buildAutoconsentRules(): Promise<AutoConsentCMPRule[]> {
    // merge rules from ./autoconsent into rules.autoconsent array
    const autoconsentDir = path.join(rulesDir, 'autoconsent');
    const files = fs.readdirSync(autoconsentDir);
    return await Promise.all(files.map((file) => readFileJSON(path.join(autoconsentDir, file))));
}

// export async function buildConsentOMaticRules() {
//     // fetch ConsentOMatic rule set and merge with our custom rules
//     const consentOMaticCommit = '7d7fd2bd6bf2b662350b0eaeca74db6eba155efe';
//     const consentOMaticUrl = `https://raw.githubusercontent.com/cavi-au/Consent-O-Matic/${consentOMaticCommit}/Rules.json`;
//     const consentOMaticInclude = ['didomi.io', 'oil', 'optanon', 'quantcast2', 'springer', 'wordpressgdpr'];
//     const comRules = {};
//     const allComRules = await new Promise((resolve) => {
//         https.get(consentOMaticUrl, (res) => {
//             res.setEncoding('utf-8');
//             let content = '';
//             res.on('data', (data) => (content += data));
//             res.on('end', () => resolve(JSON.parse(content)));
//         });
//     });
//     consentOMaticInclude.forEach((name) => {
//         comRules[name] = allComRules[name];
//     });
//     return comRules;
// }

export function combineRules(autoconsent: AutoConsentCMPRule[]): RuleBundle {
    return {
        autoconsent,
        // consentomatic,
    };
}

export function compactPrettyPrint(encodedRules: string) {
    const outputLines = [];
    let inRules = false;
    let ruleAcc = '';
    for (const line of encodedRules.split('\n')) {
        if (!inRules && line === '  "r": [') {
            inRules = true;
            outputLines.push(line)
            continue;
        }
        if (!inRules) {
            outputLines.push(line)
            continue;
        }
        if (line.startsWith('    ]')) {
            const rule = JSON.parse(ruleAcc + ']')
            outputLines.push(`    ${JSON.stringify(rule)}${line.endsWith(',') ? ',' : ''}`)
            ruleAcc = ''
            if (!line.endsWith(',')) {
                inRules = false
            }
            continue;
        }
        ruleAcc += line;
    }
    return outputLines.join('\n')
}

(async () => {
    const stringify = (rules: object) => JSON.stringify(rules, undefined, 2)
    const rules = combineRules(await buildAutoconsentRules());
    fs.writeFile(path.join(rulesDir, 'rules.json'), stringify(rules), () => console.log('Written rules.json'));
    fs.writeFile(path.join(rulesDir, 'encoded-autoconsent-rules.json'), compactPrettyPrint(stringify(encodeRules(rules.autoconsent))), () => console.log('Written encoded-autoconsent-rules.json'));
})();
