import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mostert-juweliers.nl_k3j', ['https://www.mostert-juweliers.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
