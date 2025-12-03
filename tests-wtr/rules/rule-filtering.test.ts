import { expect } from '@esm-bundle/chai';
import { decodeRules, encodeRules, filterCompactRules } from '../../lib/encoding';
import testUrls from './cmp-test-urls.json';
/** @type {IndexedCMPRuleset} */
import compactRules from '../../rules/compact-rules.json';

describe('filterCompactRules', () => {
    const decodedRules = decodeRules(compactRules);

    testUrls.forEach(([cmp, testUrl]) => {
        const rule = decodedRules.find((rule) => rule.name === cmp);
        if (!rule) {
            // rule from the test list doesn't exist anymore.
            return;
        }
        const runInMainFrame = rule.runContext?.main ?? true;
        const runInSubFrame = !!rule.runContext?.frame;

        if (runInMainFrame) {
            it(`rule ${rule.name} should be in filtered set for main frame url ${testUrl}`, () => {
                const filtered = filterCompactRules(compactRules, { url: testUrl, mainFrame: true });
                const decodedFiltered = decodeRules(filtered);
                const match = decodedFiltered.find((r) => r.name === rule.name);
                expect(match, `rule ${rule.name} should be in filtered set`).to.exist;
                ['cosmetic', 'runContext', 'prehideSelectors', 'detectCmp', 'detectPopup', 'optOut', 'optIn'].forEach((prop) => {
                    expect(match?.[prop as keyof typeof match]).to.deep.equal(
                        rule[prop as keyof typeof rule],
                        `property ${prop} should match`,
                    );
                });
            });
        }

        if (runInSubFrame) {
            it(`rule ${rule.name} should be in filtered set for sub frame url ${testUrl}`, () => {
                const filtered = filterCompactRules(compactRules, { url: testUrl, mainFrame: false });
                const decodedFiltered = decodeRules(filtered);
                const match = decodedFiltered.find((r) => r.name === rule.name);
                expect(match, `rule ${rule.name} should be in filtered set`).to.exist;
                ['cosmetic', 'runContext', 'prehideSelectors', 'detectCmp', 'detectPopup', 'optOut', 'optIn'].forEach((prop) => {
                    expect(match?.[prop as keyof typeof match]).to.deep.equal(
                        rule[prop as keyof typeof rule],
                        `property ${prop} should match`,
                    );
                });
            });
        }
    });

    it(`generic rules should be in filtered set for main frame url`, () => {
        const filtered = filterCompactRules(compactRules, { url: 'https://www.example.com/', mainFrame: true });
        const decodedFiltered = decodeRules(filtered);
        decodedRules
            .filter((rule) => !rule.runContext?.urlPattern && (rule.runContext?.main === true || !rule.runContext))
            .forEach((rule) => {
                const match = decodedFiltered.find((r) => r.name === rule.name);
                expect(match, `rule ${rule.name} should be in filtered set`).to.exist;
                ['cosmetic', 'runContext', 'prehideSelectors', 'detectCmp', 'detectPopup', 'optOut', 'optIn'].forEach((prop) => {
                    expect(match?.[prop as keyof typeof match]).to.deep.equal(
                        rule[prop as keyof typeof rule],
                        `property ${prop} should match`,
                    );
                });
            });
    });

    it(`generic rules should be in filtered set for sub frame url`, () => {
        const filtered = filterCompactRules(compactRules, { url: 'https://www.example.com/', mainFrame: false });
        const decodedFiltered = decodeRules(filtered);
        decodedRules
            .filter((rule) => !rule.runContext?.urlPattern && rule.runContext?.frame === true)
            .forEach((rule) => {
                const match = decodedFiltered.find((r) => r.name === rule.name);
                expect(match, `rule ${rule.name} should be in filtered set`).to.exist;
                ['cosmetic', 'runContext', 'prehideSelectors', 'detectCmp', 'detectPopup', 'optOut', 'optIn'].forEach((prop) => {
                    expect(match?.[prop as keyof typeof match]).to.deep.equal(
                        rule[prop as keyof typeof rule],
                        `property ${prop} should match`,
                    );
                });
            });
    });

    it('filtered rules can be re-encoded and decoded again', () => {
        const filtered = filterCompactRules(compactRules, { url: 'https://www.example.com/', mainFrame: true });
        const decoded = decodeRules(filtered);
        const reencoded = encodeRules(decoded, null);
        expect(JSON.stringify(reencoded).length).to.be.lessThan(JSON.stringify(compactRules).length);
    });
});
