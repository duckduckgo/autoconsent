import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_televizier.nl_l0l', ['https://www.televizier.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
