import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_parlament-berlin.de_tvn', ['https://www.parlament-berlin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
