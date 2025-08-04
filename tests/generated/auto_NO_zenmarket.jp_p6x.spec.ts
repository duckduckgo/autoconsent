import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_zenmarket.jp_p6x', ['https://zenmarket.jp/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
