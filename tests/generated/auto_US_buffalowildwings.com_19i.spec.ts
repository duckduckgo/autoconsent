import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_buffalowildwings.com_19i', ['https://www.buffalowildwings.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
