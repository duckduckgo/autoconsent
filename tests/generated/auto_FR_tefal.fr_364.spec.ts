import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tefal.fr_364', ['https://www.tefal.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
