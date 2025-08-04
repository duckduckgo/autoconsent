import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gstaadmenuhinfestival.ch_1bs', ['https://www.gstaadmenuhinfestival.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
