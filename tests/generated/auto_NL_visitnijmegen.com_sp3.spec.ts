import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitnijmegen.com_sp3', ['https://www.visitnijmegen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
