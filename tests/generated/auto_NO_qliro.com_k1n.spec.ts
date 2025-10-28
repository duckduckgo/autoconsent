import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_qliro.com_k1n', ['https://qliro.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
