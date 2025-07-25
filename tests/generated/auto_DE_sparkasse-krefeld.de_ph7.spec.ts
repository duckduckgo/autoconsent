import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-krefeld.de_ph7', ['https://www.sparkasse-krefeld.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
