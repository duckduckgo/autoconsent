import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_londoncouncils.gov.uk_90k', ['https://www.londoncouncils.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
