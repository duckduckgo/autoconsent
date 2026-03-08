import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_app.dreamknit.com_8h2', ['https://app.dreamknit.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
