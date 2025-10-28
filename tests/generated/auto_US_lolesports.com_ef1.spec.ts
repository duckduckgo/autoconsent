import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_lolesports.com_ef1', ['https://lolesports.com/en-US/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
