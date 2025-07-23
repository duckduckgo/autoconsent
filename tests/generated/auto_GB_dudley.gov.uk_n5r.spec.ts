import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dudley.gov.uk_n5r', ['https://www.dudley.gov.uk/residents/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
