import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_yandex.by_3eb', ['https://yandex.by/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
