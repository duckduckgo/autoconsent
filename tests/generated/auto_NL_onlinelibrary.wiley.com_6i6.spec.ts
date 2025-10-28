import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_onlinelibrary.wiley.com_6i6', ['https://onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
