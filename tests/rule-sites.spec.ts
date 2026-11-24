import generateCMPTests from '../playwright/runner';
import { loadRuleSiteSpecs, parseRuleSiteIds } from '../playwright/rule-sites';

// Defines the tests of every data file in tests/sites, or only of those listed in SPECS (e.g. SPECS=onetrust,generated/auto_AU_x).
for (const { spec } of loadRuleSiteSpecs(parseRuleSiteIds(process.env.SPECS))) {
    for (const group of spec.tests) {
        generateCMPTests(spec.cmp, group.sites, group.options);
    }
}
