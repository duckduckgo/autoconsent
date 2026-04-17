const fs = require('fs');
const path = require('path');

function buildCmpTestMap() {
    const map = new Map();
    const testsDir = path.resolve('tests');
    if (!fs.existsSync(testsDir)) {
        return map;
    }
    const files = fs.readdirSync(testsDir).filter((f) => f.endsWith('.spec.ts'));
    for (const file of files) {
        const filePath = path.join('tests', file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const regex = /generateCMPTests\(\s*['"]([^'"]+)['"]/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            const key = match[1].toLowerCase();
            if (!map.has(key)) {
                map.set(key, new Set());
            }
            map.get(key).add(filePath);
        }
    }
    return map;
}

function getCmpName(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const match = content.match(/^\s*name\s*=\s*['"]([^'"]+)['"]/m);
        return match ? match[1] : null;
    } catch {
        return null;
    }
}

const modifiedFiles = process.argv.slice(2);
const cmpTestMap = buildCmpTestMap();
const testsToRun = new Set();

for (const file of modifiedFiles) {
    if (file.startsWith('tests/') && file.endsWith('.spec.ts')) {
        if (fs.existsSync(file)) {
            testsToRun.add(file);
        }
    }

    if (file.startsWith('rules/autoconsent/') && file.endsWith('.json')) {
        const baseName = path.basename(file, '.json');
        const testFile = path.join('tests', `${baseName}.spec.ts`);
        if (fs.existsSync(testFile)) {
            testsToRun.add(testFile);
        }
    }

    if (file.startsWith('rules/generated/') && file.endsWith('.json')) {
        const baseName = path.basename(file, '.json');
        const testFile = path.join('tests', 'generated', `${baseName}.spec.ts`);
        if (fs.existsSync(testFile)) {
            testsToRun.add(testFile);
        }
    }

    if (file.startsWith('lib/cmps/') && file.endsWith('.ts')) {
        const cmpName = getCmpName(file);
        if (cmpName) {
            const tests = cmpTestMap.get(cmpName.toLowerCase());
            if (tests) {
                for (const testFile of tests) {
                    testsToRun.add(testFile);
                }
            }
        }
    }
}

for (const testFile of testsToRun) {
    console.log(testFile);
}
