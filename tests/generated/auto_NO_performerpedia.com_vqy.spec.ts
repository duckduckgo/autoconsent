import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_performerpedia.com_vqy', ['https://www.performerpedia.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
