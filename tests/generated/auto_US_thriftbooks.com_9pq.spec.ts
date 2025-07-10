import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_thriftbooks.com_9pq', ['https://www.thriftbooks.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
