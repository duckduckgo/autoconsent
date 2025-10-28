import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ealing.gov.uk_c16', ['https://www.ealing.gov.uk/site/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
