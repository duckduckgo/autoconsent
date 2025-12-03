import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_strato.nl_ezn', ['https://www.strato.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
