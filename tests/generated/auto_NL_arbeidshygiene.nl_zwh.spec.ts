import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_arbeidshygiene.nl_zwh', ['https://arbeidshygiene.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
