import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landkreis-karlsruhe.de_aht', ['https://www.landkreis-karlsruhe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
