import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hilfe.onleihe.de_bdt', ['https://hilfe.onleihe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
