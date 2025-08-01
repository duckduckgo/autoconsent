import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rheinhessen-sparkasse.de_qqk', ['https://www.rheinhessen-sparkasse.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
