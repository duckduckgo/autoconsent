import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_about.clasohlson.com_dt8', ['https://about.clasohlson.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
