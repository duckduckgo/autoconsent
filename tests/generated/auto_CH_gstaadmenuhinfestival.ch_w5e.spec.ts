import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gstaadmenuhinfestival.ch_w5e', ['https://www.gstaadmenuhinfestival.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
