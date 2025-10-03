import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_energielabel.nl_p0d', ['https://www.energielabel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
