import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autohaus-weeber.de_bfz', ['https://autohaus-weeber.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
