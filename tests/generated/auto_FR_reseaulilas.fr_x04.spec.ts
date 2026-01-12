import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_reseaulilas.fr_x04', ['https://reseaulilas.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
