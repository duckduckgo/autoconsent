import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-cgw.de_ddc', ['https://www.sparkasse-cgw.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
