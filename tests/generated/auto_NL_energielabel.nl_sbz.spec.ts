import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_energielabel.nl_sbz', ['https://www.energielabel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
