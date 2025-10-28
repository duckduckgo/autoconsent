import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_verkadefabriek.nl_q1z', ['https://www.verkadefabriek.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
