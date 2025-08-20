import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ahn.nl_7pw', ['https://www.ahn.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
