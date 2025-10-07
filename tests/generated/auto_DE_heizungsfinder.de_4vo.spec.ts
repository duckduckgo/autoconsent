import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_heizungsfinder.de_4vo', ['https://www.heizungsfinder.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
