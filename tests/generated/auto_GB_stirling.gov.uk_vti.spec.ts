import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stirling.gov.uk_vti', ['https://www.stirling.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
