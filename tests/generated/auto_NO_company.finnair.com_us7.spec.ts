import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_company.finnair.com_us7', ['https://company.finnair.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
