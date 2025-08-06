import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_energielabel.nl_lk5', ['https://www.energielabel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
