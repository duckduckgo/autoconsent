import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_diefloristin.ch_bd0', ['https://diefloristin.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
