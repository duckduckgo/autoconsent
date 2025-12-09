import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brauneck-bergbahn.de_a22', ['https://www.brauneck-bergbahn.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
