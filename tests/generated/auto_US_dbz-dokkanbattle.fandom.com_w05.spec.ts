import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dbz-dokkanbattle.fandom.com_w05', ['https://dbz-dokkanbattle.fandom.com/wiki/Dragon_Ball_Z_Dokkan_Battle_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
