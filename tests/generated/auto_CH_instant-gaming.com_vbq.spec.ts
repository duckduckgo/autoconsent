import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_instant-gaming.com_vbq', ['https://www.instant-gaming.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
