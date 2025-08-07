import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yandex.com_on0', ['https://yandex.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
