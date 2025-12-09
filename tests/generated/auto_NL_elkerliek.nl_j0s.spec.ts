import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_elkerliek.nl_j0s', ['https://www.elkerliek.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
