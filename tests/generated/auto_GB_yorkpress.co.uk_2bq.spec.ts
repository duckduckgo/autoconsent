import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_yorkpress.co.uk_2bq', ['https://www.yorkpress.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
