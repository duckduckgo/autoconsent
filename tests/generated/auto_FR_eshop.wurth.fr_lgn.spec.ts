import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eshop.wurth.fr_lgn', ['https://eshop.wurth.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
