import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_zenmarket.jp_afe', ['https://zenmarket.jp/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
