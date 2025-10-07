import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bayern.landtag.de_pr3', ['https://www.bayern.landtag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
