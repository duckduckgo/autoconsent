import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_grower.ch_tsg', ['https://www.grower.ch/forum/articles/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
