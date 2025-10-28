import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hovenier.nl_xr8', ['https://www.hovenier.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
