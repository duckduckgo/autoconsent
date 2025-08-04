import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_keepersecurity.com_szj', ['https://www.keepersecurity.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
