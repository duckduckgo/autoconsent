import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fire.fandom.com_r41', ['https://fire.fandom.com/wiki/Main_Page'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
