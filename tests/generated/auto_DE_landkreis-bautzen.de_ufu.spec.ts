import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landkreis-bautzen.de_ufu', ['https://www.landkreis-bautzen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
