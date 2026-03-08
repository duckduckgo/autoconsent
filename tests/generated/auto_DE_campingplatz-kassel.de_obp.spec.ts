import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_campingplatz-kassel.de_obp', ['https://campingplatz-kassel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
