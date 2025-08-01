import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-oberland.de_vug', ['https://www.sparkasse-oberland.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
