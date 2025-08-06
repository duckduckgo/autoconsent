import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_legrand.fr_3x3', ['https://www.legrand.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
