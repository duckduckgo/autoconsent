import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_translate.yandex.com_1v2', ['https://translate.yandex.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
