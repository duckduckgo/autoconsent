import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_create.roblox.com_m71', ['https://create.roblox.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
