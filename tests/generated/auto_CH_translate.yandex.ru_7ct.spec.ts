import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_translate.yandex.ru_7ct', ['https://translate.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
