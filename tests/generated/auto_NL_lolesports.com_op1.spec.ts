import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lolesports.com_op1', ['https://lolesports.com/en-GB/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
