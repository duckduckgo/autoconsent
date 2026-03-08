import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autohaus-ostmann.de_8xz', ['https://autohaus-ostmann.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
