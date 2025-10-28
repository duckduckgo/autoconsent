import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gottesdienst-ref.ch_pi2', ['https://www.gottesdienst-ref.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
