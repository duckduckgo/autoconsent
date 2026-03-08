import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blog.maximilian-berger.com_uqt', ['https://blog.maximilian-berger.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
