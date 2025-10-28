import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aargauerkunsthaus.ch_p4o', ['https://aargauerkunsthaus.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
