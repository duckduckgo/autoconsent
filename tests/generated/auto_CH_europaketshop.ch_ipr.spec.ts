import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_europaketshop.ch_ipr', ['https://europaketshop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
