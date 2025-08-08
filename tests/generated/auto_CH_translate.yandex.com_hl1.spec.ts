import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_translate.yandex.com_hl1', ['https://translate.yandex.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
