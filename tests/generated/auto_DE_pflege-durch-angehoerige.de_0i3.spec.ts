import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pflege-durch-angehoerige.de_0i3', ['https://www.pflege-durch-angehoerige.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
