import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_drievliet.nl_7zw', ['https://www.drievliet.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
