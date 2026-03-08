import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_evignetteswitzerland.ch_0aq', ['https://evignetteswitzerland.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
