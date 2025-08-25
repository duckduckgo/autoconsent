import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bovenij.nl_254', ['https://www.bovenij.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
