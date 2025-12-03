import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erfurt-tourismus.de_u8e', ['https://www.erfurt-tourismus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
