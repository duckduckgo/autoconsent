import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_betterstack.com_wyc', ['https://betterstack.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
