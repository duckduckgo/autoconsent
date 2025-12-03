import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_moulinex.fr_m0v', ['https://www.moulinex.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
