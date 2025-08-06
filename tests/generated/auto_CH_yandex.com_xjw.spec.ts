import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yandex.com_xjw', ['https://yandex.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
