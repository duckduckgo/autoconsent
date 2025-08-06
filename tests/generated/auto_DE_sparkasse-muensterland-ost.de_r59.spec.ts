import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-muensterland-ost.de_r59', ['https://www.sparkasse-muensterland-ost.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
