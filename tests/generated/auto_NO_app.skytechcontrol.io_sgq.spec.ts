import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_app.skytechcontrol.io_sgq', ['https://app.skytechcontrol.io/logout'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
