import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_scotcourts.gov.uk_0', ['https://www.scotcourts.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
