import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lux-nijmegen.nl_b7n', ['https://www.lux-nijmegen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
