import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitarnhem.com_nuw', ['https://www.visitarnhem.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
