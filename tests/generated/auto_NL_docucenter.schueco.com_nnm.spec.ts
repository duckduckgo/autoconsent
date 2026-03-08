import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_docucenter.schueco.com_nnm', ['https://docucenter.schueco.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
