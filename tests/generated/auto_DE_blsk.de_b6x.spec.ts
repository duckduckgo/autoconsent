import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blsk.de_b6x', ['https://www.blsk.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
