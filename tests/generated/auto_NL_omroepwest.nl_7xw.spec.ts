import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_omroepwest.nl_7xw', ['https://www.omroepwest.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
