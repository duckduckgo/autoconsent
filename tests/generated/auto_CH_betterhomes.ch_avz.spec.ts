import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_betterhomes.ch_avz', ['https://www.betterhomes.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
