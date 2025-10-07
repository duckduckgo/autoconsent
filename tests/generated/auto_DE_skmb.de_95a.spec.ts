import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_skmb.de_95a', ['https://www.skmb.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
