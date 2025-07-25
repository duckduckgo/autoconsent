import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_yandex.by_chs', ['https://yandex.by/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
