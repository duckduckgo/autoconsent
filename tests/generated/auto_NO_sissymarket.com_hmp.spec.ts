import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sissymarket.com_hmp', ['https://sissymarket.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
