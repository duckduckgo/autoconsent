import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_picwish.com_snt', ['https://picwish.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
