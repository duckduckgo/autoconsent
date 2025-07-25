import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mediathekviewweb.de_r0q', ['https://mediathekviewweb.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
