import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_projekt-akustik.de_y16', ['https://www.projekt-akustik.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
