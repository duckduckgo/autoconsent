import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_thriftbooks.com_i0v', ['https://www.thriftbooks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
