import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_daikin.nl_bkr', ['https://www.daikin.nl/nl_nl/consument.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
