import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cmath.fr_3ge', ['https://www.cmath.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
