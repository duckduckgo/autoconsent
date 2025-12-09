import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ffxiclopedia.fandom.com_k5w', ['https://ffxiclopedia.fandom.com/wiki/Main_Page'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
