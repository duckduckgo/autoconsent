import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_10doigts.fr_lgq', ['https://www.10doigts.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
