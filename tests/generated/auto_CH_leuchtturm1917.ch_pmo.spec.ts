import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_leuchtturm1917.ch_pmo', ['https://www.leuchtturm1917.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
