import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_surreycc.gov.uk_1ty', ['https://www.surreycc.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
