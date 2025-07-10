import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dailywire.com_7xa', ['https://www.dailywire.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
