import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_create.roblox.com_l78', ['https://create.roblox.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
