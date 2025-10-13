import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pauls-muehle.de_ut1', ['https://www.pauls-muehle.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
