import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_huren.nl_fsh', ['https://www.huren.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
