import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_autosloperijen.nl_5f2', ['https://www.autosloperijen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
