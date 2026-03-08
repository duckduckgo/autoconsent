import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_familyguy.fandom.com_r50', ['https://familyguy.fandom.com/wiki/Main_Page'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
