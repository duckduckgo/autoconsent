import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eugster-transporte.ch_r6u', ['https://eugster-transporte.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
