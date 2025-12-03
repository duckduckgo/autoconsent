import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mediathekviewweb.de_i81', ['https://mediathekviewweb.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
