import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_intonijmegen.com_ogt', ['https://www.intonijmegen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
