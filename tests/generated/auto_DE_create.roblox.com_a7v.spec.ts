import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_create.roblox.com_a7v', ['https://create.roblox.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
