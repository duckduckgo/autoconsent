import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_deepl.com_gv6', ['https://www.deepl.com/en/translator'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
