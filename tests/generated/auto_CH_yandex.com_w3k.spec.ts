import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yandex.com_w3k', ['https://yandex.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
