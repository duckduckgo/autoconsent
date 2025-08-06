import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_milieucentraal.nl_4fo', ['https://www.milieucentraal.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
