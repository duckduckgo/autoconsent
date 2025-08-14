import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_123accu.nl_aw4', ['https://www.123accu.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
