import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_siebeljuweliers.nl_bq2', ['https://www.siebeljuweliers.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
