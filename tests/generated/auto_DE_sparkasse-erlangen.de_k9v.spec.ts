import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-erlangen.de_k9v', ['https://www.sparkasse-erlangen.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
