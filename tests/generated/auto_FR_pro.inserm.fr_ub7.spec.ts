import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pro.inserm.fr_ub7', ['https://pro.inserm.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
