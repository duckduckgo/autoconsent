import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bayern.landtag.de_mop', ['https://www.bayern.landtag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
