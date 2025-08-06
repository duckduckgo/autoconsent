import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitmaastricht.com_dy4', ['https://www.visitmaastricht.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
