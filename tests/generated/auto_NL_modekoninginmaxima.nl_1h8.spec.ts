import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_modekoninginmaxima.nl_1h8', ['https://www.modekoninginmaxima.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
