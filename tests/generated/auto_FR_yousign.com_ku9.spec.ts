import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_yousign.com_ku9', ['https://yousign.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
