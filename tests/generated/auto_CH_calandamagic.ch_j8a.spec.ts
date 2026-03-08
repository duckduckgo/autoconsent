import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_calandamagic.ch_j8a', ['https://calandamagic.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
