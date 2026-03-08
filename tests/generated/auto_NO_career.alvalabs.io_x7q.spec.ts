import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_career.alvalabs.io_x7q', ['https://career.alvalabs.io/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
