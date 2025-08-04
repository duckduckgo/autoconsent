import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_picwish.com_erq', ['https://picwish.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
