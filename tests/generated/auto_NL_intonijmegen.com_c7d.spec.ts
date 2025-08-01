import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_intonijmegen.com_c7d', ['https://www.intonijmegen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
