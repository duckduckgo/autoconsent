import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_diskinternals.com_w0c', ['https://www.diskinternals.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
