import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_casinotheater.ch_x49', ['https://www.casinotheater.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
