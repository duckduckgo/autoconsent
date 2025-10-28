import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.aliexpress.com_ho7', ['https://nl.aliexpress.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
