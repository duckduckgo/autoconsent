import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_siebeljuweliers.nl_1en', ['https://www.siebeljuweliers.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
