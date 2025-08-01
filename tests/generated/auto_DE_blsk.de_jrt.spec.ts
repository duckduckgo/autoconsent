import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blsk.de_jrt', ['https://www.blsk.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
