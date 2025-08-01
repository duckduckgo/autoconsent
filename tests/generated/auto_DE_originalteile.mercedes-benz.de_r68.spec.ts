import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_originalteile.mercedes-benz.de_r68', ['https://originalteile.mercedes-benz.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
