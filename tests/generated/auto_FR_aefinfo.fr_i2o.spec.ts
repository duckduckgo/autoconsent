import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aefinfo.fr_i2o', ['https://www.aefinfo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
