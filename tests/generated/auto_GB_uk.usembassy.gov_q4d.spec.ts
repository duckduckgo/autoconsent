import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.usembassy.gov_q4d', ['https://uk.usembassy.gov/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
