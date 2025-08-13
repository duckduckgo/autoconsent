import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_milieucentraal.nl_f3u', ['https://www.milieucentraal.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
