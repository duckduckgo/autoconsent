import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sheffield.gov.uk_7lk', ['https://www.sheffield.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
