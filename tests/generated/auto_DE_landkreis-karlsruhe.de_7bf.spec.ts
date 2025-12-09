import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landkreis-karlsruhe.de_7bf', ['https://www.landkreis-karlsruhe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
