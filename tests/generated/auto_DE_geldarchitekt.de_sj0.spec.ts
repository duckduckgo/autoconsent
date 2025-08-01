import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_geldarchitekt.de_sj0', ['https://geldarchitekt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
