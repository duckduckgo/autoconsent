import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_omroepwest.nl_a4i', ['https://www.omroepwest.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
