import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bergbahnen-gstaad.ch_wk1', ['https://bergbahnen-gstaad.ch/sommer'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
