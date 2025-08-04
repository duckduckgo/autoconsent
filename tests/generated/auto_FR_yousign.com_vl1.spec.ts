import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_yousign.com_vl1', ['https://yousign.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
