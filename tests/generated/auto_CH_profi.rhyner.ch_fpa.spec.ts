import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_profi.rhyner.ch_fpa', ['https://profi.rhyner.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
