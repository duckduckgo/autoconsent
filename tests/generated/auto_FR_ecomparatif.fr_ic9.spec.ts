import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ecomparatif.fr_ic9', ['https://ecomparatif.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
