import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_beau-rivage-thun.ch_so9', ['https://beau-rivage-thun.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
