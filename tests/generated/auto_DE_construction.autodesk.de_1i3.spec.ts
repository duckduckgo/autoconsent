import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_construction.autodesk.de_1i3', ['https://construction.autodesk.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
