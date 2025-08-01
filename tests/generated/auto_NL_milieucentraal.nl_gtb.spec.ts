import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_milieucentraal.nl_gtb', ['https://www.milieucentraal.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
