import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_winkelstraat.nl_r9u', ['https://www.winkelstraat.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
