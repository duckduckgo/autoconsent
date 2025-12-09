import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_parlament-berlin.de_hj9', ['https://www.parlament-berlin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
