import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_picwish.com_l0k', ['https://picwish.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
