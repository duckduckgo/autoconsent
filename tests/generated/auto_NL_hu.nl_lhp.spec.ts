import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hu.nl_lhp', ['https://www.hu.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
