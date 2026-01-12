import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_smitsarnhem.nl_330', ['https://www.smitsarnhem.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
