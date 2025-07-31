import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_countypress.co.uk_f9f', ['https://www.countypress.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
