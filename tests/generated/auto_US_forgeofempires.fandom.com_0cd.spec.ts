import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_forgeofempires.fandom.com_0cd', ['https://forgeofempires.fandom.com/wiki/Forge_of_Empires_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
