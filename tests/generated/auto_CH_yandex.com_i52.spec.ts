import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yandex.com_i52', ['https://yandex.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
