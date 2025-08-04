import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sissymarket.com_8f9', ['https://sissymarket.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
