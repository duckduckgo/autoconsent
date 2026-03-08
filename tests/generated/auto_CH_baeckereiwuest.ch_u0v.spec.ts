import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_baeckereiwuest.ch_u0v', ['https://baeckereiwuest.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
