import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autolackprofi24.de_uhf', ['https://autolackprofi24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
