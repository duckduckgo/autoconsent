import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bahnprojekt-stuttgart-ulm.de_2d3', ['https://www.bahnprojekt-stuttgart-ulm.de/aktuell/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
