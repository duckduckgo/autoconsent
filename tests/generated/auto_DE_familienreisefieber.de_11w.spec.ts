import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_familienreisefieber.de_11w', ['https://www.familienreisefieber.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
