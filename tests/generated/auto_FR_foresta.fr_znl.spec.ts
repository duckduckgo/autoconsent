import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_foresta.fr_znl', ['https://foresta.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
