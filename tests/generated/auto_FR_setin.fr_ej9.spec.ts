import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_setin.fr_ej9', ['https://www.setin.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
