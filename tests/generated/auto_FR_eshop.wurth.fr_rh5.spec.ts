import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eshop.wurth.fr_rh5', ['https://eshop.wurth.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
