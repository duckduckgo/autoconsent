import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_espboards.dev_46t', ['https://www.espboards.dev/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
