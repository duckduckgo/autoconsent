import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_originalteile.mercedes-benz.de_6ap', ['https://originalteile.mercedes-benz.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
