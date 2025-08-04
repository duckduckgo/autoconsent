import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_360.yandex.ru_viz', ['https://360.yandex.ru/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
