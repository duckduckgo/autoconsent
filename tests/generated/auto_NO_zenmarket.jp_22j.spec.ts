import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_zenmarket.jp_22j', ['https://zenmarket.jp/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
