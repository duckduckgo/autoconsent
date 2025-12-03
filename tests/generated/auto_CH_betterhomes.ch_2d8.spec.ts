import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_betterhomes.ch_2d8', ['https://www.betterhomes.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
