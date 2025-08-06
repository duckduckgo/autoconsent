import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-hgp.de_ehe', ['https://www.sparkasse-hgp.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
