import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_codecampworld.ch_lia', ['https://en.codecampworld.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
