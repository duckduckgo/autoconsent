import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_stakecasino.com_0hk', ['https://stakecasino.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
