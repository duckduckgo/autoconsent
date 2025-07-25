import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_alrincon.com_x4a', ['https://www.alrincon.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
