import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_foerde-sparkasse.de_72j', ['https://www.foerde-sparkasse.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
