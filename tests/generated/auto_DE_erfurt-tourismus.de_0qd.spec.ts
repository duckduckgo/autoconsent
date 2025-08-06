import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erfurt-tourismus.de_0qd', ['https://www.erfurt-tourismus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
