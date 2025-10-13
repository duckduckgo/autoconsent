import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_heizungsfinder.de_k5d', ['https://www.heizungsfinder.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
