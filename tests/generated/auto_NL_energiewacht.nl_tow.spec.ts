import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_energiewacht.nl_tow', ['https://www.energiewacht.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
