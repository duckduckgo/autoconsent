import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_velofactory.ch_a2e', ['https://www.velofactory.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
