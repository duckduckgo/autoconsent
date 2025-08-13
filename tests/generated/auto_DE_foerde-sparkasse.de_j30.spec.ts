import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_foerde-sparkasse.de_j30', ['https://www.foerde-sparkasse.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
