import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_diemitteaargau.ch_j5t', ['https://diemitteaargau.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
