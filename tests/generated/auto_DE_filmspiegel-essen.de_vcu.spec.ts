import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_filmspiegel-essen.de_vcu', ['https://filmspiegel-essen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
