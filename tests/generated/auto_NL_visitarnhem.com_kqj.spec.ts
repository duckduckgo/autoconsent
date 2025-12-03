import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitarnhem.com_kqj', ['https://www.visitarnhem.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
