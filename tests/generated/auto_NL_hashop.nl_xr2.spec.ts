import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hashop.nl_xr2', ['https://www.hashop.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
