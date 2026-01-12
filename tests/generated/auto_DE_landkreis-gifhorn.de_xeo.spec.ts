import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landkreis-gifhorn.de_xeo', ['https://www.landkreis-gifhorn.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
