import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rijbewijskeuringsarts.nl_ufo', ['https://rijbewijskeuringsarts.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
