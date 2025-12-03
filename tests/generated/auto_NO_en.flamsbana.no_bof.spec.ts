import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_en.flamsbana.no_bof', ['https://en.flamsbana.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
