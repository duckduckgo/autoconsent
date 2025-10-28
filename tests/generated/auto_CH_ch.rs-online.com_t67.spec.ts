import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ch.rs-online.com_t67', ['https://ch.rs-online.com/web/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
