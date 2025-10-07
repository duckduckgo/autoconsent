import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_winkelstraat.nl_5a7', ['https://www.winkelstraat.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
