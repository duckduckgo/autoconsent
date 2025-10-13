import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mijn.simyo.nl_xm9', ['https://mijn.simyo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
