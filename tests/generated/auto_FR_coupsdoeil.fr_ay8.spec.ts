import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_coupsdoeil.fr_ay8', ['https://coupsdoeil.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
