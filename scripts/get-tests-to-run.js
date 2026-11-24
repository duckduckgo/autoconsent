// Prints the ids of the rule test data files (tests/sites/<id>.json) to run for the given modified files, one per line.
// Jenkins passes them to tests/rule-sites.spec.ts in the SPECS env var.
const fs = require('fs');
const path = require('path');
const { listRuleSiteIds, readRuleSiteSpec, toRuleSiteId } = require('../playwright/rule-sites');

// Lower-cased rule name -> ids of the data files that test it.
function buildCmpTestMap() {
    const map = new Map();
    for (const id of listRuleSiteIds()) {
        const key = readRuleSiteSpec(id).cmp.toLowerCase();
        if (!map.has(key)) {
            map.set(key, new Set());
        }
        map.get(key).add(id);
    }
    return map;
}

function getCodeRuleName(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const match = content.match(/^\s*name\s*=\s*['"]([^'"]+)['"]/m);
        return match ? match[1] : null;
    } catch {
        return null;
    }
}

function getJsonRuleName(filePath) {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8')).name || null;
    } catch {
        return null;
    }
}

const modifiedFiles = process.argv.slice(2);
const cmpTestMap = buildCmpTestMap();
const knownIds = new Set(listRuleSiteIds());
const testsToRun = new Set();

const addByName = (name) => {
    for (const id of (name && cmpTestMap.get(name.toLowerCase())) || []) {
        testsToRun.add(id);
    }
};

for (const file of modifiedFiles) {
    if (file.startsWith('tests/sites/') && file.endsWith('.json')) {
        const id = toRuleSiteId(file);
        if (knownIds.has(id)) {
            testsToRun.add(id);
        }
    }

    if ((file.startsWith('rules/autoconsent/') || file.startsWith('rules/generated/')) && file.endsWith('.json')) {
        addByName(getJsonRuleName(file));
        // a deleted rule has no name to read, but may still have a data file of the same name
        const sameName = `${file.startsWith('rules/generated/') ? 'generated/' : ''}${path.basename(file, '.json')}`;
        if (knownIds.has(sameName)) {
            testsToRun.add(sameName);
        }
    }

    if (file.startsWith('lib/cmps/') && file.endsWith('.ts')) {
        addByName(getCodeRuleName(file));
    }
}

for (const id of [...testsToRun].sort()) {
    console.log(id);
}
