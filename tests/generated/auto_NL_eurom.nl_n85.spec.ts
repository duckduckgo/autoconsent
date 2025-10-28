import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eurom.nl_n85', ['https://eurom.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
