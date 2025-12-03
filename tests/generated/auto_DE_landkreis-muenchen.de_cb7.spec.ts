import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landkreis-muenchen.de_cb7', ['https://www.landkreis-muenchen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
