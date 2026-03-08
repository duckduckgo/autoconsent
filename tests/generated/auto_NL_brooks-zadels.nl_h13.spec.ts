import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brooks-zadels.nl_h13', ['https://brooks-zadels.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
