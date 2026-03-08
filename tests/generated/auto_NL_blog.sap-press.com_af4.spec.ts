import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_blog.sap-press.com_af4', ['https://blog.sap-press.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
