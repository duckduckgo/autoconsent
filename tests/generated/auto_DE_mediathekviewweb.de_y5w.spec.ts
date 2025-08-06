import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mediathekviewweb.de_y5w', ['https://mediathekviewweb.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
