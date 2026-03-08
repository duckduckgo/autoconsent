import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_endless-sky.fandom.com_zrk', ['https://endless-sky.fandom.com/wiki/Endless_Sky_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
