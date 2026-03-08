import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_baraluftvapen.se_31u', ['https://baraluftvapen.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
