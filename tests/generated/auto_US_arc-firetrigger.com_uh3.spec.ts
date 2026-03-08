import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_arc-firetrigger.com_uh3', ['https://arc-firetrigger.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
