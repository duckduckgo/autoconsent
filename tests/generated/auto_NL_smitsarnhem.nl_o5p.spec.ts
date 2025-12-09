import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_smitsarnhem.nl_o5p', ['https://www.smitsarnhem.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
