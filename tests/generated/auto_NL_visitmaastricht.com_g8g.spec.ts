import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitmaastricht.com_g8g', ['https://www.visitmaastricht.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
