import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bayern.landtag.de_g5x', ['https://www.bayern.landtag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
