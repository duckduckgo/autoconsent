import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bundespolizei.de_9wa', ['https://bundespolizei.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
