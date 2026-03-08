import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_customerconnect.io_g5c', ['https://customerconnect.io/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
