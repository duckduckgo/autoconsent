// Validates the rule test data in tests/sites against playwright/spec-types.ts and checks it against the rules.
const Ajv = require('ajv').default;
const fs = require('fs');
const path = require('path');
const schemaGenerator = require('ts-json-schema-generator');
const { listRuleSiteIds, readRuleSiteSpec } = require('../playwright/rule-sites');

const repoRoot = path.join(__dirname, '..');

function createSchema() {
    try {
        return schemaGenerator
            .createGenerator({ path: path.join(repoRoot, 'playwright/spec-types.ts'), type: 'RuleSiteSpec' })
            .createSchema('RuleSiteSpec');
    } catch (e) {
        console.error(e.diagnostic);
        throw e;
    }
}

// Every name a spec can expect: JSON rules (before deduplication) and code-based rules.
function knownRuleNames() {
    const names = new Set();
    for (const dir of ['rules/autoconsent', 'rules/generated']) {
        for (const file of fs.readdirSync(path.join(repoRoot, dir)).filter((f) => f.endsWith('.json'))) {
            names.add(JSON.parse(fs.readFileSync(path.join(repoRoot, dir, file), 'utf8')).name);
        }
    }
    for (const file of fs.readdirSync(path.join(repoRoot, 'lib/cmps'))) {
        const match = fs.readFileSync(path.join(repoRoot, 'lib/cmps', file), 'utf8').match(/^\s*name\s*=\s*['"]([^'"]+)['"]/m);
        if (match) {
            names.add(match[1]);
        }
    }
    return names;
}

const validator = new Ajv({ allowUnionTypes: true }).compile(createSchema());
const ruleNames = knownRuleNames();
const errors = [];
// Test titles must be unique: Playwright refuses to load duplicates. Key: cmp, url, action, form factor.
const titles = new Map();

for (const id of listRuleSiteIds()) {
    const file = `tests/sites/${id}.json`;
    let spec;
    try {
        spec = readRuleSiteSpec(id);
    } catch (e) {
        errors.push(`${file}: ${e.message}`);
        continue;
    }
    if (!validator(spec)) {
        errors.push(`${file}: ${validator.errors.map((e) => `${e.instancePath || '/'} ${e.message}`).join(', ')}`);
        continue;
    }
    if (!ruleNames.has(spec.cmp)) {
        errors.push(`${file}: no rule is named "${spec.cmp}"`);
    }
    spec.tests.forEach((group, i) => {
        const { onlyRegions = [], skipRegions = [], mobile = false } = group.options || {};
        const both = onlyRegions.filter((r) => skipRegions.includes(r));
        if (both.length > 0) {
            errors.push(`${file}: tests[${i}] both runs and skips ${both.join(', ')}`);
        }
        for (const url of group.sites) {
            if (!URL.canParse(url)) {
                errors.push(`${file}: tests[${i}] has an invalid URL ${url}`);
                continue;
            }
            for (const label of testLabels(group.options || {})) {
                const key = `${spec.cmp} ${url} ${label} ${mobile ? 'mobile' : 'desktop'}`;
                const entries = titles.get(key) || [];
                for (const other of entries) {
                    if (regionsOverlap(other, { onlyRegions, skipRegions })) {
                        errors.push(`${file}: ${url} (${label}, ${mobile ? 'mobile' : 'desktop'}) is also tested in ${other.file}`);
                    }
                }
                entries.push({ file, onlyRegions, skipRegions });
                titles.set(key, entries);
            }
        }
    });
}

// The tests generateCMPTests defines per site, as in playwright/runner.ts.
function testLabels({ testOptIn = true, testOptOut = true }) {
    if (!testOptIn && !testOptOut) {
        return ['noaction'];
    }
    return [...(testOptIn ? ['optIn'] : []), ...(testOptOut ? ['optOut'] : [])];
}

// Whether two groups can both define a test in some region.
function regionsOverlap(a, b) {
    if (a.onlyRegions.length > 0 && b.onlyRegions.length > 0) {
        return a.onlyRegions.some((r) => b.onlyRegions.includes(r) && !a.skipRegions.includes(r) && !b.skipRegions.includes(r));
    }
    if (a.onlyRegions.length > 0 || b.onlyRegions.length > 0) {
        const [limited, open] = a.onlyRegions.length > 0 ? [a, b] : [b, a];
        return limited.onlyRegions.some((r) => !limited.skipRegions.includes(r) && !open.skipRegions.includes(r));
    }
    // both run in every region except the skipped ones
    return true;
}

if (errors.length > 0) {
    console.error(errors.join('\n'));
    process.exit(1);
}
console.log(`All ${listRuleSiteIds().length} rule test files look good!`);
