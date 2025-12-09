import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hytale.com_wn8', ['https://hytale.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
