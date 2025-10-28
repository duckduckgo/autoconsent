import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_plugins.jetbrains.com_i0u', ['https://plugins.jetbrains.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
