import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_app.oneclicktrading.de_a1e', ['https://app.oneclicktrading.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
