import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_yandex.com_0', ['https://yandex.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
