import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_senat.fr_0gq', ['https://www.senat.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
