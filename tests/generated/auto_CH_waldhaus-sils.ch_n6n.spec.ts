import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_waldhaus-sils.ch_n6n', ['https://www.waldhaus-sils.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
