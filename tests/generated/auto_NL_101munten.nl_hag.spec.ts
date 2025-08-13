import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_101munten.nl_hag', ['https://www.101munten.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
