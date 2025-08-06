import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitnijmegen.com_obe', ['https://www.visitnijmegen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
