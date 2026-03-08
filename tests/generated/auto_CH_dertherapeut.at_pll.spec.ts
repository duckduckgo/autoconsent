import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dertherapeut.at_pll', ['https://dertherapeut.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
