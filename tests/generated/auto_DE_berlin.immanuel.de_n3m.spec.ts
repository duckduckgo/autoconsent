import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berlin.immanuel.de_n3m', ['https://berlin.immanuel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
