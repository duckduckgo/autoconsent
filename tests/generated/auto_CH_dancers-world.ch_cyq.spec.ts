import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dancers-world.ch_cyq', ['https://dancers-world.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
