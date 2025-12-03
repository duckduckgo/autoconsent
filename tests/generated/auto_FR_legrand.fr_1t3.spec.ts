import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_legrand.fr_1t3', ['https://www.legrand.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
