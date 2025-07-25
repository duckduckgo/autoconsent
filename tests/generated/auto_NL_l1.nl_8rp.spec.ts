import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_l1.nl_8rp', ['https://www.l1.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
