import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_drenthe.nl_xwd', ['https://www.drenthe.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
