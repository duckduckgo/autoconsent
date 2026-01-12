import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zimmerpflanzen.ch_t6h', ['https://zimmerpflanzen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
