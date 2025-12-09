import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_esslingen.de_0rj', ['https://www.esslingen.de/start.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
