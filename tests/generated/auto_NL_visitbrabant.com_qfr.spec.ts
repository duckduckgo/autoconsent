import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitbrabant.com_qfr', ['https://www.visitbrabant.com/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
