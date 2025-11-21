import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_doublepoint.nl_84o', ['https://doublepoint.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
