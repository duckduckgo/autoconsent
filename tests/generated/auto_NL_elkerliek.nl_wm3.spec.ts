import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_elkerliek.nl_wm3', ['https://www.elkerliek.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
