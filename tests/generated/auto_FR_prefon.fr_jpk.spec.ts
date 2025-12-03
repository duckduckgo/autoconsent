import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_prefon.fr_jpk', ['https://www.prefon.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
