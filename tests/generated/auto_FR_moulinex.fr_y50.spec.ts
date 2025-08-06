import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_moulinex.fr_y50', ['https://www.moulinex.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
