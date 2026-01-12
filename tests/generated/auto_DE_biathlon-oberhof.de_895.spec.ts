import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_biathlon-oberhof.de_895', ['https://www.biathlon-oberhof.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
