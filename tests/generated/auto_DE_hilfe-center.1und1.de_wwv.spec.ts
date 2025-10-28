import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hilfe-center.1und1.de_wwv', ['https://hilfe-center.1und1.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
