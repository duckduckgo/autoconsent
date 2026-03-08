import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_escvienna2026.com_bzl', ['https://escvienna2026.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
