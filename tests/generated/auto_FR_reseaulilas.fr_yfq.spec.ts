import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_reseaulilas.fr_yfq', ['https://reseaulilas.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
