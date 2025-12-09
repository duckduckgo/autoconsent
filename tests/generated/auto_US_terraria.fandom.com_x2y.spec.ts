import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_terraria.fandom.com_x2y', ['https://terraria.fandom.com/wiki/Terraria_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
