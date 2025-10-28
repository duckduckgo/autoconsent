import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bexley.gov.uk_utu', ['https://www.bexley.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
