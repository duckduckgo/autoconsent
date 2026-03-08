import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blachenprinz.ch_nr3', ['https://blachenprinz.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
