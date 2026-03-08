import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_browser.yandex.com_hq6', ['https://browser.yandex.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
