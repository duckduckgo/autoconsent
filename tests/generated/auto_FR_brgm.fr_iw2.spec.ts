import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_brgm.fr_iw2', ['https://www.brgm.fr/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
