import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_multipharma.be_bf3', ['https://www.multipharma.be/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
