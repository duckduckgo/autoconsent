import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cfjjb.com_zz9', ['https://cfjjb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
