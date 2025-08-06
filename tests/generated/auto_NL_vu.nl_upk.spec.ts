import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vu.nl_upk', ['https://vu.nl/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
