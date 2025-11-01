import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lolesports.com_p7j', ['https://lolesports.com/en-GB/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
