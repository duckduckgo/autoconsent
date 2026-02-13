import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hone.gg_cc5', ['https://hone.gg/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
