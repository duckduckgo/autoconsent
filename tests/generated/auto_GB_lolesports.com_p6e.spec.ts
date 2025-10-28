import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lolesports.com_p6e', ['https://lolesports.com/en-GB/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
