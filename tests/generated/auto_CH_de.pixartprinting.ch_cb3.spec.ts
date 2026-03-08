import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.pixartprinting.ch_cb3', ['https://de.pixartprinting.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
