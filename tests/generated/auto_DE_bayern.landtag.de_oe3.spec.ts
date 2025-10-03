import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bayern.landtag.de_oe3', ['https://www.bayern.landtag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
