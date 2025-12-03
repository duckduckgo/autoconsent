import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_twitter.yandex.com.tr_tiz', ['https://yandex.com.tr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
