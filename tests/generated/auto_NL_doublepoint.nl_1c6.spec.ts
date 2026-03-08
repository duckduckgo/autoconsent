import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_doublepoint.nl_1c6', ['https://doublepoint.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
