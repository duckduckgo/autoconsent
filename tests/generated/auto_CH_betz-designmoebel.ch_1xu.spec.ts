import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_betz-designmoebel.ch_1xu', ['https://betz-designmoebel.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
