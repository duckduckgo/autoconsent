import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-muensterland-ost.de_0ke', ['https://www.sparkasse-muensterland-ost.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
