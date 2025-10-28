import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_blindwalls.gallery_rlg', ['https://blindwalls.gallery/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
