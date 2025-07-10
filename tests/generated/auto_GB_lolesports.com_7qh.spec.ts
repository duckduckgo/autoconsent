import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lolesports.com_7qh', ['https://lolesports.com/en-GB/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
