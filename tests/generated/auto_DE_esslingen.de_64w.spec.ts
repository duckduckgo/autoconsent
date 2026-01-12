import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_esslingen.de_64w', ['https://www.esslingen.de/start.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
