import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_winkelstraat.nl_ma7', ['https://www.winkelstraat.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
