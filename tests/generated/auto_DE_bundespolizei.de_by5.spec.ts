import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bundespolizei.de_by5', ['https://bundespolizei.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
