import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_naolib.fr_d2m', ['https://naolib.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
