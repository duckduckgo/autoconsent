import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tv.yandex.com_68e', ['https://tv.yandex.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
