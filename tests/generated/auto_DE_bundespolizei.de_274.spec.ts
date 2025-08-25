import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bundespolizei.de_274', ['https://bundespolizei.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
