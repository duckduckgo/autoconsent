import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pauls-muehle.de_a1d', ['https://www.pauls-muehle.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
