import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_aesir-interactive.com_ss1', ['https://aesir-interactive.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
