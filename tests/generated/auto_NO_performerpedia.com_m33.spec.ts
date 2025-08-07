import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_performerpedia.com_m33', ['https://www.performerpedia.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
