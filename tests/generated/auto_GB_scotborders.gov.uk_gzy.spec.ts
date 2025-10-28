import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_scotborders.gov.uk_gzy', ['https://www.scotborders.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
