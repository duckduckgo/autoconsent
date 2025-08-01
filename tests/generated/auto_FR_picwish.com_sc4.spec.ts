import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_picwish.com_sc4', ['https://picwish.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
