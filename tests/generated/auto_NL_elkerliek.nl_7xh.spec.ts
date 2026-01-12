import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_elkerliek.nl_7xh', ['https://www.elkerliek.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
