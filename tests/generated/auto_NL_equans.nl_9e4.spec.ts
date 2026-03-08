import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_equans.nl_9e4', ['https://equans.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
