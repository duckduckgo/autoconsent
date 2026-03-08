import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_friedrichroda.de_7b1', ['https://friedrichroda.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
