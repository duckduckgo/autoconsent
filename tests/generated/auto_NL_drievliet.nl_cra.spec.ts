import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_drievliet.nl_cra', ['https://www.drievliet.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
