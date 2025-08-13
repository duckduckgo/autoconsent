import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sverigesradio.se_a00', ['https://www.sverigesradio.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
