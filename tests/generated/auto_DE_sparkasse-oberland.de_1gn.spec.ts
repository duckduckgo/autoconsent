import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-oberland.de_1gn', ['https://www.sparkasse-oberland.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
