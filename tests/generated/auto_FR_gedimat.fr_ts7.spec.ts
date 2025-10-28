import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gedimat.fr_ts7', ['https://www.gedimat.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
