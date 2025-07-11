import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dudley.gov.uk_3th', ['https://www.dudley.gov.uk/residents/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
