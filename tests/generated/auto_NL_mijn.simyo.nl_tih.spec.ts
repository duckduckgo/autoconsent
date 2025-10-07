import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mijn.simyo.nl_tih', ['https://mijn.simyo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
