import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eli-mobility.com_oc3', ['https://eli-mobility.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
