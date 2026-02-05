import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_muenzen-huber.ch_ew4', ['https://www.muenzen-huber.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
