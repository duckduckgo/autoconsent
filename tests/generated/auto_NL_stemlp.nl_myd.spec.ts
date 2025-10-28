import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stemlp.nl_myd', ['https://stemlp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
