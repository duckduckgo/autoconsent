import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_grenoble.fr_kz9', ['https://www.grenoble.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
