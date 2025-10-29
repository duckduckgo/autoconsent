import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mrmarvis.com_tse', ['https://www.mrmarvis.com/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
