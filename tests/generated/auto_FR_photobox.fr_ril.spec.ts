import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_photobox.fr_ril', ['https://www.photobox.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
