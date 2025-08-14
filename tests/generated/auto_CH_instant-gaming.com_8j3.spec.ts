import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_instant-gaming.com_8j3', ['https://www.instant-gaming.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
