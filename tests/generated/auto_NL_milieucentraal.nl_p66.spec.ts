import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_milieucentraal.nl_p66', ['https://www.milieucentraal.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
