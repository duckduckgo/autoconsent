import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_countypress.co.uk_4yp', ['https://www.countypress.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
