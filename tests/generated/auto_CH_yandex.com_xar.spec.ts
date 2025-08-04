import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yandex.com_xar', ['https://yandex.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
