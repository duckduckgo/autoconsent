import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gstaadmenuhinfestival.ch_s0s', ['https://www.gstaadmenuhinfestival.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
