import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_knoowy.nl_55e', ['https://knoowy.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
