import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bm.dijon.fr_vbp', ['https://bm.dijon.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
