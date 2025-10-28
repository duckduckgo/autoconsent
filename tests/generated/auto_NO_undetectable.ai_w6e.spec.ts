import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_undetectable.ai_w6e', ['https://undetectable.ai/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
