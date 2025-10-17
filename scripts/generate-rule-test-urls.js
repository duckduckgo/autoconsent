const RandExp = require('randexp');
const fs = require('fs');
const compactRules = require('../rules/compact-rules.json');

const testUrlMap = [];

compactRules.r.forEach((rule) => {
    const urlPattern = rule[3];
    if (urlPattern.length === 0) {
        return;
    }
    try {
        const testUrl = new URL(RandExp.randexp(urlPattern)).href;
        testUrlMap.push([rule[1], testUrl]);
    } catch (error) {
        console.log('Error generating URL for pattern:', urlPattern, error.input);
    }
});
fs.writeFileSync('./tests-wtr/rules/cmp-test-urls.json', JSON.stringify(testUrlMap, null, 2));
console.log(`Generated ${testUrlMap.length} test URLs and saved to cmp-test-urls.json`);
