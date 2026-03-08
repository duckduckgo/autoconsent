import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_derbranchentreff.de_a6z', ['https://derbranchentreff.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
