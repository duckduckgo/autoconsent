import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yandex.com.tr_ba2', ['https://yandex.com.tr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
