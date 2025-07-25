import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_saanenbank.ch_jcy', ['https://www.saanenbank.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
