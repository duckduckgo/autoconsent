import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landkreis-esslingen.de_9t8', ['https://www.landkreis-esslingen.de/start.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
