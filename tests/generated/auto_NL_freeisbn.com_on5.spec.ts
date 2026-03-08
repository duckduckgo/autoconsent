import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_freeisbn.com_on5', ['https://freeisbn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
