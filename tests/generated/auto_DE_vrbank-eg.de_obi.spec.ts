import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vrbank-eg.de_obi', ['https://www.vrbank-eg.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
