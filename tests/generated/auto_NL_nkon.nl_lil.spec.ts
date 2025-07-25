import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nkon.nl_lil', ['https://www.nkon.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
