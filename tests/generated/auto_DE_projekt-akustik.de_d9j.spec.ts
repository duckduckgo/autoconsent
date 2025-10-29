import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_projekt-akustik.de_d9j', ['https://www.projekt-akustik.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
