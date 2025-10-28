import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pro.inserm.fr_37u', ['https://pro.inserm.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
