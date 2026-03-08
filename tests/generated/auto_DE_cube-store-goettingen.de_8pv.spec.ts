import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cube-store-goettingen.de_8pv', ['https://cube-store-goettingen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
