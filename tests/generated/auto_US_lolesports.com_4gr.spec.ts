import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_lolesports.com_4gr', ['https://lolesports.com/en-US/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
