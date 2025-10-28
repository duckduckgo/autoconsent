import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_camieg.fr_ynm', ['https://www.camieg.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
