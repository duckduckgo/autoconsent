import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cbm.nl_fqr', ['https://cbm.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
