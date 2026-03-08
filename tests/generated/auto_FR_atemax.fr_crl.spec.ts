import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_atemax.fr_crl', ['https://atemax.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
