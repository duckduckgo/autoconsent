import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rheinhessen-sparkasse.de_cks', ['https://www.rheinhessen-sparkasse.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
