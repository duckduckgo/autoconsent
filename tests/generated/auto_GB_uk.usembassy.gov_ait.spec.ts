import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.usembassy.gov_ait', ['https://uk.usembassy.gov/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
