import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hedinautomotive.ch_k0i', ['https://hedinautomotive.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
