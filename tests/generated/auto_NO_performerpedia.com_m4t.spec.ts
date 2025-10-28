import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_performerpedia.com_m4t', ['https://www.performerpedia.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
