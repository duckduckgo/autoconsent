import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_nutrixeal.fr_ehe', ['https://www.nutrixeal.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
