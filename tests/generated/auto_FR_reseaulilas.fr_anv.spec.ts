import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_reseaulilas.fr_anv', ['https://reseaulilas.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
