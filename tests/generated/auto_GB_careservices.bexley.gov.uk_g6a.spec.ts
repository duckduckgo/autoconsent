import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_careservices.bexley.gov.uk_g6a', ['https://careservices.bexley.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
