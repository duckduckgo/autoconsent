import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_yandex.com.tr_0', ['https://yandex.com.tr/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
