import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.usembassy.gov_589', ['https://uk.usembassy.gov/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
