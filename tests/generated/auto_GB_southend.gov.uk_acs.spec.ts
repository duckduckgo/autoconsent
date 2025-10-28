import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_southend.gov.uk_acs', ['https://www.southend.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
