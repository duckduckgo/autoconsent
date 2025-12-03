import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vrbank-eg.de_zr5', ['https://www.vrbank-eg.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
