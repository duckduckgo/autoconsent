import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wap.yandex.com_9ne', ['https://wap.yandex.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
