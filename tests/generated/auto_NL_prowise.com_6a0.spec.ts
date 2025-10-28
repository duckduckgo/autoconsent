import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_prowise.com_6a0', ['https://www.prowise.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
