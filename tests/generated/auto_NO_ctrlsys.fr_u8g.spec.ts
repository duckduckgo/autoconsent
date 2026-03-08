import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ctrlsys.fr_u8g', ['https://ctrlsys.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
