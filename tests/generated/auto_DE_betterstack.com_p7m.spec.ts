import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_betterstack.com_p7m', ['https://betterstack.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
