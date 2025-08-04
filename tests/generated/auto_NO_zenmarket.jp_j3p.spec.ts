import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_zenmarket.jp_j3p', ['https://zenmarket.jp/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
