import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_amadeo-ambiente.ch_x5c', ['https://amadeo-ambiente.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
