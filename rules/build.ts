#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import https from 'https';
import { encodeRules, encodeRulesV2 } from '../lib/encoding';
import { AutoConsentCMPRule } from '../lib/rules';

export const rulesDir = __dirname;

async function readFileJSON(filePath: string) {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    try {
        return JSON.parse(data);
    } catch (e) {
        console.error(`Error parsing ${filePath}:`, e);
        throw e;
    }
}

export async function buildAutoconsentRules(): Promise<AutoConsentCMPRule[]> {
    // merge rules from ./autoconsent into rules.autoconsent array
    const autoconsentDir = path.join(rulesDir, 'autoconsent');
    const files = fs.readdirSync(autoconsentDir);
    const generatedRulesDir = path.join(rulesDir, 'generated');
    const generatedFiles = fs.readdirSync(generatedRulesDir);
    const normalRules = await Promise.all(files.map((file) => readFileJSON(path.join(autoconsentDir, file))));
    const generatedRules = await Promise.all(generatedFiles.map((file) => readFileJSON(path.join(generatedRulesDir, file))));

    return [...normalRules, ...deduplicateRules(generatedRules)];
}

function deduplicateRules(rules: AutoConsentCMPRule[]) {
    const rulesBySelector = new Map<string, AutoConsentCMPRule[]>();
    const dedupedRules: AutoConsentCMPRule[] = [];
    rules.forEach((rule) => {
        const selector = rule.detectCmp[0].exists || '';
        if (selector && typeof selector === 'string' && rule.runContext?.urlPattern) {
            const patterns = rulesBySelector.get(selector) || [];
            patterns.push(rule);
            rulesBySelector.set(selector, patterns);
        } else {
            dedupedRules.push(rule);
        }
    });
    rulesBySelector.forEach((rules, selector) => {
        if (rules.length === 1) {
            dedupedRules.push(rules[0]);
            return;
        }
        dedupedRules.push({
            name: `${rules[0].name}_+${rules.length - 1}`,
            detectCmp: [{ exists: selector }],
            detectPopup: [{
                visible: selector,
            }],
            optOut: [{
                waitForThenClick: selector,
            }],
            optIn: [],
            runContext: { urlPattern: rules.map(rule => rule.runContext!.urlPattern).join('|') },
        } as AutoConsentCMPRule);
    });
    return dedupedRules;
}

export async function buildConsentOMaticRules() {
    // fetch ConsentOMatic rule set and merge with our custom rules
    const consentOMaticCommit = '7d7fd2bd6bf2b662350b0eaeca74db6eba155efe';
    const consentOMaticUrl = `https://raw.githubusercontent.com/cavi-au/Consent-O-Matic/${consentOMaticCommit}/Rules.json`;
    const consentOMaticInclude = ['didomi.io', 'oil', 'optanon', 'quantcast2', 'springer', 'wordpressgdpr'];
    const comRules: Record<string, object> = {};
    const allComRules: Record<string, object> = await new Promise((resolve) => {
        https.get(consentOMaticUrl, (res) => {
            res.setEncoding('utf-8');
            let content = '';
            res.on('data', (data) => (content += data));
            res.on('end', () => resolve(JSON.parse(content)));
        });
    });
    consentOMaticInclude.forEach((name) => {
        comRules[name] = allComRules[name];
    });
    return comRules;
}

(async () => {
    const stringify = (rules: object) => JSON.stringify(rules);
    const autoconsent = await buildAutoconsentRules();
    const consentomatic = await buildConsentOMaticRules();

    const compactRulesPath = path.join(rulesDir, 'compact-rules.json');
    let existingCompactRules = null;
    if (fs.existsSync(compactRulesPath)) {
        existingCompactRules = await readFileJSON(compactRulesPath);
    }

    fs.writeFile(path.join(rulesDir, 'rules.json'), stringify({ autoconsent }), () => console.log('Written rules.json'));
    fs.writeFile(path.join(rulesDir, 'consentomatic.json'), stringify({ consentomatic }), () => console.log('Written consentomatic.json'));
    fs.writeFile(compactRulesPath, stringify(encodeRules(autoconsent, existingCompactRules)), () =>
        console.log('Written compact-rules.json'),
    );
    fs.writeFile(path.join(rulesDir, 'compact-rules-v2.json'), stringify(encodeRulesV2(autoconsent, existingCompactRules)), () =>
        console.log('Written compact-rules-v2.json'),
    );
})();
