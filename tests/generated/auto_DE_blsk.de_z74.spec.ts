import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blsk.de_z74', ['https://www.blsk.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
