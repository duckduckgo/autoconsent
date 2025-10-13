import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pflege-durch-angehoerige.de_u6z', ['https://www.pflege-durch-angehoerige.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
