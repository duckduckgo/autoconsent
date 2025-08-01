import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_n-somerset.gov.uk_0', ['https://n-somerset.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
