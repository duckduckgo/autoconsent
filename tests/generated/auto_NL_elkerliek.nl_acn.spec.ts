import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_elkerliek.nl_acn', ['https://www.elkerliek.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
