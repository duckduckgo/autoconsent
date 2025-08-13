import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rijbewijskeuringsarts.nl_h69', ['https://rijbewijskeuringsarts.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
