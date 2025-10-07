import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nndamloop.nl_kcr', ['https://www.nndamloop.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
