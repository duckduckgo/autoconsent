import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_produkte-im-test.de_eun', ['https://produkte-im-test.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
