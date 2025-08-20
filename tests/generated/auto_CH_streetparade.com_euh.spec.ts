import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_streetparade.com_euh', ['https://www.streetparade.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
