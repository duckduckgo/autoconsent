import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-osnabrueck.de_0oc', ['https://www.sparkasse-osnabrueck.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
