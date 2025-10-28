import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_becomewealthy.ch_i7q', ['https://www.becomewealthy.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
