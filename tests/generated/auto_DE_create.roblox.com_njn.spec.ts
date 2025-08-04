import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_create.roblox.com_njn', ['https://create.roblox.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
