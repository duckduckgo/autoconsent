import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitbrabant.com_27w', ['https://www.visitbrabant.com/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
