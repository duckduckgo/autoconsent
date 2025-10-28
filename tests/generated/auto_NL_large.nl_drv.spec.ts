import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_large.nl_drv', ['https://www.large.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
