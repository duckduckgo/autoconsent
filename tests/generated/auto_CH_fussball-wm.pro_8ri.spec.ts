import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fussball-wm.pro_8ri', ['https://www.fussball-wm.pro/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
