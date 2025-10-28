import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_learnbeat.nl_d1s', ['https://learnbeat.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
