import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vrbank-eg.de_mzu', ['https://www.vrbank-eg.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
