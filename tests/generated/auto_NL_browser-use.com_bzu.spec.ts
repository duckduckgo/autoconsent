import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_browser-use.com_bzu', ['https://browser-use.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
