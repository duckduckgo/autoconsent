import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nwz.nl_yw3', ['https://www.nwz.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
