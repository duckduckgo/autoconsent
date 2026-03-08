import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_app.flexgold.com_u58', ['https://app.flexgold.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
