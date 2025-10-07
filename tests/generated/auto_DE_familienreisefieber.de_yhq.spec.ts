import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_familienreisefieber.de_yhq', ['https://www.familienreisefieber.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
