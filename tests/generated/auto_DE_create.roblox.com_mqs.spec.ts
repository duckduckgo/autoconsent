import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_create.roblox.com_mqs', ['https://create.roblox.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
