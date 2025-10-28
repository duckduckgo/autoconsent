import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pap.fr_30e', ['https://www.pap.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
