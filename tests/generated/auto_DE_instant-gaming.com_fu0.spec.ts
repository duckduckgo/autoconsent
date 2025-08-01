import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_instant-gaming.com_fu0', ['https://www.instant-gaming.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
