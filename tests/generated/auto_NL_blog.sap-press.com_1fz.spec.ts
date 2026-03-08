import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_blog.sap-press.com_1fz', ['https://blog.sap-press.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
