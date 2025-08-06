import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_heizungsfinder.de_c0v', ['https://www.heizungsfinder.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
