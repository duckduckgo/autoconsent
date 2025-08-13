import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_omroepwest.nl_k8o', ['https://www.omroepwest.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
