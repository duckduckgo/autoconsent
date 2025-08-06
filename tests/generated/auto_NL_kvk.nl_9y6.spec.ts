import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kvk.nl_9y6', ['https://www.kvk.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
