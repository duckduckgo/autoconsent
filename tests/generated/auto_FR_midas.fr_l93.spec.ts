import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_midas.fr_l93', ['https://www.midas.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
