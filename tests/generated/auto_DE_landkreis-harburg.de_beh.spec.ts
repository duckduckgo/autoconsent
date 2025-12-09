import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landkreis-harburg.de_beh', ['https://www.landkreis-harburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
