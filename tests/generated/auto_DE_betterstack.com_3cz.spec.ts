import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_betterstack.com_3cz', ['https://betterstack.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
