import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pflege-durch-angehoerige.de_pm1', ['https://www.pflege-durch-angehoerige.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
