import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_metz.fr_gy6', ['https://metz.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
