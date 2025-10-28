import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_buffalowildwings.com_5mc', ['https://www.buffalowildwings.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
