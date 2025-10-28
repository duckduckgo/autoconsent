import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bordeaux.fr_5e7', ['https://www.bordeaux.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
