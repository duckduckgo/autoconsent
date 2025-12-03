import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitwadden.nl_ot4', ['https://www.visitwadden.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
