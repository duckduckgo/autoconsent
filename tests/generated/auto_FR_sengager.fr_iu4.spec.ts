import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sengager.fr_iu4', ['https://www.sengager.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
