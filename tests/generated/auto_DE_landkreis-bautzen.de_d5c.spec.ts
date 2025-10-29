import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landkreis-bautzen.de_d5c', ['https://www.landkreis-bautzen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
