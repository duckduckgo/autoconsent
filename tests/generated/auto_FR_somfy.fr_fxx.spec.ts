import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_somfy.fr_fxx', ['https://www.somfy.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
