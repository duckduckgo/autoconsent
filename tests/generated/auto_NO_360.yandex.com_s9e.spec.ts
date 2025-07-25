import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_360.yandex.com_s9e', ['https://360.yandex.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
