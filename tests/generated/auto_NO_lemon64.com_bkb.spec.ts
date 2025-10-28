import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_lemon64.com_bkb', ['https://www.lemon64.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
