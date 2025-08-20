import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_support.hostpoint.ch_fp5', ['https://support.hostpoint.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
