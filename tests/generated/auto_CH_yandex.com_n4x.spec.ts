import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yandex.com_n4x', ['https://yandex.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
