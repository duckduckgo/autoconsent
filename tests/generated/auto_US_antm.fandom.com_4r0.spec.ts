import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_antm.fandom.com_4r0', ['https://antm.fandom.com/wiki/Main_Page'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
