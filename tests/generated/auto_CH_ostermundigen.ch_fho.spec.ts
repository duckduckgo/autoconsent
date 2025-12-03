import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ostermundigen.ch_fho', ['https://www.ostermundigen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
