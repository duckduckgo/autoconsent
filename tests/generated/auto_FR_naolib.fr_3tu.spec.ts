import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_naolib.fr_3tu', ['https://naolib.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
