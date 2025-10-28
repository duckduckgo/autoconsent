import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_energiewacht.nl_k2s', ['https://www.energiewacht.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
