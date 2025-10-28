import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_coventry.gov.uk_mlq', ['https://www.coventry.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
