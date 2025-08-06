import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_huren.nl_svq', ['https://www.huren.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
