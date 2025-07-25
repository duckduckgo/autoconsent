import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pro.free.fr_7is', ['https://pro.free.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
