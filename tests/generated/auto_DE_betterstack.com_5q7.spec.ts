import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_betterstack.com_5q7', ['https://betterstack.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
