import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_m.adultwork.com_rjj', ['https://m.adultwork.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
