import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_skmb.de_423', ['https://www.skmb.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
