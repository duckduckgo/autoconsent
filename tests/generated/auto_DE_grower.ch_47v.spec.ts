import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_grower.ch_47v', ['https://www.grower.ch/forum/articles/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
