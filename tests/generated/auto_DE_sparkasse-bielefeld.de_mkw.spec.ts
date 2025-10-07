import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-bielefeld.de_mkw', ['https://www.sparkasse-bielefeld.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
