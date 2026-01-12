import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bm-lille.fr_u06', ['https://bm-lille.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
