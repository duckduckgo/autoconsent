import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_daikin.nl_xns', ['https://www.daikin.nl/nl_nl/consument.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
