import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_thingiverse.com_wr2', ['https://www.thingiverse.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
