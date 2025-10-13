import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thepensionsregulator.gov.uk_0', ['https://www.thepensionsregulator.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
