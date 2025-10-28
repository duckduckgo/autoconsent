import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_corbettmaths.com_6ct', ['https://corbettmaths.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
