import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landkreis-muenchen.de_1pl', ['https://www.landkreis-muenchen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
