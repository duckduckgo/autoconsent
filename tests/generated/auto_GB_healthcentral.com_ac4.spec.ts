import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_healthcentral.com_ac4', ['https://www.healthcentral.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
