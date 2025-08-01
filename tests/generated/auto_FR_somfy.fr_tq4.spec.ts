import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_somfy.fr_tq4', ['https://www.somfy.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
