import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spkvr.de_fn3', ['https://www.spkvr.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
