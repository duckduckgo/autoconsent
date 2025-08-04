import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_espboards.dev_86x', ['https://www.espboards.dev/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
