import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bitvavo.com_jtt', ['https://bitvavo.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
