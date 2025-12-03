import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gezondheidsuniversiteit.nl_mhi', ['https://www.gezondheidsuniversiteit.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
