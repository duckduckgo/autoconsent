import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_edwinscharffmuseum.de_nxn', ['https://edwinscharffmuseum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
