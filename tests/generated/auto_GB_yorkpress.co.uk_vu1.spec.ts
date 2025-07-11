import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_yorkpress.co.uk_vu1', ['https://www.yorkpress.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
