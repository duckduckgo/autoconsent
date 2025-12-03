import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_epoch.ai_2pl', ['https://epoch.ai/gradient-updates/how-has-deepseek-improved-the-transformer-architecture'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
