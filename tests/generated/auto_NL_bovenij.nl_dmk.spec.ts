import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bovenij.nl_dmk', ['https://www.bovenij.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
