import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_forum.simyo.nl_a0e', ['https://forum.simyo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
