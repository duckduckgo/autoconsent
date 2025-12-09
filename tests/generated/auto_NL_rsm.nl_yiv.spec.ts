import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rsm.nl_yiv', ['https://www.rsm.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
