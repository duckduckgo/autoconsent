import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bendamoto-dresden.de_xb6', ['https://bendamoto-dresden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
