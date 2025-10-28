import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ictrecht.nl_bul', ['https://www.ictrecht.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
