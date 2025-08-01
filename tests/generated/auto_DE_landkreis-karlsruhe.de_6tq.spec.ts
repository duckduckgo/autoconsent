import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landkreis-karlsruhe.de_6tq', ['https://www.landkreis-karlsruhe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
