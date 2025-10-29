import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_elkerliek.nl_mco', ['https://www.elkerliek.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
