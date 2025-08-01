import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_instant-gaming.com_6lm', ['https://www.instant-gaming.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
