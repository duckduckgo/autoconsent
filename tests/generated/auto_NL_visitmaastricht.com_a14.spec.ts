import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitmaastricht.com_a14', ['https://www.visitmaastricht.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
