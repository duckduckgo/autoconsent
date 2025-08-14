import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_translate.yandex.com_6uh', ['https://translate.yandex.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
