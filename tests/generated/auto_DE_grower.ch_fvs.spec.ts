import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_grower.ch_fvs', ['https://www.grower.ch/forum/articles/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
