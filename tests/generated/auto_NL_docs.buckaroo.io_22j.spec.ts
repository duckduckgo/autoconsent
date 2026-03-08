import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_docs.buckaroo.io_22j', ['https://docs.buckaroo.io/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
