import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_becomewealthy.ch_vvv', ['https://www.becomewealthy.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
