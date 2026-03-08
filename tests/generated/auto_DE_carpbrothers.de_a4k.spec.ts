import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_carpbrothers.de_a4k', ['https://carpbrothers.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
