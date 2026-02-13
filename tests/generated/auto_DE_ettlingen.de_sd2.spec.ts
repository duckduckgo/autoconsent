import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ettlingen.de_sd2', ['https://www.ettlingen.de/startseite'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
