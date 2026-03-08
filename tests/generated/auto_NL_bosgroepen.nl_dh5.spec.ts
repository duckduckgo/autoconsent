import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bosgroepen.nl_dh5', ['https://bosgroepen.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
