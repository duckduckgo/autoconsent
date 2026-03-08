import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_freshfiction.com_ipc', ['https://freshfiction.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
