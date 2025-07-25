import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_yousign.com_274', ['https://yousign.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
