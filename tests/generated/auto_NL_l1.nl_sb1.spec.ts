import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_l1.nl_sb1', ['https://www.l1.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
