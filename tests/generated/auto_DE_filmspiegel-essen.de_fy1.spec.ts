import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_filmspiegel-essen.de_fy1', ['https://filmspiegel-essen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
