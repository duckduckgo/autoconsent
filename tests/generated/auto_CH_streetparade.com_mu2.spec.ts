import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_streetparade.com_mu2', ['https://www.streetparade.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
