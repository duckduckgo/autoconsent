import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_betterstack.com_g1d', ['https://betterstack.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
