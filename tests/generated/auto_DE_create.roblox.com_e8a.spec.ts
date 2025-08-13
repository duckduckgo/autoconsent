import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_create.roblox.com_e8a', ['https://create.roblox.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
