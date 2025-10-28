import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_produkte-im-test.de_a5z', ['https://produkte-im-test.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
