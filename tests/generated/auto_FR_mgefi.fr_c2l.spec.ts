import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mgefi.fr_c2l', ['https://www.mgefi.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
