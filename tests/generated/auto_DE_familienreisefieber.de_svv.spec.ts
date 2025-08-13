import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_familienreisefieber.de_svv', ['https://www.familienreisefieber.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
