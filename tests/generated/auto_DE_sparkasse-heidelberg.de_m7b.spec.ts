import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-heidelberg.de_m7b', ['https://www.sparkasse-heidelberg.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
