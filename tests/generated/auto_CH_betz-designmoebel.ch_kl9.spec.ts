import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_betz-designmoebel.ch_kl9', ['https://betz-designmoebel.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
