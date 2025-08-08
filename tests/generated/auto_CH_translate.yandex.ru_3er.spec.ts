import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_translate.yandex.ru_3er', ['https://translate.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
