import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mrmarvis.com_h2h', ['https://www.mrmarvis.com/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
