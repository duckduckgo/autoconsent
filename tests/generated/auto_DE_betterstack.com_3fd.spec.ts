import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_betterstack.com_3fd', ['https://betterstack.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
