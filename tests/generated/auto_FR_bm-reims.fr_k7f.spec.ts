import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bm-reims.fr_k7f', ['https://www.bm-reims.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
