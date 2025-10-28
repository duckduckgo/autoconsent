import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_login.libero.it_e3f', ['https://login.libero.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
