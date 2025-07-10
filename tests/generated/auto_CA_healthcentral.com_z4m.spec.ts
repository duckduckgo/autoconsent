import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_healthcentral.com_z4m', ['https://www.healthcentral.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
