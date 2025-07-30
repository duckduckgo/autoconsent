import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_picwish.com_g26', ['https://picwish.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
