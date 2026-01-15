import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brauneck-bergbahn.de_5vw', ['https://www.brauneck-bergbahn.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
