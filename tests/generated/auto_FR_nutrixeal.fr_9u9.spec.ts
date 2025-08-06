import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_nutrixeal.fr_9u9', ['https://www.nutrixeal.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
