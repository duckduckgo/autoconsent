import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_no.usembassy.gov_xy4', ['https://no.usembassy.gov/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
