import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sissymarket.com_j4f', ['https://sissymarket.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
