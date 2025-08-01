import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_123accu.nl_lkl', ['https://www.123accu.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
