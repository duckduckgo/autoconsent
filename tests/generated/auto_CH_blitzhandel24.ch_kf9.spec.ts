import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blitzhandel24.ch_kf9', ['https://blitzhandel24.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
