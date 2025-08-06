import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_geldarchitekt.de_08n', ['https://geldarchitekt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
