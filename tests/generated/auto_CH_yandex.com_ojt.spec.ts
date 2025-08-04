import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yandex.com_ojt', ['https://yandex.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
