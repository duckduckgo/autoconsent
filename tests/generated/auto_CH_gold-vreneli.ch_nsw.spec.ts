import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gold-vreneli.ch_nsw', ['https://www.gold-vreneli.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
