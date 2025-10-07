import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_betterstack.com_h4o', ['https://betterstack.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
