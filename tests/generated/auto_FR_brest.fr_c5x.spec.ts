import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_brest.fr_c5x', ['https://brest.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
