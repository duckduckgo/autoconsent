import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pro.engie.fr_hwz', ['https://pro.engie.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
