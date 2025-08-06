import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_omroepwest.nl_qql', ['https://www.omroepwest.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
