import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sverigesradio.se_4p4', ['https://www.sverigesradio.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
