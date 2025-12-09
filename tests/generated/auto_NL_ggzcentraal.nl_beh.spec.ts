import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ggzcentraal.nl_beh', ['https://www.ggzcentraal.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
